import React from 'react';
import styled from '@emotion/styled';

const StyledErrorMessage = styled.p(({ theme }) => ({
  fontSize: '1.4rem',
  color: theme.color.red_color,
}));

interface IErrorMessage {
  message: string;
}
function ErrorMessage({ message }: IErrorMessage) {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
}

export default ErrorMessage;
