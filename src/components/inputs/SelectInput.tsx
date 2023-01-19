import React from 'react';
import { UseFormRegister, FieldErrorsImpl, Path } from 'react-hook-form';
import styled from '@emotion/styled';
import { IUserProfile } from '@utils/types';
import { mq } from '@utils/mediaquery/mediaQuery';
import { InputLabel } from '@assets/styles/CommonStyles';
import { useTheme } from '@emotion/react';

const SelectWrapper = styled.div(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '0.4rem 0',
  [mq('desktop')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const StyledSelect = styled.select(({ theme }) => ({
  border: `1px solid ${theme.color.divider_grey}`,
  padding: '0.8rem 1.2rem',
  minWidth: '20rem',
}));

const StyledOption = styled.option(() => ({}));

interface ISelectInput {
  register?: UseFormRegister<IUserProfile | any>;
  errors: Partial<FieldErrorsImpl<IUserProfile>> | any;
  registerName: Path<IUserProfile>;
  idName: string;
  labelName: string;
  required?: boolean;
}
function SelectInput({ register, registerName, idName, labelName, required }: ISelectInput) {
  const theme = useTheme();

  return (
    <SelectWrapper>
      <InputLabel htmlFor={idName}>
        {labelName}
        <span style={{ color: theme.color.red_color, marginLeft: '0.2rem' }}>
          {required ? '*' : null}
        </span>
      </InputLabel>

      <StyledSelect {...(register && register(registerName))}>
        <StyledOption value="pro01">티칭프로</StyledOption>
        <StyledOption value="pro02">협회준회원</StyledOption>
        <StyledOption value="pro03">협회정회원</StyledOption>
        <StyledOption value="pro04">투어 프로</StyledOption>
      </StyledSelect>
    </SelectWrapper>
  );
}

export default SelectInput;
