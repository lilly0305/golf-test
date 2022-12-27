import React, { memo } from 'react';
import { ThemeProvider } from '@emotion/react';

import { AppTheme } from './theme';
import Home from './screen/Home';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default memo(App);
