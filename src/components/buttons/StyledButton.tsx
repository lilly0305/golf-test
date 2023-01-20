import styled from '@emotion/styled';
import React from 'react';

const Button = styled.button(({ theme }) => ({
  padding: '0.8rem 1.2rem',
  color: theme.color.white,
  fontWeight: theme.fontWeight.bold,
}));

interface IStyledButton {
  buttonName: string;
  clickEvent: () => void;
}
function StyledButton({ buttonName, clickEvent }: IStyledButton) {
  return (
    <Button type="button" onClick={clickEvent}>
      {buttonName}
    </Button>
  );
}

export default StyledButton;
