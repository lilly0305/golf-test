import React, { memo, useCallback } from 'react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PageTitle } from '@components/item';
import { InputGroup, InputText, ProfileImageInput, SelectInput } from '@components/inputs';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupUserProfile } from '@utils/yupValidation';
import { IUserProfile } from '@utils/types';
import { nicknamePlaceholder } from '@utils/placeholder';

const Container = styled.div(() => ({}));

const UserProfileForm = styled.form(() => ({
  width: '100%',
  maxWidth: '51.4rem',
  margin: '0 auto 8rem',
}));

function UserProfile() {
  const formOptions = {
    resolver: yupResolver(yupUserProfile),
    defaultValues: {
      nickname: '',
      user_id: '',
      user_pw: '',
      confirm_pw: '',
      phone: '',
      useterm: false,
      personal_info: false,
      sms: false,
      marketing: false,
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserProfile>(formOptions);

  const onSubmit: SubmitHandler<IUserProfile> = useCallback((data) => {
    console.log(JSON.stringify(data, null, 4));
  }, []);

  return (
    <Container>
      <PageTitle pageTitle="프로필 설정" />

      <UserProfileForm onSubmit={handleSubmit(onSubmit)}>
        <ProfileImageInput idName="profile" labelName="프로필 사진 (300px X 300px | 1:1 비율)" />

        <InputGroup
          register={register}
          errors={errors}
          registerName="nickname"
          idName="nickname"
          labelName="닉네임"
          inputType="text"
          placeHolder={nicknamePlaceholder}
          required
          buttonName="중복확인"
          active
        />

        <InputText labelName="이름" contents="유이름" />

        <InputText labelName="성별/나이" contents="여자 / 27세" />

        <SelectInput
          register={register}
          errors={errors}
          registerName="pro_type"
          idName="pro_type"
          labelName="프로 유형"
        />
      </UserProfileForm>
    </Container>
  );
}

export default memo(UserProfile);
