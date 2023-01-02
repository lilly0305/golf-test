import React, { memo } from 'react';
import { ThemeProvider } from '@emotion/react';

import PublicRuter from './routes/PublicRuter';
import { AppTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <PublicRuter />
    </ThemeProvider>
  );
}

export default memo(App);
