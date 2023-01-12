import React, { SetStateAction } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Path, FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { ILoginForm, ISignUp } from '@utils/types';
import { RemixIcon } from '@assets/styles/CommonStyles';
import { IPolicyCheck } from '@pages/account/join/joinPolicy';

const InputContainer = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const InputLabel = styled.label(() => ({
  display: 'inline-block',
  marginLeft: '0.6rem',
}));

interface IStyledInput {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const StyledInput = styled.input<IStyledInput>(() => ({
  display: 'none',
}));

interface ISingleCheckInput {
  register?: UseFormRegister<ILoginForm | ISignUp | any>;
  errors: Partial<FieldErrorsImpl<ILoginForm | ISignUp>> | any;
  registerName: Path<ILoginForm | ISignUp>;
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
}: ISingleCheckInput) {
  const theme = useTheme();

  // const onCheckedItem = useCallback(() => {
  //   console.log(checkArr);
  // }, [checkArr]);

  return (
    <InputContainer>
      {checked ? (
        <RemixIcon className="ri-checkbox-line" color={theme.color.point_color} />
      ) : (
        <RemixIcon className="ri-checkbox-blank-line" color={theme.color.placeholder_color} />
      )}

      <StyledInput
        onChange={() => {
          console.log(checkArr);
        }}
        {...(register && register(registerName))}
        type="checkbox"
        id={idName}
      />
      <InputLabel htmlFor={idName}>
        {labelName}

        <span style={{ color: theme.color.red_color, marginLeft: '0.2rem' }}>
          {required ? '*' : null}
        </span>
      </InputLabel>
    </InputContainer>
  );
}

export default SingleCheckInput;
