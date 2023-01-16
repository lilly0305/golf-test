import React, { SetStateAction, useCallback } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
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
  required,
  checked,
  checkArr,
  setCheckArr,
}: ISingleCheckInput) {
  const theme = useTheme();

  const onCheckedItem = useCallback(
    (isChecked: boolean, id: string) => {
      setCheckArr(
        checkArr.map((check) => (check.idName === id ? { ...check, checked: isChecked } : check)),
      );
    },
    [checkArr, setCheckArr],
  );

  return (
    <InputContainer>
      <StyledInput
        {...(register && register(registerName))}
        type="checkbox"
        onChange={(e) => onCheckedItem(e.target.checked, e.target.id)}
        id={idName}
        checked={checked}
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
