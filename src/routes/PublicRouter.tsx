import React, { memo } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Header } from '@components/index';

import Home from '@pages/Home';
import Login from '@pages/account/Login';
import styled from '@emotion/styled';

const PageContainer = styled.div(() => ({
  width: '100%',
  padding: '0 1.6rem',
}));

function PublicRouter() {
  return (
    <div>
      <Header />

      <PageContainer>
        <Routes>
          <Route path="/" element={<Home>ddd</Home>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </PageContainer>
    </div>
  );
}

export default memo(PublicRouter);
