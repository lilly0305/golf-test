import React, { memo } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import MessagePortal from './MessagePortal';

const messageAnimation = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }
  30%{
    visibility: visible;
    opacity: 1;
  }
  60%{
    visibility: visible;
    opacity: 1;
  }
  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

const StyledMessage = styled.span(({ theme }) => ({
  position: 'fixed',
  zIndex: 999,
  bottom: '10%',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '2rem',
  border: `1px solid ${theme.color.divider_grey}`,
  background: theme.color.white,
  fontWeight: theme.fontWeight.bold,
  fontSize: '1.4rem',
  animation: `${messageAnimation} 2s`,
  animationFillMode: 'both',
  transition: 'all 0.3rem',
}));

interface IMessage {
  show: boolean;
  message: string;
}
function Message({ show, message }: IMessage) {
  return show ? (
    <MessagePortal>
      <StyledMessage>{message}</StyledMessage>
    </MessagePortal>
  ) : null;
}

export default memo(Message);
