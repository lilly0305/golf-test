import React, { memo } from 'react';
import styled from '@emotion/styled';

// input-group
interface IInputGroupContainer {
  children: React.ReactNode;
}
const InputGroupContainer = styled.div<IInputGroupContainer>(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
}));

const InputLabel = styled.label(() => ({
  fontSize: '1.4rem',
  display: 'inline-block',
  width: '12rem',
}));

const InputText = styled.input(({ theme }) => ({
  flex: 1,
  padding: '1rem 1.2rem',
  fontSize: '1.4rem',
  border: `1px solid ${theme.color.divider_grey}`,
}));

interface IInputGroup {
  idName: string;
  labelName: string;
  inputType: string;
  placeHolder: string;
}
function InputGroup({ idName, labelName, inputType, placeHolder }: IInputGroup) {
  return (
    <InputGroupContainer>
      <InputLabel htmlFor={idName}>{labelName}</InputLabel>
      <InputText id={idName} type={inputType} placeholder={placeHolder} />
    </InputGroupContainer>
  );
}

export default memo(InputGroup);
