import React, { memo, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PageTitle } from '@components/item';
import {
  InputGroup,
  InputText,
  ProfileImageInput,
  SelectInput,
  SingleCheckInput,
  TextareaInput,
} from '@components/inputs';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupUserProfile } from '@utils/yupValidation';
import { IUserAccount, IUserProfile } from '@utils/types';
import { nicknamePlaceholder } from '@utils/placeholder';
import { AveScoreOptions, careerOptions, proTypeOptions } from '@components/inputs/selectOptions';
import { Buttons } from '@components/buttons';
import { useQueryClient } from 'react-query';

const Container = styled.div(() => ({}));

const UserProfileForm = styled.form(() => ({
  width: '100%',
  maxWidth: '51.4rem',
  margin: '0 auto 8rem',
}));

const SelectWrapper = styled.div(() => ({
  marginTop: '1.8rem',
}));

function UserProfile() {
  const queryClient = useQueryClient();
  const userData: IUserAccount | undefined = queryClient.getQueryData('userData');

  const [checkArr, setCheckArr] = useState<string[]>([]);

  const formOptions = {
    resolver: yupResolver(yupUserProfile),
    defaultValues: {
      nickname: userData?.nickname,
      pro_yn: false,
      pro_type: '',
      ave_score: 'aveScore01',
      career: 'career01',
      introduce: '',
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

        <SingleCheckInput
          register={register}
          registerName="pro_yn"
          idName="pro_yn"
          labelName="프로 골퍼입니다!"
          setCheckArr={setCheckArr}
          checkArr={checkArr}
        />

        {checkArr.includes('pro_yn') && (
          <SelectInput
            register={register}
            errors={errors}
            registerName="pro_type"
            idName="pro_type"
            labelName="프로 유형"
            optionList={proTypeOptions}
          />
        )}

        <SelectWrapper>
          <SelectInput
            register={register}
            errors={errors}
            registerName="ave_score"
            idName="ave_score"
            labelName="평균 타수"
            optionList={AveScoreOptions}
          />

          <SelectInput
            register={register}
            errors={errors}
            registerName="career"
            idName="career"
            labelName="골프 경력"
            optionList={careerOptions}
          />
        </SelectWrapper>

        <TextareaInput
          register={register}
          errors={errors}
          registerName="introduce"
          idName="introduce"
          labelName="자기소개"
          placeholder="간단한 자기소개를 입력해주세요 (최대 500글자)"
        />

        <Buttons noCancelButton activeName="프로필 수정" buttonType="submit" />
      </UserProfileForm>
    </Container>
  );
}

export default memo(UserProfile);
