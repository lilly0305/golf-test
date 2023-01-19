import { PageTitle } from '@components/item';
import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div(() => ({
  maxWidth: '51.2rem',
  margin: '0 auto',
}));

const Wrapper = styled.div(() => ({
  marginBottom: '6rem',
}));

const ResultText = styled.h2(() => ({
  textAlign: 'center',
  fontSize: '2rem',
}));

const ResultId = styled.div(({ theme }) => ({
  width: '36rem',
  margin: '3rem auto',
  padding: '1rem 0',
  border: `1px solid ${theme.color.divider_grey}`,
  fontWeight: theme.fontWeight.bold,
  fontSize: '1.6rem',
  textAlign: 'center',
}));
const Buttons = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0 1.2rem',
  marginTop: '2rem',
}));

interface IStyledLink {
  type?: string;
}
const StyledLink = styled.a<IStyledLink>(({ theme, type }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  height: '3.8rem',
  background: type === 'login' ? theme.color.point_color : theme.color.sub_point_color,
  borderRadius: '4rem',
  fontWeight: theme.fontWeight.bold,
  color: theme.color.white,
}));

function FindIdComplete() {
  return (
    <Container>
      <PageTitle pageTitle="아이디 찾기 결과" />

      <Wrapper>
        <ResultText>하루세번펭수님의 아이디는 아래와 같습니다.</ResultText>
        <ResultId>yhk0305</ResultId>
      </Wrapper>

      <Buttons>
        <StyledLink href="/find-account">비밀번호 찾기</StyledLink>
        <StyledLink href="/login" type="login">
          로그인
        </StyledLink>
      </Buttons>
    </Container>
  );
}

export default FindIdComplete;
