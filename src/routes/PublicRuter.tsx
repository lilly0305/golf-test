import React, { memo } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Header } from '@components/index';
import Home from '@pages/Home';

function PublicRuter() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home>ddd</Home>} />
        <Route path="/dashboard" element={<Home>dashboard</Home>} />
      </Routes>
    </div>
  );
}

export default memo(PublicRuter);
