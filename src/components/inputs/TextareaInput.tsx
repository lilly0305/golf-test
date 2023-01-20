import React, { memo } from 'react';
import styled from '@emotion/styled';
import { UseFormRegister, FieldErrorsImpl, Path } from 'react-hook-form';
import { mq } from '@utils/mediaquery/mediaQuery';
import { InputLabel } from '@assets/styles/CommonStyles';
import { useTheme } from '@emotion/react';
import { IUserProfile } from '@utils/types';

const TextareaWrapper = styled.div(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '0.4rem 0',
  marginBottom: '1.8rem',
  [mq('desktop')]: {
    flexDirection: 'row',
  },
}));

const StyledTextarea = styled.textarea(({ theme }) => ({
  width: '100%',
  border: `1px solid ${theme.color.divider_grey}`,
  minHeight: '18rem',
  padding: '1.2rem',
  resize: 'none',
}));

interface ITextareaInput {
  register?: UseFormRegister<IUserProfile | any>;
  errors: Partial<FieldErrorsImpl<IUserProfile>> | any;
  registerName: Path<IUserProfile>;
  idName: string;
  labelName: string;
  required?: boolean;
  placeholder: string;
}
function TextareaInput({
  register,
  registerName,
  idName,
  labelName,
  required,
  placeholder,
}: ITextareaInput) {
  const theme = useTheme();

  return (
    <TextareaWrapper>
      <InputLabel htmlFor={idName}>
        {labelName}
        <span style={{ color: theme.color.red_color, marginLeft: '0.2rem' }}>
          {required ? '*' : null}
        </span>
      </InputLabel>

      <StyledTextarea {...(register && register(registerName))} placeholder={placeholder} />
    </TextareaWrapper>
  );
}

export default memo(TextareaInput);
