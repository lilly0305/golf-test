import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

interface ICodeResult {
  status: string;
  message?: string | null;
  data: Array<string>;
}

interface IUseCode {
  proTypeCode: ICodeResult | null | undefined;
}
export function useCode(): IUseCode {
  const queryclient = useQueryClient();

  async function getCodeValue(codeKey: number): Promise<ICodeResult | null> {
    const { data } = await axios.get(`/api/v1/code/${codeKey}`);

    return data.data;
  }

  const { data: proTypeCode } = useQuery<ICodeResult | null>(
    'proTypeCode',
    async () => getCodeValue(1),
    {
      staleTime: 60 * 1000 * 10, // 10분,
      cacheTime: 60 * 1000 * 20, // 20분,
      retry: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchInterval: 60 * 1000 * 10,
      onSuccess: (received: ICodeResult | null) => {
        queryclient.setQueryData('proTypeCode', received);
      },
    },
  );
  return { proTypeCode };
}
