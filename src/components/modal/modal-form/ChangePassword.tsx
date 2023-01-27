import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IChangePw } from '@utils/types';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';
import { confirmPwPlaceholder, userPwPlaceholder } from '@utils/placeholder';
import { InputGroup } from '@components/inputs';
import useAxios from '@utils/useAxios';
import { yupChangePW } from '@utils/yupValidation';

const ChangePwForm = styled.form(() => ({
  padding: '2rem 0',
}));

const Buttons = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0 1rem',
  width: '80%',
  margin: '3rem auto 0',
}));

interface IButton {
  buttonType?: string;
}
const Button = styled.button<IButton>(({ theme, buttonType = 'inactive' }) => ({
  flex: 1,
  background: buttonType === 'active' ? theme.color.point_color : theme.color.placeholder_color,
  color: theme.color.white,
  fontWeight: theme.fontWeight.bold,
  padding: '1rem 0',
  textAlign: 'center',
  borderRadius: '60rem',
}));

interface IChangePasswordModal {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function ChangePasswordModal({ setModal }: IChangePasswordModal) {
  const interceptor = useAxios();

  const formOptions = {
    resolver: yupResolver(yupChangePW),
    defaultValues: {
      user_pw: '',
      new_pw: '',
      confirm_pw: '',
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePw>(formOptions);

  console.log(errors);

  const changePassword: SubmitHandler<IChangePw> = useCallback(
    (data) => {
      console.log(JSON.stringify(data, null, 4));

      const res = interceptor?.patch('/api/v1/user/pw', {
        user_pw: data.user_pw,
        new_pw: data.new_pw,
      });

      console.log(res);
    },
    [interceptor],
  );

  const closeModal = useCallback(() => {
    setModal(false);
  }, [setModal]);

  return (
    <ChangePwForm onSubmit={handleSubmit(changePassword)}>
      <InputGroup
        register={register}
        errors={errors}
        registerName="user_pw"
        idName="user_pw"
        labelName="기존 비밀번호"
        inputType="password"
        placeHolder={userPwPlaceholder}
        required
      />

      <InputGroup
        register={register}
        errors={errors}
        registerName="new_pw"
        idName="new_pw"
        labelName="새비밀번호"
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

      <Buttons>
        <Button type="button" onClick={closeModal}>
          취소
        </Button>
        <Button type="submit" buttonType="active">
          변경하기
        </Button>
      </Buttons>
    </ChangePwForm>
  );
}

export default ChangePasswordModal;
