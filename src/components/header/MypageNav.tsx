import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CroppedFigure, CroppedImage, RemixIcon } from '@assets/styles/CommonStyles';
import styled from '@emotion/styled';
import { mq } from '@utils/mediaquery/mediaQuery';
import { useQueryClient } from 'react-query';
import { IUserData } from '@global-states/useUser';
import { useTheme } from '@emotion/react';

const MypageModal = styled.div(() => ({
  position: 'relative',
  minWidth: '18rem',
}));

const Profile = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0 0.8rem',
  cursor: 'pointer',
  padding: '1.6rem',
  borderBottom: `1px solid ${theme.color.grey_opacity_60}`,
  [mq('desktop')]: {
    borderBottom: 'none',
    padding: '0',
  },
}));

const NavModal = styled.div(({ theme }) => ({
  width: '100%',
  padding: '1.6rem',
  background: theme.color.white,
  color: theme.color.base_black,
  fontSize: '1.4rem',
  [mq('desktop')]: {
    position: 'absolute',
    top: '110%',
    padding: '0.4rem 0',
    border: `1px solid ${theme.color.divider_grey}`,
  },
}));

interface IStyledNav {
  onClick?: () => void;
}
const StyledNav = styled.button<IStyledNav>(({ theme, onClick }) => ({
  padding: '0.8rem 0',
  background: theme.color.white,
  fontWeight: theme.fontWeight.bold,
  color: onClick ? theme.color.placeholder_color : theme.color.base_black,
  [mq('desktop')]: {
    padding: '0.4rem 1.2rem',
  },
}));

const StyledLink = styled(Link)(() => ({
  display: 'block',
  padding: '1rem 1.2rem',
  [mq('desktop')]: {
    padding: '0.6rem 2.4rem',
  },
}));

interface IMypageNav {
  userData: IUserData | null | undefined;
}

function MypageNav({ userData }: IMypageNav) {
  const queryclient = useQueryClient();
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  const theme = useTheme();

  const [profileOpen, setProfileOpen] = useState(false);
  const [arrowToggle, setArrowToggle] = useState(false);

  function useOutsideClick(ref: any) {
    // NOTE: ?????? ?????? ??? ???????????? ?????????
    useEffect(() => {
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
    localStorage.removeItem('tokens');
    queryclient.setQueryData('userData', null);
    navigate('/login');
  }, [queryclient, navigate]);

  return (
    <MypageModal ref={wrapperRef}>
      <Profile onClick={handleModalToggle}>
        <CroppedFigure width="4.8rem" height="4.8rem" radius="50%">
          {userData?.file_url === '' ? (
            <CroppedImage src={theme.image.defaultProfile} alt="?????? ??????" />
          ) : (
            <CroppedImage src={userData?.file_url} alt="?????? ??????" />
          )}
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
          <StyledNav>???????????????</StyledNav>
          <div>
            <StyledLink to="/user-account">?????? ?????? ??????</StyledLink>
            <StyledLink to="/user-profile">?????????</StyledLink>
            <StyledLink to="/like-list">??? ??????</StyledLink>
            <StyledLink to="/suggestions">?????? ??? ?????????</StyledLink>
            <StyledLink to="/requests">?????? ??? ?????????</StyledLink>
          </div>
          <StyledNav onClick={logout}>????????????</StyledNav>
        </NavModal>
      )}
    </MypageModal>
  );
}

export default MypageNav;
