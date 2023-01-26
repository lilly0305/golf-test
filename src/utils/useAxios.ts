import axios from 'axios';

const useAxios = () => {
  const token: any = localStorage.getItem('tokens');

  if (token === null) return null;
  const parseToken = JSON.parse(token);

  const axiosInstance = axios.create({
    headers: { Authorization: `Bearer ${parseToken?.accessToken}` },
  });

  return axiosInstance;
};

export default useAxios;
