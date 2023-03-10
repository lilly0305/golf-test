import React, { memo, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputGroup from '@components/inputs/InputGroup';
import Buttons from '@components/buttons/Buttons';
import { ILoginForm } from '@utils/types';
import { yupLogin } from '@utils/yupValidation';
import PageTitle from '@components/item/PageTitle';
import { ErrorMessage } from '@components/message';
import { userIdPlaceholder, validPwPlaceholder } from '@utils/placeholder';
import { useQueryClient } from 'react-query';

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

const StyledLink = styled(Link)(() => ({
  padding: '0.4rem 0',
}));

const formOptions = {
  resolver: yupResolver(yupLogin),
  defaultValues: {
    user_id: '',
    user_pw: '',
  },
};

function Login() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>(formOptions);

  const onSubmit: SubmitHandler<ILoginForm> = useCallback(
    async (loginData) => {
      try {
        const { data, status } = await axios.post('/api/v1/user/sign-in', loginData);
        if (status === 200) {
          localStorage.setItem('tokens', JSON.stringify(data.data));
          queryClient.invalidateQueries('userData');
          navigate('/');
        }
      } catch (error: any) {
        if (error !== undefined || null) {
          setIsError(true);

          if (error.response.status === 400) {
            setErrorMessage('????????? ?????? ??????????????? ??????????????????');
          }
        }
      }
    },
    [navigate, queryClient],
  );

  return (
    <Container>
      <PageTitle pageTitle="?????? ?????????" />

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        {isError && <ErrorMessage message={errorMessage} />}
        <InputGroup
          registerName="user_id"
          register={register}
          idName="user_id"
          labelName="?????????"
          inputType="text"
          placeHolder={userIdPlaceholder}
          errors={errors}
        />

        <InputGroup
          registerName="user_pw"
          register={register}
          idName="user_pw"
          labelName="????????????"
          inputType="password"
          placeHolder={validPwPlaceholder}
          errors={errors}
        />

        <Buttons noCancelButton activeName="?????????" buttonType="submit" />

        <LoginInfo>???????????? ????????? ????????????????</LoginInfo>

        <OtherPages>
          <StyledLink to="/join">????????????</StyledLink>

          <StyledLink to="/find-account">?????????/???????????? ??????</StyledLink>

          <StyledLink to="/customer">????????????</StyledLink>
        </OtherPages>
      </LoginForm>
    </Container>
  );
}

export default memo(Login);
