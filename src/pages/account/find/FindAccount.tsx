import React, { memo, useState } from 'react';
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

const findAccountArr = [
  {
    id: 1,
    name: '아이디 찾기',
    content: <FindId />,
  },
  {
    id: 2,
    name: '비밀번호 찾기',
    content: <FindPw />,
  },
];

function FindAccount() {
  const [currentTab, setCurrentTab] = useState(1);

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
