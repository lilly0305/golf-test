import React from 'react';
import styled from '@emotion/styled';
// import { useTheme } from '@emotion/react';

const Container = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

function Button() {
  // const theme = useTheme();
  return (
    <Container>
      <p>버튼</p>
    </Container>
  );
}

export default Button;