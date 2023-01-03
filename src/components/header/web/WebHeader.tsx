import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { CroppedFigure, CroppedImage } from '@assets/styles/CommonStyles';
import { useTheme } from '@emotion/react';
import WebNav from './WebNav';

const WebHeaderContainer = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.2rem 3rem',
  width: '100%',
  background: theme.color.point_color,
  fontSize: '1.6rem',
  color: theme.color.white,
}));

function WebHeader() {
  const theme = useTheme();

  return (
    <WebHeaderContainer>
      <Link to="/">
        <CroppedFigure width="7.4rem" height="4.2rem">
          <CroppedImage src={theme.image.logoWhite} alt="흰색 로고" />
        </CroppedFigure>
      </Link>

      <WebNav />

      <Link to="/login">
        <CroppedFigure width="4.8rem" height="4.8rem">
          <CroppedImage src={theme.image.defaultProfile} alt="흰색 로고" />
        </CroppedFigure>
      </Link>
    </WebHeaderContainer>
  );
}

export default memo(WebHeader);
