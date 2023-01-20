import { useQuery, useQueryClient } from 'react-query';
// import useAxios from '@utils/useAxios';

const user = {
  id: 1,
  nickname: '하루세번펭수',
  user_id: 'yhk0305',
  user_pw: 'qweqwe123',
  phone: '01049555429',
  use_term_policy: true,
  personal_policy: true,
  sms_policy: true,
  marketing_policy: false,
  profile_image: require('@assets/images/profile_sample01.png'),
};

export interface IUser {
  id: number;
  nickname: string;
  user_id: string;
  user_pw: string;
  phone: string;
  use_term_policy: boolean;
  personal_policy: boolean;
  sms_policy: boolean;
  marketing_policy: boolean;
  profile_image: string;
}

function getStoredUser(): IUser | null {
  const storedUser = localStorage.getItem('accessToken');
  return storedUser ? user : null;
}

interface IUseUser {
  userData: IUser | null | undefined;
  updateUser: (newUser: IUser) => void;
  clearUser: () => void;
  isLoggedIn: boolean;
}
export function useUser(): IUseUser {
  const queryclient = useQueryClient();
  // const interceptor = useAxios();

  async function getUser(userData: IUser | null): Promise<IUser | null> {
    if (!userData) return null;

    // const { data } = await interceptor.get(`/user/${userData.id}`);
    return userData;
  }

  function updateUser(newUser: IUser): void {
    queryclient.setQueryData('userData', newUser);
  }

  function clearUser() {
    queryclient.setQueryData('userData', null);
  }

  const { data: userData } = useQuery<IUser | null>('userData', () => getUser(user), {
    initialData: getStoredUser,
    staleTime: Infinity,
    cacheTime: Infinity,
    onSuccess: (received: IUser | null) => {
      if (!received) {
        console.log('ddd');
        // clearUser();
      } else {
        // updateUser(received);
        console.log('eee');
      }
    },
  });

  const isLoggedIn = userData !== null;

  return { userData, updateUser, clearUser, isLoggedIn };
}
