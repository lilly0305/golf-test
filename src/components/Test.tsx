import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

function Test() {
  return <Container>buttonbuttonbuttonbutton</Container>;
}

export default Test;
