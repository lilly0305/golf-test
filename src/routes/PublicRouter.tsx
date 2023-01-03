import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Home from '@pages/Home';
import { Header } from '@components/header';
import { Login } from '@pages/account';

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
          <Route path="/" element={<Home>Home</Home>} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </PageContainer>
    </div>
  );
}

export default memo(PublicRouter);
