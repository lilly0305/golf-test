import styled from '@emotion/styled';
import React, { memo } from 'react';
import { IsDefault, IsDesktop } from '../../utils/mediaquery/mediaQuery';

const HeaderContainer = styled.header(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100vw',
  height: 'fit-content',
  background: theme.color.point_color,
  color: theme.color.white,
}));

function Header() {
  return (
    <HeaderContainer>
      <IsDefault>
        <div className="mobile-header">mobileHEader</div>
      </IsDefault>

      <IsDesktop>
        <div className="desktop-header">desktopHEader</div>
      </IsDesktop>
    </HeaderContainer>
  );
}

export default memo(Header);
