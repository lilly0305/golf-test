import React, { memo } from 'react';
import styled from '@emotion/styled';
import { IsDefault, IsDesktop } from '../../utils/mediaquery/mediaQuery';
import MobileHeader from './MobileHeader';

const HeaderContainer = styled.header(({ theme }) => ({
  width: '100vw',
  height: 'fit-content',
  background: theme.color.point_color,
  color: theme.color.white,
}));

function Header() {
  return (
    <HeaderContainer>
      <IsDefault>
        <MobileHeader />
      </IsDefault>

      <IsDesktop>
        <div className="desktop-header">desktopHEader</div>
      </IsDesktop>
    </HeaderContainer>
  );
}

export default memo(Header);
