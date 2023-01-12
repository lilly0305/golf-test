import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Home from '@pages/Home';
import { Header } from '@components/header';
import { Join, Login } from '@pages/account';
import { mq } from '@utils/mediaquery/mediaQuery';

const PageContainer = styled.div(() => ({
  width: '100%',
  padding: '2rem 1.6rem 0',
  top: '5rem',
  [mq('desktop')]: {
    paddingTop: '3rem',
  },
}));

function PublicRouter() {
  return (
    <div>
      <Header />

      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </PageContainer>
    </div>
  );
}

export default memo(PublicRouter);
