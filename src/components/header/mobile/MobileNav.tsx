import React from 'react';
import styled from '@emotion/styled';

const MobileNavContainer = styled.nav(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  background: theme.color.point_color,
  color: theme.color.white,
}));

function MobileNav() {
  return <MobileNavContainer></MobileNavContainer>;
}

export default MobileNav;
