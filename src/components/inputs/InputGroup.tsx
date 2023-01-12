import React, { memo } from 'react';
import styled from '@emotion/styled';

import { Path, UseFormRegister, RegisterOptions, FieldErrorsImpl } from 'react-hook-form';
import { ILoginForm, ISignUp } from '@utils/types';

const InputGroupContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const InputLabel = styled.label(() => ({
  display: 'inline-block',
  minWidth: '10rem',
}));

const Wrapper = styled.div(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
}));

interface IStyledInput {
  isError?: boolean;
}
const StyledInput = styled.input<IStyledInput>(({ theme, isError }) => ({
  width: '100%',
  padding: '1rem 1.2rem',
  border: `1px solid ${isError ? theme.color.red_color : theme.color.divider_grey}`,
}));

const ErrorMessage = styled.p(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.color.red_color,
  marginTop: '0.2rem',
  marginLeft: '10rem',
  height: '1.4rem',
}));

interface IInputGroup {
  idName: string;
  labelName: string;
  inputType: 'text' | 'email' | 'number' | 'password';
  placeHolder: string;
  rules?: RegisterOptions;
  registerName: Path<ILoginForm | ISignUp>;
  register?: UseFormRegister<ILoginForm | ISignUp>;
  errors: Partial<FieldErrorsImpl<ILoginForm | ISignUp>> | any;
}
function InputGroup({
  idName,
  labelName,
  inputType = 'text',
  placeHolder,
  rules,
  registerName,
  register,
  errors,
}: IInputGroup) {
  return (
    <InputGroupContainer>
      <Wrapper>
        <InputLabel htmlFor={idName}>{labelName}</InputLabel>

        <StyledInput
          {...(register && register(registerName, rules))}
          isError={errors[registerName] && true}
          placeholder={placeHolder}
          type={inputType}
          id={idName}
        />
      </Wrapper>

      <ErrorMessage>{errors[registerName]?.message}</ErrorMessage>
    </InputGroupContainer>
  );
}

export default memo(InputGroup);
