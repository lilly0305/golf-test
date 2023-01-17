import React, { memo } from 'react';
import { PageTitle } from '@components/item';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Message = styled.p(({theme}) => ({
  textAlign: 'center',
  fontWeight: theme.fontWeight.bold,
  fontSize: '2rem'
}));

const StyledImage = styled.img(() => ({
  display: 'block',
  maxWidth: '56rem',
  width: '100%',
  margin: '0 auto'
}));

const Buttons = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0 1rem',
  marginTop: '3rem'
}));

interface ILinkButton {
  color: string;
}
const LinkButton = styled.a<ILinkButton>(({theme, color}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 6rem',
  borderRadius: '60rem',
  color: theme.color.white,
  background: color,
  fontWeight: theme.fontWeight.bold
}));

function JoinComplete() {
  const theme = useTheme();

  return (
    <div>
      <PageTitle pageTitle="회원가입 완료" />
      <Message>잇다에 회원가입이 완료되었습니다!</Message>
      <Message>서비스를 즐겨보세요!</Message>
      <StyledImage src={require('@assets/images/join_complete.png')} alt="골프치는 사람 세명" />
      <Buttons>
        <LinkButton href="/service" color={theme.color.sub_point_color}>서비스 이용안내</LinkButton>
        <LinkButton href="/" color={theme.color.point_color}>메인으로</LinkButton>
      </Buttons>
    </div>
  );
}

export default memo(JoinComplete);
