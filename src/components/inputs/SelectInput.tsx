import React from 'react';
import { UseFormRegister, FieldErrorsImpl, Path } from 'react-hook-form';
import styled from '@emotion/styled';
import { IUserProfile } from '@utils/types';
import { mq } from '@utils/mediaquery/mediaQuery';
import { InputLabel } from '@assets/styles/CommonStyles';
import { useTheme } from '@emotion/react';
import { ISelectOptions } from './selectOptions';

const SelectWrapper = styled.div(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '0.4rem 0',
  marginBottom: '1.8rem',
  [mq('desktop')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const StyledSelect = styled.select(({ theme }) => ({
  border: `1px solid ${theme.color.divider_grey}`,
  padding: '0.9rem 1.2rem',
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
  optionList: Array<ISelectOptions>;
}
function SelectInput({
  register,
  registerName,
  idName,
  labelName,
  required,
  optionList,
}: ISelectInput) {
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
        {optionList.map((option) => (
          <StyledOption key={option.id} value={option.value}>
            {option.name}
          </StyledOption>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
}

export default SelectInput;
