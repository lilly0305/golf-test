import React, { memo, useState } from 'react';

import styled from '@emotion/styled';

import { IsDefault, IsDesktop } from '@utils/mediaquery/mediaQuery';
import MobileHeader from './mobile/MobileHeader';
import MobileNav from './mobile/MobileNav';
import WebHeader from './web/WebHeader';

const HeaderContainer = styled.header(({ theme }) => ({
  width: '100vw',
  maxheight: '100vh',
  color: theme.color.white,
}));

function Header() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <IsDefault>
        <div>
          <MobileHeader active={active} setActive={setActive} />
          <MobileNav active={active} />
        </div>
      </IsDefault>

      <IsDesktop>
        <WebHeader />
      </IsDesktop>
    </HeaderContainer>
  );
}

export default memo(Header);
