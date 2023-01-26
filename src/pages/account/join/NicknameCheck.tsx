import React, { useCallback, useState } from 'react';
import { InputGroup } from '@components/inputs';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupNickname } from '@utils/yupValidation';
import { INicknameCheck, ISignUp } from '@utils/types';
import { SubmitHandler, useForm, UseFormSetValue } from 'react-hook-form';
import { nicknamePlaceholder } from '@utils/placeholder';
import axios from 'axios';

interface INicknameCheckProps {
  setValue: UseFormSetValue<ISignUp>;
}
function NicknameCheck({ setValue }: INicknameCheckProps) {
  const [active, setActive] = useState(true);

  const formOptions = {
    resolver: yupResolver(yupNickname),
    defaultValues: {
      nickname: '',
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INicknameCheck>(formOptions);

  const onSubmit: SubmitHandler<INicknameCheck> = useCallback(
    async (data) => {
      const res = await axios.post('/api/v1/user/check-duplicate', { nickname: data.nickname });
      console.log(res);
      if (res.data.status === 'success') {
        setValue('nickname', data.nickname);
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
        registerName="nickname"
        idName="nickname"
        labelName="닉네임"
        inputType="text"
        placeHolder={nicknamePlaceholder}
        required
        buttonName={active ? '중복확인' : '확인완료'}
        buttonType="submit"
        active={active}
      />
    </form>
  );
}

export default NicknameCheck;
