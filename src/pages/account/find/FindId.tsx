import React, { memo, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { IFindId } from '@utils/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupFindId } from '@utils/yupValidation';
import { InputGroup } from '@components/inputs';
import { Buttons } from '@components/buttons';

const FindInForm = styled.form(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem 0',
  width: '100%',
  maxWidth: '42rem',
  margin: '0 auto',
}));
function FindId() {
  const [confirmedPhone, setConfirmedPhone] = useState(false);

  const formOptions = {
    resolver: yupResolver(yupFindId),
    defaultValues: {
      phone: '',
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFindId>(formOptions);

  const confirmPhone = useCallback(() => setConfirmedPhone((prev) => !prev), [setConfirmedPhone]);

  const onSubmit: SubmitHandler<IFindId> = useCallback((data) => {
    console.log(JSON.stringify(data, null, 4));
  }, []);

  return (
    <FindInForm onSubmit={handleSubmit(onSubmit)}>
      <InputGroup
        register={register}
        errors={errors}
        registerName="phone"
        idName="phone"
        labelName="휴대폰 번호"
        inputType="text"
        placeHolder={confirmedPhone ? '010-4955-5429' : '휴대폰 인증을 진행해주세요'}
        required
        buttonName="휴대폰 인증"
        disabled
        buttonEvent={confirmPhone}
      />

      <InputGroup
        register={register}
        errors={errors}
        registerName="code"
        idName="code"
        labelName="인증번호"
        inputType="text"
        placeHolder="인증번호를 입력해주세요"
        required
        buttonName="번호 확인"
        disabled
        buttonEvent={confirmPhone}
      />

      <Buttons activeName="아이디 찾기" buttonType="submit" />
    </FindInForm>
  );
}

export default memo(FindId);
