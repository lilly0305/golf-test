import React, { memo } from 'react';

import styled from '@emotion/styled';
import { GolfSearch } from '@components/search';

const Container = styled.div(() => ({
  width: '100%',
  margin: 0,
  padding: 0,
}));

function Home() {
  return (
    <Container>
      <GolfSearch />
    </Container>
  );
}

export default memo(Home);
