import React, { memo, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PageTitle } from '@components/item';
import { AllCheckInput, InputGroup, InputText } from '@components/inputs';
import { ErrorMessage, InputLabel } from '@assets/styles/CommonStyles';
import { yupUserAccount } from '@utils/yupValidation';
import { phonePlaceholder, userIdPlaceholder } from '@utils/placeholder';
import { IUserAccount } from '@utils/types';
import { mq } from '@utils/mediaquery/mediaQuery';
import { policyCheck } from '@pages/account/join/joinPolicy';
import { Message } from '@components/message';
import SingleCheckInput, { CheckBoxContainer } from '@components/inputs/SingleCheckInput';
import { Buttons } from '@components/buttons';
import { useQueryClient } from 'react-query';
import ModalPortal from '@components/modal/ModalPortal';
import { Modal } from '@components/modal';
import { ChangePasswordModal } from '@components/modal/modal-form';

const Container = styled.div(() => ({}));

const UserAccountForm = styled.form(() => ({
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

const ChangePwButton = styled.button(({ theme }) => ({
  padding: '0rem 1.2rem',
  background: theme.color.placeholder_color,
  color: theme.color.white,
  borderRadius: '3rem',
  fontSize: '1.4rem',
}));

function UserAccount() {
  const queryClient = useQueryClient();
  const userData: IUserAccount | undefined = queryClient.getQueryData('userData');

  const [confirmedPhone, setConfirmedPhone] = useState(false);
  const [checkArr, setCheckArr] = useState<string[]>([]);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState(false);

  const formOptions = {
    resolver: yupResolver(yupUserAccount),
    defaultValues: {
      user_id: userData?.user_id,
      phone: userData?.phone,
      use_term_policy: userData?.use_term_policy,
      personal_policy: userData?.personal_policy,
      sms_policy: userData?.sms_policy,
      marketing_policy: userData?.marketing_policy,
    },
  };

  useEffect(() => {
    if (userData !== undefined) {
      if (userData.use_term_policy) {
        setCheckArr((prev) => [...prev, 'use_term_policy']);
      }

      if (userData.personal_policy) {
        setCheckArr((prev) => [...prev, 'personal_policy']);
      }

      if (userData.sms_policy) {
        setCheckArr((prev) => [...prev, 'sms_policy']);
      }

      if (userData.marketing_policy) {
        setCheckArr((prev) => [...prev, 'marketing_policy']);
      }
    }

    return () => {
      setCheckArr([]);
    };
  }, [userData]);

  const confirmPhone = useCallback(() => setConfirmedPhone((prev) => !prev), [setConfirmedPhone]);

  const onSubmit: SubmitHandler<IUserAccount> = useCallback((data) => {
    console.log(JSON.stringify(data, null, 4));
    setMessage(true);
  }, []);

  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(false), 2000);
    }
  }, [message]);

  const changePwModal = useCallback(() => {
    setModal(true);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUserAccount>(formOptions);

  return (
    <Container>
      <ModalPortal>
        <Modal show={modal} setModal={setModal} modalTitle="비밀번호 변경" noButton>
          <ChangePasswordModal setModal={setModal} />
        </Modal>
      </ModalPortal>

      <Message show={message} message="회원 정보가 수정되었습니다👍" />

      <PageTitle pageTitle="회원 정보 수정" />

      <UserAccountForm onSubmit={handleSubmit(onSubmit)}>
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

        <InputText
          labelName="비밀번호 변경"
          contents={
            <ChangePwButton onClick={changePwModal} type="button">
              변경하기
            </ChangePwButton>
          }
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

        <Buttons noCancelButton activeName="회원 정보 수정" buttonType="submit" />
      </UserAccountForm>
    </Container>
  );
}

export default memo(UserAccount);
