import React, { memo, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { IFindId } from '@utils/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupFindId } from '@utils/yupValidation';
import { InputGroup } from '@components/inputs';
import { codePlaceholder, phonePlaceholder } from '@utils/placeholder';
import { Buttons } from '@components/buttons';
import { useNavigate } from 'react-router-dom';

const FindIdForm = styled.form(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem 0',
  width: '100%',
  margin: '0 auto',
}));
function FindId() {
  const [codeActive, setCodeActive] = useState(false);
  const navigate = useNavigate();

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

  const confirmPhone = useCallback(() => {
    setCodeActive(true);
  }, []);

  const confirmCode = useCallback(() => {}, []);

  const onSubmit: SubmitHandler<IFindId> = useCallback(
    (data) => {
      console.log(JSON.stringify(data, null, 4));
      navigate('/find-id-complete');
    },
    [navigate],
  );

  return (
    <FindIdForm onSubmit={handleSubmit(onSubmit)}>
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
        buttonEvent={confirmPhone}
      />

      <InputGroup
        register={register}
        errors={errors}
        registerName="code"
        idName="code"
        labelName="인증번호"
        inputType="text"
        placeHolder={codePlaceholder}
        required
        buttonName="번호 확인"
        disabled={!codeActive}
        buttonEvent={confirmCode}
      />

      <Buttons activeName="아이디 찾기" buttonType="submit" />
    </FindIdForm>
  );
}

export default memo(FindId);
