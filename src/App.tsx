import React, { memo } from 'react';
import { ThemeProvider } from '@emotion/react';

import { AppTheme } from './theme';
import Home from './pages/Home';
import { Button } from './components';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Home>
        <Button />
      </Home>
    </ThemeProvider>
  );
}

export default memo(App);
