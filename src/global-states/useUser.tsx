import { useQuery, useQueryClient } from 'react-query';
import useAxios from '@utils/useAxios';

const user = {
  id: 1,
  nickname: '하루세번펭수',
  user_id: 'yhk0305',
  confirm_pw: 'qweqwe123',
  phone: '01049555429',
  useterm: true,
  personal_info: true,
  sms: true,
  marketing: false,
};

interface IUser {
  id: number;
  nickname: string;
  user_id: string;
  confirm_pw: string;
  phone: string;
  useterm: boolean;
  personal_info: boolean;
  sms: boolean;
  marketing: boolean;
}

function getStoredUser(): IUser | null {
  const storedUser = localStorage.getItem('accessToken');
  console.log(storedUser);
  return storedUser ? user : null;
}

interface IUseUser {
  userData: IUser | null | undefined;
  updateUser: (newUser: IUser) => void;
  clearUser: () => void;
}
export function useUser(): IUseUser {
  const queryclient = useQueryClient();
  const interceptor = useAxios();

  async function getUser(userData: IUser | null): Promise<IUser | null> {
    if (!userData) return null;

    const { data } = await interceptor.get(`/user/${userData.id}`);
    return data.user;
  }

  function updateUser(newUser: IUser): void {
    queryclient.setQueryData('userData', newUser);
  }

  function clearUser() {
    queryclient.setQueryData('userData', null);
  }

  const { data: userData } = useQuery<IUser | null>('userData', () => getUser(user), {
    initialData: getStoredUser,
    onSuccess: (received: IUser | null) => {
      if (!received) {
        console.log('ddd');
        clearUser();
      } else {
        updateUser(received);
        console.log('eee');
      }
    },
  });

  return { userData, updateUser, clearUser };
}
