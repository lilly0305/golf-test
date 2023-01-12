import React, { memo } from 'react';
import styled from '@emotion/styled';

import { Path, UseFormRegister, RegisterOptions, FieldErrorsImpl } from 'react-hook-form';
import { ILoginForm, ISignUp } from '@utils/types';
import { useTheme } from '@emotion/react';

const InputGroupContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const InputLabel = styled.label(() => ({
  display: 'inline-block',
  minWidth: '12rem',
}));

const Wrapper = styled.div(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
}));

interface IStyledInput {
  isError?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}
const StyledInput = styled.input<IStyledInput>(({ theme, isError, readonly, disabled }) => ({
  flex: 1,
  width: '100%',
  padding: '1rem 1.2rem',
  border: `1px solid ${isError ? theme.color.red_color : theme.color.divider_grey}`,
  background: readonly || disabled ? theme.color.disabled_grey : 'transparent',
}));

interface IStyledButton {
  active?: boolean;
}
const StyledButton = styled.button<IStyledButton>(({ theme, active = true }) => ({
  marginLeft: '1rem',
  padding: '0.8rem 1.2rem',
  background: active ? theme.color.point_color : theme.color.disabled_grey,
  fontSize: '1.4rem',
  borderRadius: '3rem',
  color: theme.color.white,
  fontWeight: theme.fontWeight.bold,
}));

const ErrorMessage = styled.p(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.color.red_color,
  marginTop: '0.2rem',
  marginLeft: '12rem',
  height: '1.4rem',
}));

interface IInputGroup {
  register?: UseFormRegister<ILoginForm | ISignUp | any>;
  errors: Partial<FieldErrorsImpl<ILoginForm | ISignUp>> | any;
  registerName: Path<ILoginForm | ISignUp>;
  idName: string;
  labelName: string;
  inputType: 'text' | 'email' | 'number' | 'password';
  placeHolder: string;
  rules?: RegisterOptions;
  required?: boolean;
  active?: boolean;
  buttonName?: string;
  readonly?: boolean;
  disabled?: boolean;
  buttonEvent?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
function InputGroup({
  idName,
  labelName,
  inputType = 'text',
  placeHolder,
  registerName,
  register,
  errors,
  required,
  active,
  buttonName,
  readonly,
  disabled,
  buttonEvent,
}: IInputGroup) {
  const theme = useTheme();

  return (
    <InputGroupContainer>
      <Wrapper>
        <InputLabel htmlFor={idName}>
          {labelName}
          <span style={{ color: theme.color.red_color, marginLeft: '0.2rem' }}>
            {required ? '*' : null}
          </span>
        </InputLabel>

        <StyledInput
          {...(register && register(registerName))}
          isError={errors[registerName] && true}
          placeholder={placeHolder}
          type={inputType}
          id={idName}
          readOnly={readonly}
          disabled={disabled}
        />

        {buttonName && (
          <StyledButton type="button" active={active} onClick={buttonEvent}>
            {buttonName}
          </StyledButton>
        )}
      </Wrapper>

      <ErrorMessage>{errors[registerName]?.message}</ErrorMessage>
    </InputGroupContainer>
  );
}

export default memo(InputGroup);
