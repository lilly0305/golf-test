import React, { memo, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

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
const Line = styled.span<ILine>(({ theme, top = '0', opacity = 1, rotate, active = false }) => ({
  position: 'absolute',
  width: '100%',
  height: '2px',
  transition: 'all 0.3s',
  background: theme.color.white,
  top: active ? '50%' : top,
  opacity: opacity,
  transform: active ? rotate : '0',
}));

const StyledImage = styled.figure(() => ({
  position: 'relative',
  overflow: 'hidden',
}));

function MobileHeader() {
  const theme = useTheme();
  const [active, setActive] = useState(false);

  return (
    <MobileHeaderContainer>
      <Hamburger onClick={() => setActive((prev) => !prev)}>
        <Line active={active} opacity={active ? 0 : 1} />
        <Line active={active} top="50%" opacity={1} rotate="rotate(45deg)" />
        <Line active={active} top="100%" opacity={1} rotate="rotate(-45deg)" />
      </Hamburger>

      <StyledImage>
        <img src={theme.image.logoWhite} alt="수아는 귀여워" />
      </StyledImage>
    </MobileHeaderContainer>
  );
}

export default memo(MobileHeader);
