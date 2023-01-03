import React, { memo } from 'react';
import { ThemeProvider } from '@emotion/react';

import { AppTheme } from './theme';
import { PublicRouter } from './routes';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <PublicRouter />
    </ThemeProvider>
  );
}

export default memo(App);
