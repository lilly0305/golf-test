import React, { memo, useCallback } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { useUser } from '@global-states/useUser';
import { CroppedFigure, CroppedImage, RemixIcon } from '@assets/styles/CommonStyles';
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

const MypageNav = styled.div(() => ({
  position: 'relative',
  minWidth: '18rem',
}));

const Profile = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0 0.8rem',
}));

const NavModal = styled.div(({ theme }) => ({
  position: 'absolute',
  top: '110%',
  width: '100%',
  padding: '0.4rem 0',
  background: theme.color.white,
  border: `1px solid ${theme.color.divider_grey}`,
  color: theme.color.base_black,
  fontSize: '1.4rem',
}));

interface IStyledNav {
  onClick?: () => void;
}
const StyledNav = styled.button<IStyledNav>(({ theme }) => ({
  padding: '0.4rem 1.2rem',
  background: theme.color.white,
  fontWeight: theme.fontWeight.bold,
}));

const StyledLink = styled.a(() => ({
  display: 'block',
  padding: '0.6rem 2.4rem',
}));

function WebHeader() {
  const theme = useTheme();
  const { userData } = useUser();
  const queryclient = useQueryClient();

  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    queryclient.invalidateQueries('userData');
    // clearUser();
  }, [queryclient]);

  return (
    <WebHeaderContainer>
      <Link to="/">
        <CroppedFigure width="7.4rem" height="4.2rem">
          <CroppedImage src={theme.image.logoWhite} alt="흰색 로고" />
        </CroppedFigure>
      </Link>

      <WebNav />

      {userData !== null ? (
        <MypageNav>
          <Profile>
            <CroppedFigure width="4.8rem" height="4.8rem" radius="50%">
              <CroppedImage src={userData?.profile_image} alt="흰색 로고" />
            </CroppedFigure>
            {userData?.nickname}
            <RemixIcon className="ri-arrow-down-s-fill" />
          </Profile>

          <NavModal>
            <StyledNav>마이페이지</StyledNav>
            <div>
              <StyledLink href="/user-info">회원 정보 수정</StyledLink>
              <StyledLink href="/profile">프로필</StyledLink>
              <StyledLink href="/like-list">찜 목록</StyledLink>
              <StyledLink href="/suggestions">내가 쓴 제안서</StyledLink>
              <StyledLink href="/requests">내가 쓴 신청서</StyledLink>
            </div>
            <StyledNav onClick={logout}>로그아웃</StyledNav>
          </NavModal>
        </MypageNav>
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
