import React, { memo } from 'react';
import styled from '@emotion/styled';

import { Path, UseFormRegister, RegisterOptions, DeepMap, FieldError } from 'react-hook-form';

const InputGroupContainer = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
}));

const InputLabel = styled.label(() => ({
  display: 'inline-block',
  width: '12rem',
}));

interface IFieldValues {
  id: string;
  pw: string;
}

//  flex: 1;
// padding: '1rem 1.2rem';
// border: 1px solid ${theme.color.divider_grey};

interface IInputGroup {
  idName: string;
  labelName: string;
  inputType: 'text' | 'email' | 'number' | 'password';
  placeHolder: string;
  rules?: RegisterOptions;
  registerName: Path<IFieldValues>;
  register?: UseFormRegister<IFieldValues>;
  errors?: Partial<DeepMap<IFieldValues, FieldError>> | undefined;
}
function InputGroup({
  idName,
  labelName,
  inputType = 'text',
  placeHolder,
  rules,
  registerName,
  register,
}: // errors,
IInputGroup) {
  return (
    <InputGroupContainer>
      <InputLabel htmlFor={idName}>{labelName}</InputLabel>

      <input
        type={inputType}
        {...(register && register(registerName, rules))}
        id={idName}
        placeholder={placeHolder}
      />
    </InputGroupContainer>
  );
}

export default memo(InputGroup);
