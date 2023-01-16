import React, { SetStateAction, useCallback } from 'react';
import { Path, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useTheme } from '@emotion/react';
import { ILoginForm, ISignUp } from '@utils/types';
import {
  CheckInputLabel,
  InputContainer,
  RemixIcon,
  StyledInput,
} from '@assets/styles/CommonStyles';
import { IPolicyCheck } from '@pages/account/join/joinPolicy';

interface ISingleCheckInput {
  register?: UseFormRegister<ILoginForm | ISignUp | any>;
  setValue: UseFormSetValue<ILoginForm | ISignUp | any>;
  registerName: Path<ILoginForm | ISignUp | any>;
  idName: string;
  labelName: string;
  checked: boolean;
  required?: boolean;
  checkArr: Array<IPolicyCheck>;
  setCheckArr: React.Dispatch<SetStateAction<IPolicyCheck[]>>;
}
function SingleCheckInput({
  idName,
  labelName,
  registerName,
  register,
  setValue,
  required,
  checked,
  checkArr,
  setCheckArr,
}: ISingleCheckInput) {
  const theme = useTheme();

  const onCheckedItem = useCallback(
    (isChecked: boolean, id: string, name: string) => {
      setCheckArr(
        checkArr.map((check) => (check.idName === id ? { ...check, checked: isChecked } : check)),
      );
      setValue(name, isChecked);
    },
    [checkArr, setCheckArr, setValue],
  );

  return (
    <InputContainer>
      <StyledInput
        {...(register && register(registerName))}
        type="checkbox"
        checked={checked}
        id={idName}
        onChange={(e) => onCheckedItem(e.target.checked, e.target.id, registerName)}
      />

      <CheckInputLabel htmlFor={idName}>
        {checked ? (
          <RemixIcon className="ri-checkbox-line" color={theme.color.point_color} />
        ) : (
          <RemixIcon className="ri-checkbox-blank-line" color={theme.color.placeholder_color} />
        )}

        {labelName}

        <span
          style={{
            color: required ? theme.color.red_color : theme.color.placeholder_color,
            marginLeft: '0.2rem',
          }}
        >
          {required ? '(필수)' : '(선택)'}
        </span>
      </CheckInputLabel>
    </InputContainer>
  );
}

export default SingleCheckInput;
