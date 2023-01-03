import React, { memo } from 'react';

import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { CroppedFigure, CroppedImage } from '@assets/styles/CommonStyles';

const navList = [
  {
    id: 0,
    navTitle: '양도 받기',
    linkTo: '/transferred',
  },
  {
    id: 1,
    navTitle: '양도 하기',
    linkTo: '/transferring',
  },
  {
    id: 2,
    navTitle: '팀 찾기',
    linkTo: '/team',
  },
  {
    id: 3,
    navTitle: '멤버 찾기',
    linkTo: '/member',
  },
  {
    id: 4,
    navTitle: '골프장',
    linkTo: '/golf-course',
  },
  {
    id: 5,
    navTitle: '고객센터',
    linkTo: '/customer',
  },
];

interface IMobileNavContainer {
  active: boolean;
}
const MobileNavContainer = styled.nav<IMobileNavContainer>(({ theme, active }) => ({
  position: 'fixed',
  zIndex: 999,
  display: 'flex',
  transition: 'left 0.3s',
  flexDirection: 'column',
  width: '100%',
  height: 'calc(100vh - 5rem)',
  background: theme.color.point_color,
  color: theme.color.white,
  left: active ? 0 : '-100vw',
}));

const StyledLink = styled.a(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  fontSize: '1.4rem',
  padding: '1.6rem',
  gap: '1.2rem',
  borderBottom: `1px solid ${theme.color.grey_opacity_60}`,
}));

const Footer = styled.p(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2rem',
  padding: '3rem',
  fontWeight: theme.fontWeight.bold,
}));

interface IMobileNav {
  active: boolean;
}
function MobileNav({ active }: IMobileNav) {
  const theme = useTheme();
  return (
    <MobileNavContainer active={active}>
      <StyledLink href="/login">
        <CroppedFigure width="4.8rem" height="4.8rem">
          <CroppedImage src={theme.image.defaultProfile} alt="흰색 로고" />
        </CroppedFigure>
        로그인
      </StyledLink>

      {navList.map((nav) => (
        <StyledLink key={nav.id} href={nav.linkTo}>
          {nav.navTitle}
        </StyledLink>
      ))}

      <Footer>All rights reserved by ITDA.</Footer>
    </MobileNavContainer>
  );
}

export default memo(MobileNav);
