import React, { SetStateAction, useCallback } from 'react';
import {
  CheckInputLabel,
  InputContainer,
  RemixIcon,
  StyledInput,
} from '@assets/styles/CommonStyles';
import { useTheme } from '@emotion/react';
import { IPolicyCheck } from '@pages/account/join/joinPolicy';

interface IAllCheckInput {
  checkData: Array<IPolicyCheck>;
  checkArr: Array<string>;
  setCheckArr: React.Dispatch<SetStateAction<Array<string>>>;
}
function AllCheckInput({ checkArr, setCheckArr, checkData }: IAllCheckInput) {
  const theme = useTheme();

  const handleAllCheck = useCallback(
    (isChecked: boolean) => {
      if (isChecked) {
        const idArray: Array<string> = [];
        checkData.forEach((el) => idArray.push(el.idName));
        setCheckArr(idArray);
      } else {
        setCheckArr([]);
      }
    },
    [setCheckArr, checkData],
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
