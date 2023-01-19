import React, { memo, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';

import { ErrorMessage, InputLabel } from '@assets/styles/CommonStyles';
import { PageTitle } from '@components/item';
import { ISignUp } from '@utils/types';
import { yupJoin } from '@utils/yupValidation';
import {
  confirmPwPlaceholder,
  nicknamePlaceholder,
  phonePlaceholder,
  userIdPlaceholder,
  userPwPlaceholder,
} from '@utils/placeholder';
import { mq } from '@utils/mediaquery/mediaQuery';
import { AllCheckInput, InputGroup, ProfileImageInput, SingleCheckInput } from '@components/inputs';
import { Buttons } from '@components/buttons';
import { CheckBoxContainer } from '@components/inputs/SingleCheckInput';
import Modal from '@components/modal/Modal';
import { policyCheck } from './joinPolicy';

const Container = styled.div(() => ({
  width: '100%',
  margin: 0,
  padding: 0,
}));

const JoinForm = styled.form(() => ({
  width: '100%',
  maxWidth: '51.4rem',
  margin: '0 auto 8rem',
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

function Join() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [confirmedPhone, setConfirmedPhone] = useState(false);
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

  const confirmPhone = useCallback(() => setConfirmedPhone((prev) => !prev), [setConfirmedPhone]);

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

      <JoinForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
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
        </InputWrap>

        <Buttons noCancelButton activeName="회원가입" buttonType="submit" />
      </JoinForm>
    </Container>
  );
}

export default memo(Join);
