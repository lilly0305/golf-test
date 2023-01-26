import React, { memo, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';

import { ErrorMessage, InputLabel } from '@assets/styles/CommonStyles';
import { PageTitle } from '@components/item';
import { ISignUp } from '@utils/types';
import { yupJoin } from '@utils/yupValidation';
import { confirmPwPlaceholder, phonePlaceholder, userPwPlaceholder } from '@utils/placeholder';
import { mq } from '@utils/mediaquery/mediaQuery';
import { AllCheckInput, InputGroup, ProfileImageInput, SingleCheckInput } from '@components/inputs';
import { Buttons } from '@components/buttons';
import { CheckBoxContainer } from '@components/inputs/SingleCheckInput';
import Modal from '@components/modal/Modal';
import { policyCheck } from './joinPolicy';
import NicknameCheck from './NicknameCheck';
import UserIdCheck from './UserIdCheck';

const Container = styled.div(() => ({
  maxWidth: '51.4rem',
  margin: '0 auto 8rem',
  width: '100%',
  padding: 0,
}));

const JoinForm = styled.form(() => ({
  width: '100%',
}));

const InputWrap = styled.div(() => ({
  marginBottom: '5rem',
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

const formOptions = {
  resolver: yupResolver(yupJoin),
  defaultValues: {
    user_name: '유화경',
    gender: '여자',
    nickname: '',
    user_id: '',
    user_pw: '',
    confirm_pw: '',
    phone: '',
    use_term_policy: false,
    personal_policy: false,
    sms_policy: false,
    marketing_policy: false,
    file_path: '',
    origin_file_name: '',
    temp_file_name: '',
  },
};

function Join() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [checkArr, setCheckArr] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ISignUp>(formOptions);

  const onSubmit: SubmitHandler<ISignUp> = useCallback((data) => {
    console.log(JSON.stringify(data, null, 4));
    setModal(true);
  }, []);

  const postJoin = useCallback(() => {
    navigate('/join-complete');
  }, [navigate]);

  const confirmPhone = useCallback(() => {
    setValue('phone', '01049555429');
  }, [setValue]);

  return (
    <Container>
      <Modal
        show={modal}
        setModal={setModal}
        modalTitle="회원가입을 진행하시겠습니까?"
        activeButtonName="회원가입"
        activeEvent={postJoin}
      >
        <div>
          <p>작성하신 정보는 로그인 후 마이페이지에서</p>
          <p>확인하실 수 있습니다.</p>
        </div>
      </Modal>
      <PageTitle pageTitle="회원가입" />

      <ProfileImageInput idName="profile" labelName="프로필 사진 (300px X 300px | 1:1 비율)" />

      <NicknameCheck setValue={setValue} />
      <UserIdCheck setValue={setValue} />

      <JoinForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
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
            required
            buttonName="휴대폰 인증"
            placeHolder={phonePlaceholder}
            buttonEvent={confirmPhone}
            disabled
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
            <p>{errors?.use_term_policy?.message}</p>
            <p>{errors?.personal_policy?.message}</p>
            <p>{errors?.sms_policy?.message}</p>
          </ErrorMessage>

          <CheckBoxContainer>
            {policyCheck?.map((check) => (
              <SingleCheckInput
                key={check.id}
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
        </InputWrap>

        <Buttons noCancelButton activeName="회원가입" buttonType="submit" />
      </JoinForm>
    </Container>
  );
}

export default memo(Join);
