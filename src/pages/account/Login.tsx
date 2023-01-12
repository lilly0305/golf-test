import React, { memo, useCallback } from 'react';
import styled from '@emotion/styled';

import { yupResolver } from '@hookform/resolvers/yup';

import InputGroup from '@components/inputs/InputGroup';
import Buttons from '@components/buttons/Buttons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ILoginForm } from '@utils/types';
import { yupLogin } from '@utils/yupValidation';
import PageTitle from '@components/item/PageTitle';

const Container = styled.div(() => ({}));

const LoginForm = styled.form(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem 0',
  width: '100%',
  maxWidth: '42rem',
  margin: '0 auto',
}));

const LoginInfo = styled.p(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  color: theme.color.placeholder_color,
  borderBottom: `1px solid ${theme.color.divider_grey}`,
  marginTop: '2rem',
  padding: '1rem 0',
  fontSize: '1.2rem',
}));

const OtherPages = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

const Link = styled.a(() => ({
  padding: '0.4rem 0',
}));

const formOptions = {
  resolver: yupResolver(yupLogin),
  defaultValues: {
    id: '',
    pw: '',
  },
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>(formOptions);

  const onSubmit: SubmitHandler<ILoginForm> = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <PageTitle pageTitle="잇다 로그인" />

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          registerName="id"
          register={register}
          idName="id"
          labelName="아이디"
          inputType="text"
          placeHolder="아이디를 입력하세요"
          errors={errors}
        />

        <InputGroup
          registerName="pw"
          register={register}
          idName="pw"
          labelName="비밀번호"
          inputType="password"
          placeHolder="비밀번호를 입력하세요"
          errors={errors}
        />

        <Buttons noCancelButton activeName="로그인" buttonType="submit" />

        <LoginInfo>로그인에 문제가 있으신가요?</LoginInfo>

        <OtherPages>
          <Link href="/join">회원가입</Link>

          <Link href="/find-account">아이디/비밀번호 찾기</Link>

          <Link href="/customer">고객센터</Link>
        </OtherPages>
      </LoginForm>
    </Container>
  );
}

export default memo(Login);
