import React, { memo } from 'react';

import styled from '@emotion/styled';

const Container = styled.div(() => ({
  padding: 0,
  margin: 0,
  top: '5rem',
}));

interface IHome {
  children: React.ReactNode;
}
function Home({ children }: IHome) {
  return <Container>{children}</Container>;
}

export default memo(Home);
