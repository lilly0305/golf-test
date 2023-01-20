import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Home from '@pages/Home';
import { Login } from '@pages/account';
import { Customer } from '@pages/customer';
import { UserAccount, UserProfile } from '@pages/mypage';
import { Header } from '@components/header';
import { mq } from '@utils/mediaquery/mediaQuery';
import { Join } from '@pages/account/join';
import { JoinComplete } from '@pages/complete';
import { ChangePw, FindAccount, FindIdComplete, FindPwComplete } from '@pages/account/find';
import PrivateRouter from './PrivateRouter';

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

          {/* NOTE: 계정 관련 페이지 : 로그인, 회원가입, 아이디/비번 찾기 */}
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/join-complete" element={<JoinComplete />} />
          <Route path="/find-account" element={<FindAccount />} />
          <Route path="/find-id-complete" element={<FindIdComplete />} />
          <Route path="/change-password" element={<ChangePw />} />
          <Route path="/find-pw-complete" element={<FindPwComplete />} />

          <Route path="/customer" element={<Customer />} />

          <Route
            path="/user-account"
            element={
              <PrivateRouter>
                <UserAccount />
              </PrivateRouter>
            }
          />

          <Route
            path="/user-profile"
            element={
              <PrivateRouter>
                <UserProfile />
              </PrivateRouter>
            }
          />
        </Routes>
      </PageContainer>
    </div>
  );
}

export default memo(PublicRouter);
