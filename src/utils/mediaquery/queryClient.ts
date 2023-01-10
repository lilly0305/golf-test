import { QueryClient } from 'react-query';

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchInterval: 1000 * 30,
      refetchIntervalInBackground: false,
      suspense: false,
      staleTime: 60 * 1000, // 1분
      cacheTime: 60 * 5 * 1000, // 5분
      keepPreviousData: true,
    },
    mutations: {
      retry: 1,
    },
  },
};

export const queryClient = new QueryClient(queryClientConfig);
