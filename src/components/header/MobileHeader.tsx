import React, { memo, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { CroppedFigure, CroppedImage, RemixIcon } from '@assets/styles/CommonStyles';

const MobileHeaderContainer = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1.6rem',
  height: '5rem',
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

function MobileHeader() {
  const theme = useTheme();

  const [active, setActive] = useState(false);
  const onClick = useCallback(() => setActive((prev) => !prev), []);

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

      <CroppedFigure width="74px" height="42px">
        <CroppedImage src={theme.image.logoWhite} alt="흰색 로고" />
      </CroppedFigure>

      <RemixIcon className="ri-draft-line" />
    </MobileHeaderContainer>
  );
}

export default memo(MobileHeader);
