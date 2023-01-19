import React, { memo, useCallback } from 'react';

import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputGroup } from '@components/inputs';
import { yupResolver } from '@hookform/resolvers/yup';
import { IChangePw } from '@utils/types';
import { useNavigate } from 'react-router-dom';
import { yupChangePW } from '@utils/yupValidation';
import { confirmPwPlaceholder, userPwPlaceholder } from '@utils/placeholder';
import { PageTitle } from '@components/item';
import { Buttons } from '@components/buttons';

const Container = styled.div(() => ({
  maxWidth: '51.2rem',
  margin: '0 auto',
}));

const ChangePwForm = styled.form(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem 0',
  width: '100%',
  margin: '0 auto',
}));

function ChangePw() {
  const navigate = useNavigate();

  const formOptions = {
    resolver: yupResolver(yupChangePW),
    defaultValues: {
      user_pw: '',
      confirm_pw: '',
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePw>(formOptions);

  const onSubmit: SubmitHandler<IChangePw> = useCallback(
    (data) => {
      console.log(JSON.stringify(data, null, 4));
      navigate('/find-pw-complete');
    },
    [navigate],
  );

  return (
    <Container>
      <PageTitle pageTitle="비밀번호 변경하기" />
      <ChangePwForm onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          register={register}
          errors={errors}
          registerName="user_id"
          idName="user_id"
          labelName="아이디"
          inputType="text"
          placeHolder="yhk0305"
          disabled
          required
        />

        <InputGroup
          register={register}
          errors={errors}
          registerName="user_pw"
          idName="user_pw"
          labelName="비밀번호"
          inputType="password"
          placeHolder={userPwPlaceholder}
          required
        />

        <InputGroup
          register={register}
          errors={errors}
          registerName="confirm_pw"
          idName="confirm_pw"
          labelName="비밀번호 확인"
          inputType="password"
          placeHolder={confirmPwPlaceholder}
          required
        />

        <Buttons activeName="비밀번호 변경하기" buttonType="submit" />
      </ChangePwForm>
    </Container>
  );
}

export default memo(ChangePw);
