import React, { memo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@utils/queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AppTheme } from './theme';
import { PublicRouter } from './routes';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <ThemeProvider theme={AppTheme}>
        <PublicRouter />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default memo(App);
