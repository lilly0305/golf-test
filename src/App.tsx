import React, { memo } from 'react';
import { ThemeProvider } from '@emotion/react';

import theme from './theme';
import Home from './screen/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default memo(App);
