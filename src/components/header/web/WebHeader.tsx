import React, { memo } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { useUser } from '@global-states/useUser';
import { CroppedFigure, CroppedImage } from '@assets/styles/CommonStyles';
import WebNav from './WebNav';
import MypageNav from './MypageNav';

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
  const { userData } = useUser();

  return (
    <WebHeaderContainer>
      <Link to="/">
        <CroppedFigure width="7.4rem" height="4.2rem">
          <CroppedImage src={theme.image.logoWhite} alt="흰색 로고" />
        </CroppedFigure>
      </Link>

      <WebNav />

      {userData !== null ? (
        <MypageNav userData={userData} />
      ) : (
        <Link to="/login">
          <CroppedFigure width="4.8rem" height="4.8rem">
            <CroppedImage src={theme.image.defaultProfile} alt="흰색 로고" />
          </CroppedFigure>
        </Link>
      )}
    </WebHeaderContainer>
  );
}

export default memo(WebHeader);
