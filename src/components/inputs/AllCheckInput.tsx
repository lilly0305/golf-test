import React, { SetStateAction, useCallback } from 'react';
import {
  CheckInputLabel,
  InputContainer,
  RemixIcon,
  StyledInput,
} from '@assets/styles/CommonStyles';
import { useTheme } from '@emotion/react';
import { IPolicyCheck } from '@pages/account/join/joinPolicy';
import { UseFormSetValue } from 'react-hook-form';
import { ISignUp } from '@utils/types';

interface IAllCheckInput {
  checkData: Array<IPolicyCheck>;
  checkArr: Array<string>;
  setCheckArr: React.Dispatch<SetStateAction<Array<string>>>;
  setValue: UseFormSetValue<ISignUp | any>;
}
function AllCheckInput({ checkArr, setCheckArr, checkData, setValue }: IAllCheckInput) {
  const theme = useTheme();

  const handleAllCheck = useCallback(
    (isChecked: boolean) => {
      if (isChecked) {
        const idArray: Array<string> = [];

        checkData.forEach((el) => {
          idArray.push(el.idName);
          setValue(el.idName, true);
        });

        setCheckArr(idArray);

        setValue('use_term_policy', true);
      } else {
        setCheckArr([]);
        checkData.forEach((el) => {
          setValue(el.idName, false);
        });
      }
    },
    [setCheckArr, checkData, setValue],
  );

  return (
    <InputContainer>
      <StyledInput
        type="checkbox"
        onChange={(e) => {
          handleAllCheck(e.target.checked);
        }}
        id="checkAll"
        checked={checkArr?.length === checkData?.length}
      />

      <CheckInputLabel htmlFor="checkAll">
        {checkArr.length === checkData.length ? (
          <RemixIcon className="ri-checkbox-line" color={theme.color.point_color} />
        ) : (
          <RemixIcon className="ri-checkbox-blank-line" color={theme.color.placeholder_color} />
        )}
        전체 선택
      </CheckInputLabel>
    </InputContainer>
  );
}

export default AllCheckInput;
