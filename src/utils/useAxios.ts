import axios from 'axios';
import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';

const useAxios = () => {
  const token: any = localStorage.getItem('tokens');

  if (token === null) return null;

  interface IParsedToken {
    access_token: string;
    refresh_token: string;
  }
  const parsedToken: IParsedToken = JSON.parse(token);

  let newToken = '';

  const axiosInstance = axios.create({
    headers: { Authorization: `Bearer ${parsedToken?.access_token}` },
  });

  axiosInstance.interceptors.request.use(
    async (req) => {
      interface IUser {
        exp: number;
        iat: number;
        roles: string;
        sub: string;
      }
      const user: IUser = jwtDecode(parsedToken.access_token);

      interface IDecodedRefreshToken {
        iat: number;
        exp: number;
      }
      const decodedRefreshToken: IDecodedRefreshToken = jwtDecode(parsedToken.refresh_token);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      if (!isExpired) return req;

      const isExpriedRefToken = dayjs.unix(decodedRefreshToken.exp).diff(dayjs()) < 1;
      if (isExpriedRefToken) {
        throw new axios.Cancel('expried refresh token');
      }

      try {
        const res = await axios.post('/api/v1/user/token-refresh', {
          refresh_token: parsedToken.refresh_token,
        });

        newToken = res?.data.data;
      } catch (error: any) {
        if (error.response?.status === 400) {
          console.log('에러 발생');
        }
      }

      const newTokens = {
        accessToken: newToken,
        refreshToken: parsedToken.refresh_token,
      };

      localStorage.setItem('tokens', JSON.stringify(newTokens));

      req.headers = {
        Authorization: `Bearer ${newToken}`,
      };

      return req;
    },
    (error) => {
      if (error.response.status === 400) {
        console.log('Token expired!');
      }
    },
  );

  return axiosInstance;
};

export default useAxios;
