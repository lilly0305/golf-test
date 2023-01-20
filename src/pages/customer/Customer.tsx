import React, { memo, useState } from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '@components/item';
import { TabButtons } from '@components/buttons';
import Faq from './Faq';
import ServiceGuide from './ServiceGuide';
import { Qna } from './qna';

const Container = styled.div(() => ({
  width: '100%',
  margin: 0,
  padding: 0,
}));

const WrapAll = styled.div(() => ({
  maxWidth: '80rem',
  margin: '0 auto',
}));

const ContentWrapper = styled.div(() => ({}));

function Customer() {
  const [currentTab, setCurrentTab] = useState(1);

  const customerArr = [
    {
      id: 1,
      name: '자주묻는 질문',
      content: <Faq />,
    },
    {
      id: 2,
      name: '1:1 문의',
      content: <Qna />,
    },
    {
      id: 3,
      name: '서비스 이용 안내',
      content: <ServiceGuide />,
    },
  ];

  return (
    <Container>
      <PageTitle pageTitle="고객센터" />
      <WrapAll>
        <TabButtons tabArr={customerArr} currentTab={currentTab} setCurrentTab={setCurrentTab} />

        <ContentWrapper>{customerArr?.[currentTab - 1].content}</ContentWrapper>
      </WrapAll>
    </Container>
  );
}

export default memo(Customer);
