import { CroppedFigure, CroppedImage, RemixIcon } from '@assets/styles/CommonStyles';
import styled from '@emotion/styled';
import { IUser } from '@global-states/useUser';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useQueryClient } from 'react-query';

const MypageModal = styled.div(() => ({
  position: 'relative',
  minWidth: '18rem',
}));

const Profile = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0 0.8rem',
  cursor: 'pointer',
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
const StyledNav = styled.button<IStyledNav>(({ theme, onClick }) => ({
  padding: '0.4rem 1.2rem',
  background: theme.color.white,
  fontWeight: theme.fontWeight.bold,
  color: onClick ? theme.color.placeholder_color : theme.color.base_black,
}));

const StyledLink = styled.a(() => ({
  display: 'block',
  padding: '0.6rem 2.4rem',
}));

interface IMypageNav {
  userData: IUser | null | undefined;
}

function MypageNav({ userData }: IMypageNav) {
  const queryclient = useQueryClient();
  const wrapperRef = useRef(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [arrowToggle, setArrowToggle] = useState(false);

  function useOutsideClick(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any): void {
        if (ref.current && !ref.current.contains(event.target)) {
          setProfileOpen(false);
          setArrowToggle(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideClick(wrapperRef);

  const handleModalToggle = useCallback(() => {
    setProfileOpen((prev) => !prev);
    setArrowToggle((prev) => !prev);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    queryclient.invalidateQueries('userData');
    // clearUser();
  }, [queryclient]);

  return (
    <MypageModal ref={wrapperRef}>
      <Profile onClick={handleModalToggle}>
        <CroppedFigure width="4.8rem" height="4.8rem" radius="50%">
          <CroppedImage src={userData?.profile_image} alt="흰색 로고" />
        </CroppedFigure>
        {userData?.nickname}
        {arrowToggle ? (
          <RemixIcon className="ri-arrow-down-s-fill" />
        ) : (
          <RemixIcon className="ri-arrow-up-s-fill" />
        )}
      </Profile>

      {profileOpen && (
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
      )}
    </MypageModal>
  );
}

export default MypageNav;
