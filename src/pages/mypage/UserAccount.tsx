import React, { memo, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PageTitle } from '@components/item';
import { AllCheckInput, InputGroup, InputText } from '@components/inputs';
import { ErrorMessage, InputLabel } from '@assets/styles/CommonStyles';
import { yupUserAccount } from '@utils/yupValidation';
import { phonePlaceholder, userIdPlaceholder } from '@utils/placeholder';
import { IUser, IUserAccount } from '@utils/types';
import { mq } from '@utils/mediaquery/mediaQuery';
import { policyCheck } from '@pages/account/join/joinPolicy';
import { Message } from '@components/message';
import SingleCheckInput, { CheckBoxContainer } from '@components/inputs/SingleCheckInput';
import { Buttons } from '@components/buttons';
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

interface IUserProfileProps {
  userData: IUser | null | undefined;
}
function UserAccount({ userData }: IUserProfileProps) {
  const [checkArr, setCheckArr] = useState<string[]>([]);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState({
    edit: false,
    changePw: false,
  });

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

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUserAccount>(formOptions);

  useEffect(() => {
    if (userData) {
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

  const confirmPhone = useCallback(() => {
    console.log('confirmPhone');
  }, []);

  const onSubmit: SubmitHandler<IUserAccount> = useCallback(
    (data) => {
      console.log(JSON.stringify(data, null, 4));
      setMessage({ ...message, edit: true });
    },
    [message],
  );

  useEffect(() => {
    if (message.edit) {
      setTimeout(() => setMessage({ ...message, edit: false }), 2000);
    } else if (message.changePw) {
      setTimeout(() => setMessage({ ...message, changePw: false }), 2000);
    }
  }, [message]);

  const changePwModal = useCallback(() => {
    setModal(true);
  }, []);

  return (
    <Container>
      <ModalPortal>
        <Modal show={modal} setModal={setModal} modalTitle="비밀번호 변경" noButton>
          <ChangePasswordModal setModal={setModal} message={message} setMessage={setMessage} />
        </Modal>
      </ModalPortal>

      <Message show={message.edit} message="회원 정보가 수정되었습니다👍" />
      <Message show={message.changePw} message="비밀번호가 정상적으로 수정되었습니다👍" />

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
          placeHolder={phonePlaceholder}
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
