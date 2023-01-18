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

interface ISingleCheckInput {
  index: number;
  register?: UseFormRegister<ILoginForm | ISignUp | any>;
  registerName: Path<ILoginForm | ISignUp | any>;
  idName: string;
  labelName: string;
  required?: boolean;
  checkArr: Array<string>;
  setCheckArr: React.Dispatch<SetStateAction<Array<string>>>;
}
function SingleCheckInput({
  idName,
  labelName,
  registerName,
  register,
  required,
  checkArr,
  setCheckArr,
}: ISingleCheckInput) {
  const theme = useTheme();

  const handleSingleCheck = useCallback(
    (isChecked: boolean, name: string) => {
      if (isChecked) {
        // 단일 선택 시 체크된 아이템을 배열에 추가
        setCheckArr([...checkArr, name]);
      } else {
        // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
        setCheckArr(checkArr.filter((el) => el !== name));
      }
    },
    [checkArr, setCheckArr],
  );

  return (
    <InputContainer>
      <StyledInput
        {...(register && register(registerName))}
        id={idName}
        type="checkbox"
        onChange={(e) => handleSingleCheck(e.target.checked, idName)}
        checked={checkArr.includes(idName)}
      />

      <CheckInputLabel htmlFor={idName}>
        {checkArr.includes(idName) ? (
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
