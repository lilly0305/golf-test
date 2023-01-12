import React, { memo } from 'react';
import styled from '@emotion/styled';

import { Path, UseFormRegister, RegisterOptions, DeepMap, FieldError } from 'react-hook-form';

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
  marginTop: '0.4rem',
  marginLeft: '10rem',
}));

interface IFieldValues {
  id: string;
  pw: string;
}
interface IInputGroup {
  idName: string;
  labelName: string;
  inputType: 'text' | 'email' | 'number' | 'password';
  placeHolder: string;
  rules?: RegisterOptions;
  registerName: Path<IFieldValues>;
  register?: UseFormRegister<IFieldValues>;
  errors?: Partial<DeepMap<IFieldValues, FieldError>>;
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
      <ErrorMessage>{errors?.id ? errors?.id.message : null}</ErrorMessage>

      <Wrapper>
        <InputLabel htmlFor={idName}>{labelName}</InputLabel>

        <StyledInput
          {...(register && register(registerName, rules))}
          isError={errors?.id && true}
          placeholder={placeHolder}
          type={inputType}
          id={idName}
        />
      </Wrapper>
    </InputGroupContainer>
  );
}

export default memo(InputGroup);
