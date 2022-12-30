import styled from '@emotion/styled';
import React, { memo } from 'react';
import Header from '../components/header/Header';

interface IHome {
  children: React.ReactNode;
}

const Container = styled.div(() => ({
  padding: 0,
  margin: 0,
}));

function Home({ children }: IHome) {
  return (
    <Container>
      <Header />

      {children}
    </Container>
  );
}

export default memo(Home);
