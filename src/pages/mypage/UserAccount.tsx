import React, { memo, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PageTitle } from '@components/item';
import { AllCheckInput, InputGroup } from '@components/inputs';
import { ErrorMessage, InputLabel } from '@assets/styles/CommonStyles';
import { yupUserAccount } from '@utils/yupValidation';
import {
  confirmPwPlaceholder,
  phonePlaceholder,
  userIdPlaceholder,
  userPwPlaceholder,
} from '@utils/placeholder';
import { IUserAccount } from '@utils/types';
import { mq } from '@utils/mediaquery/mediaQuery';
import { policyCheck } from '@pages/account/join/joinPolicy';
import SingleCheckInput, { CheckBoxContainer } from '@components/inputs/SingleCheckInput';
import { Buttons } from '@components/buttons';
import { useQueryClient } from 'react-query';

const Container = styled.div(() => ({}));

const UserInfoForm = styled.form(() => ({
  width: '100%',
  maxWidth: '51.4rem',
  margin: '0 auto 8rem',
}));

const PolicyWrap = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [mq('desktop')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

function UserInfo() {
  const queryClient = useQueryClient();
  const userData: IUserAccount | undefined = queryClient.getQueryData('userData');

  const [confirmedPhone, setConfirmedPhone] = useState(false);
  const [checkArr, setCheckArr] = useState<string[]>([]);

  const formOptions = {
    resolver: yupResolver(yupUserAccount),
    defaultValues: {
      user_id: userData?.user_id,
      user_pw: '',
      confirm_pw: '',
      phone: userData?.phone,
      useterm: userData?.useterm,
      personal_info: userData?.personal_info,
      sms: userData?.sms,
      marketing: userData?.marketing,
    },
  };

  useEffect(() => {
    if (userData !== undefined) {
      if (userData.useterm) {
        setCheckArr((prev) => [...prev, 'useterm']);
      }

      if (userData.personal_info) {
        setCheckArr((prev) => [...prev, 'personal_info']);
      }

      if (userData.sms) {
        setCheckArr((prev) => [...prev, 'sms']);
      }

      if (userData.marketing) {
        setCheckArr((prev) => [...prev, 'marketing']);
      }
    }

    return () => {
      setCheckArr([]);
    };
  }, [userData]);

  const confirmPhone = useCallback(() => setConfirmedPhone((prev) => !prev), [setConfirmedPhone]);

  const onSubmit: SubmitHandler<IUserAccount> = useCallback((data) => {
    console.log(JSON.stringify(data, null, 4));
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUserAccount>(formOptions);

  return (
    <Container>
      <PageTitle pageTitle="회원 정보 수정" />

      <UserInfoForm onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          register={register}
          errors={errors}
          registerName="user_id"
          idName="user_id"
          labelName="아이디"
          inputType="text"
          placeHolder={userIdPlaceholder}
          required
          buttonName="중복확인"
          active={false}
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

        <InputGroup
          register={register}
          errors={errors}
          registerName="phone"
          idName="phone"
          labelName="휴대폰 번호"
          inputType="text"
          placeHolder={confirmedPhone ? '01049555429' : phonePlaceholder}
          required
          buttonName="휴대폰 인증"
          disabled
          buttonEvent={confirmPhone}
        />

        <PolicyWrap>
          <InputLabel>약관동의</InputLabel>
          <AllCheckInput
            checkArr={checkArr}
            setCheckArr={setCheckArr}
            checkData={policyCheck}
            setValue={setValue}
          />
        </PolicyWrap>

        <ErrorMessage>
          <p>{errors?.useterm?.message}</p>
          <p>{errors?.personal_info?.message}</p>
          <p>{errors?.sms?.message}</p>
        </ErrorMessage>

        <CheckBoxContainer>
          {policyCheck?.map((check) => (
            <SingleCheckInput
              key={check.id}
              index={check.id}
              register={register}
              registerName={check.idName}
              idName={check.idName}
              labelName={check.name}
              required={check.required}
              setCheckArr={setCheckArr}
              checkArr={checkArr}
            />
          ))}
        </CheckBoxContainer>

        <Buttons noCancelButton activeName="회원 정보 수정" buttonType="submit" />
      </UserInfoForm>
    </Container>
  );
}

export default memo(UserInfo);
