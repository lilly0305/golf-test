import React, { memo } from 'react';

import styled from '@emotion/styled';
import { GolfSearch } from '@components/search';

const Container = styled.div(() => ({
  padding: 0,
  margin: 0,
  top: '5rem',
}));

function Home() {
  return (
    <Container>
      <GolfSearch />
    </Container>
  );
}

export default memo(Home);
