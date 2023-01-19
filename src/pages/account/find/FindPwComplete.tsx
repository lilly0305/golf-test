import React from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '@components/item';
import { Link } from 'react-router-dom';

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

const ResultId = styled.div(() => ({
  margin: '3rem auto',
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
const StyledLink = styled(Link)<IStyledLink>(({ theme, type }) => ({
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

function FindPwComplete() {
  return (
    <Container>
      <PageTitle pageTitle="비밀번호 변경 완료" />

      <Wrapper>
        <ResultText>비밀번호 변경이 완료되었습니다.</ResultText>
        <ResultId>변경하신 비밀번호로 다시 로그인해주세요.</ResultId>
      </Wrapper>

      <Buttons>
        <StyledLink to="/">메인으로</StyledLink>
        <StyledLink to="/login" type="login">
          로그인
        </StyledLink>
      </Buttons>
    </Container>
  );
}

export default FindPwComplete;
