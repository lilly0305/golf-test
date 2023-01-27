import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';

type INicknameCheck = {
  status: string;
  message: string;
  data: boolean;
  totalCnt: boolean;
};

interface ICheckDupliacte {
  key: string | any;
  value: string | any;
}
export default function useCheckDuplicate() {
  interface ICheck {
    key: string | any;
    value: string;
  }
  const check = async ({ key, value }: ICheck): Promise<any> => {
    await axios.post<ICheck>('/api/v1/user/check-duplicate', {
      [key]: value,
    });
  };

  return useMutation<INicknameCheck, AxiosError, ICheckDupliacte>('checkDuplicate', check);
}
