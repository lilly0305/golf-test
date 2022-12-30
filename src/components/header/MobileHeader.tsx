import React, { memo } from 'react';
import styled from '@emotion/styled';

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
}
const Line = styled.span<ILine>(({ theme, top = '0' }) => ({
  position: 'absolute',
  width: '100%',
  height: '2px',
  transition: 'all 0.3s',
  background: theme.color.white,
  top: top,
}));

function MobileHeader() {
  return (
    <MobileHeaderContainer>
      <Hamburger>
        <Line />
        <Line top="50%" />
        <Line top="100%" />
      </Hamburger>
    </MobileHeaderContainer>
  );
}

export default memo(MobileHeader);
