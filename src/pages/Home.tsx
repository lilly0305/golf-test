import React, { memo } from 'react';

import Test from '../components/Test';
import { IsDesktop } from '../utils/mediaquery/mediaQuery';

interface IHome {
  children: React.ReactNode;
}
function Home({ children }: IHome) {
  return (
    <div>
      <IsDesktop>
        <Test />
      </IsDesktop>

      {children}
    </div>
  );
}

export default memo(Home);
