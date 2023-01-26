import React, { memo, useState } from 'react';
import styled from '@emotion/styled';

import { useUser } from '@global-states/useUser';
import { IsDefault, IsDesktop } from '@utils/mediaquery/mediaQuery';
import { MobileHeader, MobileNav } from './mobile';
import { WebHeader } from './web';

const HeaderContainer = styled.header(({ theme }) => ({
  width: '100vw',
  maxheight: '100vh',
  color: theme.color.white,
}));

function Header() {
  const [active, setActive] = useState<boolean>(false);
  const { userData } = useUser();

  return (
    <HeaderContainer>
      <IsDefault>
        <div>
          <MobileHeader active={active} setActive={setActive} />
          <MobileNav active={active} userData={userData} />
        </div>
      </IsDefault>

      <IsDesktop>
        <WebHeader userData={userData} />
      </IsDesktop>
    </HeaderContainer>
  );
}

export default memo(Header);
