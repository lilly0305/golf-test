import React, { memo, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { IFindId } from '@utils/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupFindId } from '@utils/yupValidation';
import { InputGroup } from '@components/inputs';
import { phonePlaceholder } from '@utils/placeholder';
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
  const navigate = useNavigate();
  const [confirmedPhone, setConfirmedPhone] = useState(false);

  const formOptions = {
    resolver: yupResolver(yupFindId),
    defaultValues: {
      phone: '',
    },
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFindId>(formOptions);

  const confirmPhone = useCallback(() => {
    setConfirmedPhone((prev) => !prev);
    setValue('phone', '01049555429');
  }, [setConfirmedPhone, setValue]);

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
        required
        disabled
        placeHolder={confirmedPhone ? '01049555429' : phonePlaceholder}
        buttonName="휴대폰 인증"
        buttonEvent={confirmPhone}
      />

      <Buttons activeName="아이디 찾기" buttonType="submit" />
    </FindIdForm>
  );
}

export default memo(FindId);
