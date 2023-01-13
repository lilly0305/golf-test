import React, { useCallback, useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';

import styled from '@emotion/styled';
import { PageTitle } from '@components/item';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUp } from '@utils/types';
import { InputGroup } from '@components/inputs';
import { yupJoin } from '@utils/yupValidation';
import { Buttons } from '@components/buttons';
import SingleCheckInput from '@components/inputs/SingleCheckInput';
import { IPolicyCheck, policyCheck } from './joinPolicy';

const Container = styled.div(() => ({
  width: '100%',
  margin: 0,
  padding: 0,
}));

const JoinForm = styled.form(() => ({
  width: '100%',
  maxWidth: '51.4rem',
  margin: '0 auto',
}));

const formOptions = {
  resolver: yupResolver(yupJoin),
  defaultValues: {
    nickname: '',
    id: '',
    pw: '',
    confirmPw: '',
    phone: '',
    useterm: false,
    personalInfo: false,
    SMS: false,
    marketing: false,
  },
};

function Join() {
  const [confirmedPhone, setConfirmedPhone] = useState(false);
  const [checkArr, setCheckArr] = useState<IPolicyCheck[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUp>(formOptions);

  const onSubmit: SubmitHandler<ISignUp> = useCallback((data) => {
    console.log(data);
  }, []);

  const confirmPhone = useCallback(() => setConfirmedPhone((prev) => !prev), [setConfirmedPhone]);

  useEffect(() => {
    setCheckArr(policyCheck);

    return () => {
      setCheckArr([]);
    };
  }, []);

  console.log(watch('SMS'));

  return (
    <Container>
      <PageTitle pageTitle="회원가입" />

      <JoinForm onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          register={register}
          errors={errors}
          registerName="nickname"
          idName="nickname"
          labelName="닉네임"
          inputType="text"
          placeHolder="닉네임을 입력하세요"
          required
          buttonName="중복확인"
          active
        />

        <InputGroup
          register={register}
          errors={errors}
          registerName="id"
          idName="id"
          labelName="아이디"
          inputType="text"
          placeHolder="아이디를 입력하세요"
          required
          buttonName="중복확인"
          active={false}
        />

        <InputGroup
          register={register}
          errors={errors}
          registerName="pw"
          idName="pw"
          labelName="비밀번호"
          inputType="password"
          placeHolder="비밀번호를 입력하세요"
          required
        />

        <InputGroup
          register={register}
          errors={errors}
          registerName="confirmPw"
          idName="confirmPw"
          labelName="비밀번호 확인"
          inputType="password"
          placeHolder="비밀번호 확인을 입력하세요"
          required
        />

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

        {checkArr?.map((check) => (
          <SingleCheckInput
            key={check.id}
            register={register}
            registerName={check.idName}
            errors={errors}
            idName={check.idName}
            labelName={check.name}
            checked={check.checked}
            required={check.required}
            checkArr={checkArr}
            setCheckArr={setCheckArr}
          />
        ))}

        <Buttons noCancelButton activeName="회원가입" buttonType="submit" />
      </JoinForm>
    </Container>
  );
}

export default Join;
