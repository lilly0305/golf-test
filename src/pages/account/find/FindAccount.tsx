import React, { memo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

import { PageTitle } from '@components/item';
import { TabButtons } from '@components/buttons';
import FindId from './FindId';
import FindPw from './FindPw';

const Container = styled.div(() => ({
  width: '100%',
  margin: 0,
  padding: 0,
}));

const WrapAll = styled.div(() => ({
  maxWidth: '51.2rem',
  margin: '0 auto',
}));

const ContentWrapper = styled.div(() => ({}));

function FindAccount() {
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState(location.state !== null ? location.state.tab : 1);

  const findAccountArr = [
    {
      id: 1,
      name: '아이디 찾기',
      content: <FindId />,
    },
    {
      id: 2,
      name: '비밀번호 찾기',
      content: <FindPw idValue={location.state !== null ? location.state.foundId : ''} />,
    },
  ];
  return (
    <Container>
      <PageTitle pageTitle="아이디/비밀번호 찾기" />

      <WrapAll>
        <TabButtons tabArr={findAccountArr} currentTab={currentTab} setCurrentTab={setCurrentTab} />

        <ContentWrapper>{findAccountArr?.[currentTab - 1].content}</ContentWrapper>
      </WrapAll>
    </Container>
  );
}

export default memo(FindAccount);
