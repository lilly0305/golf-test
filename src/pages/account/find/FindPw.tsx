import React, { memo, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';
import { InputGroup } from '@components/inputs';
import { IFindPw } from '@utils/types';
import { userIdPlaceholder, phonePlaceholder } from '@utils/placeholder';
import { yupFindPw } from '@utils/yupValidation';
import { Buttons } from '@components/buttons';
import { useNavigate } from 'react-router-dom';

const FindPwForm = styled.form(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem 0',
  width: '100%',
  margin: '0 auto',
}));

interface IFindPwProps {
  idValue: string;
}
function FindPw({ idValue }: IFindPwProps) {
  const navigate = useNavigate();

  const [confirmedPhone, setConfirmedPhone] = useState(false);

  const formOptions = {
    resolver: yupResolver(yupFindPw),
    defaultValues: {
      user_id: idValue,
      phone: '',
    },
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFindPw>(formOptions);

  const confirmPhone = useCallback(() => {
    setConfirmedPhone((prev) => !prev);
    setValue('phone', '01049555429');
  }, [setConfirmedPhone, setValue]);

  const onSubmit: SubmitHandler<IFindPw> = useCallback(
    (data) => {
      console.log(JSON.stringify(data, null, 4));
      navigate('/change-password');
    },
    [navigate],
  );

  return (
    <FindPwForm onSubmit={handleSubmit(onSubmit)}>
      <InputGroup
        register={register}
        errors={errors}
        registerName="user_id"
        idName="user_id"
        labelName="아이디"
        inputType="text"
        placeHolder={userIdPlaceholder}
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

      <Buttons activeName="비밀번호 찾기" buttonType="submit" />
    </FindPwForm>
  );
}

export default memo(FindPw);
