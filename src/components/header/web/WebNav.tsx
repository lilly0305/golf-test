import React, { memo } from 'react';

import styled from '@emotion/styled';
import navList from '@components/header/navList.json';

const WebNavContainer = styled.nav(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  gap: '0 2rem',
  color: theme.color.white,
}));

const StyledLink = styled.a(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.4rem',
  padding: '0.8rem 1.6rem',
  gap: '1.2rem',
  fontWeight: theme.fontWeight.bold,
}));

function WebNav() {
  return (
    <WebNavContainer>
      {navList.map((nav) => (
        <StyledLink key={nav.id} href={nav.linkTo}>
          {nav.navTitle}
        </StyledLink>
      ))}
    </WebNavContainer>
  );
}

export default memo(WebNav);
