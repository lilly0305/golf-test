import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import {
  CheckInputLabel,
  InputContainer,
  RemixIcon,
  StyledInput,
} from '@assets/styles/CommonStyles';
import { useTheme } from '@emotion/react';
import { IPolicyCheck } from '@pages/account/join/joinPolicy';

interface IAllCheckInput {
  checkArr: Array<IPolicyCheck>;
  setCheckArr: React.Dispatch<SetStateAction<IPolicyCheck[]>>;
}
function AllCheckInput({ checkArr, setCheckArr }: IAllCheckInput) {
  const theme = useTheme();
  const [allCheck, setAllCheck] = useState(false);

  const handleAllCheck = useCallback(
    (isChecked: boolean) => {
      setAllCheck(isChecked);
      setCheckArr(checkArr.map((check) => ({ ...check, checked: isChecked })));
    },
    [setCheckArr, checkArr],
  );

  useEffect(() => {
    let checkAll = true;
    for (let i = 0; i < checkArr.length; i += 1) {
      if (checkArr[i].checked === false) {
        checkAll = false;
      }
    }

    setAllCheck(checkAll);
  }, [checkArr]);

  return (
    <InputContainer>
      <StyledInput
        type="checkbox"
        onChange={(e) => {
          handleAllCheck(e.target.checked);
        }}
        id="checkAll"
        checked={allCheck}
      />

      <CheckInputLabel htmlFor="checkAll">
        {allCheck ? (
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
