import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { CroppedFigure, CroppedImage, RemixIcon } from '@assets/styles/CommonStyles';

const MobileHeaderContainer = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1.6rem',
  width: '100%',
  height: '5rem',
  background: theme.color.point_color,
}));

const Hamburger = styled.div(() => ({
  position: 'relative',
  width: '2rem',
  height: '1.5rem',
  cursor: 'pointer',
  transition: 'all 0.3s',
}));

interface ILine {
  top?: string;
  opacity?: number;
  rotate?: string;
  active: boolean;
}
const Line = styled.span<ILine>(({ theme, top = '0', opacity = 1, rotate }) => ({
  position: 'absolute',
  width: '100%',
  height: '2px',
  transition: 'all 0.3s',
  background: theme.color.white,
  top: top,
  opacity: opacity,
  transform: rotate,
}));

interface IMobileHeader {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileHeader({ active, setActive }: IMobileHeader) {
  const theme = useTheme();

  const onClick = useCallback(() => setActive((prev) => !prev), [setActive]);

  return (
    <MobileHeaderContainer>
      <Hamburger onClick={onClick}>
        <Line active={active} opacity={active ? 0 : 1} />
        <Line active={active} top="50%" opacity={1} rotate={active ? 'rotate(45deg)' : '0'} />
        <Line
          active={active}
          top={active ? '50%' : '97%'}
          opacity={1}
          rotate={active ? 'rotate(-45deg)' : '0'}
        />
      </Hamburger>

      <Link to="/">
        <CroppedFigure width="7.4rem" height="4.2rem">
          <CroppedImage src={theme.image.logoWhite} alt="흰색 로고" />
        </CroppedFigure>
      </Link>

      <RemixIcon className="ri-draft-line" />
    </MobileHeaderContainer>
  );
}

export default memo(MobileHeader);
