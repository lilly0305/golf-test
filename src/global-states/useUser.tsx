import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

export interface IUserData {
  user_key: number;
  gender: string;
  phone: string;
  nickname: string;
  user_name: string;
  use_term_policy: boolean;
  sms_policy: boolean;
  pro_yn: boolean;
  personal_policy: boolean;
  user_id: string;
  marketing_policy: boolean;
  career: string;
  file_url: string;
  avg_score: string;
}

interface IUseUser {
  userData: IUserData | null | undefined;
  updateUser: (newUser: IUserData) => void;
  clearUser: () => void;
  isLoggedIn: boolean;
}
export function useUser(): IUseUser {
  const token: any = localStorage.getItem('tokens');
  const queryclient = useQueryClient();
  const navigate = useNavigate();

  async function getUser(storedToken: any): Promise<IUserData | null> {
    if (storedToken === null) return null;

    let res;
    try {
      res = await axios.get('/api/v1/user/my-info', {
        headers: { Authorization: `Bearer ${storedToken?.access_token}` },
      });
    } catch (error) {
      console.log(error);
    }

    return res?.data.data;
  }

  function updateUser(newUser: IUserData): void {
    queryclient.setQueryData('userData', newUser);
  }

  function clearUser() {
    queryclient.setQueryData('userData', null);
  }

  const { data: userData } = useQuery<IUserData | null>(
    ['userData', token],
    () => getUser(JSON.parse(token)),
    {
      staleTime: 60 * 1000 * 10, // 10분,
      cacheTime: 60 * 1000 * 20, // 20분,
      retry: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchInterval: 60 * 1000 * 10,
      enabled: token !== null,
      onSuccess: (received: IUserData | null) => {
        if (!received) {
          console.log('clear user');
          // clearUser();
        } else {
          updateUser(received);
          console.log(received, 'update user');
        }
      },
      onError: (error: any) => {
        // error
        if (error.response.status === 401) {
          localStorage.removeItem('tokens');
          queryclient.setQueryData('userData', null);
          navigate('/login');
        }
      },
    },
  );

  const isLoggedIn = userData !== null;

  return { userData, updateUser, clearUser, isLoggedIn };
}
