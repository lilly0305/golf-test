import { QueryClient } from 'react-query';

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchInterval: 1000 * 30,
      refetchIntervalInBackground: false,
      suspense: false,
      staleTime: 60 * 1000, // 1분
      cacheTime: 60 * 1000 * 5, // 5분
      keepPreviousData: true,
    },
    mutations: {
      retry: 0,
    },
  },
};

export const queryClient = new QueryClient(queryClientConfig);
