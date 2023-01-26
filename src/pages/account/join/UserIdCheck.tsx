import React, { useCallback, useState } from 'react';
import { InputGroup } from '@components/inputs';
import { yupResolver } from '@hookform/resolvers/yup';
import { userIdPlaceholder } from '@utils/placeholder';
import { ISignUp, IUserIdCheck } from '@utils/types';
import { yupUserId } from '@utils/yupValidation';
import { SubmitHandler, useForm, UseFormSetValue } from 'react-hook-form';
import axios from 'axios';

interface IUserIdCheckProps {
  setValue: UseFormSetValue<ISignUp>;
}
function UserIdCheck({ setValue }: IUserIdCheckProps) {
  const [active, setActive] = useState(true);

  const formOptions = {
    resolver: yupResolver(yupUserId),
    defaultValues: {
      user_id: '',
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserIdCheck>(formOptions);

  const onSubmit: SubmitHandler<IUserIdCheck> = useCallback(
    async (data) => {
      const res = await axios.post('/api/v1/user/check-duplicate', { user_id: data.user_id });
      if (res.data.status === 'success') {
        setValue('user_id', data.user_id);
        setActive(false);
      } else {
        setActive(true);
      }
    },
    [setValue],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup
        register={register}
        errors={errors}
        registerName="user_id"
        idName="user_id"
        labelName="아이디"
        inputType="text"
        placeHolder={userIdPlaceholder}
        required
        buttonName={active ? '중복확인' : '확인완료'}
        buttonType="submit"
        active={active}
      />
    </form>
  );
}

export default UserIdCheck;
