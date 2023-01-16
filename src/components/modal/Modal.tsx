import styled from '@emotion/styled';
import React, { memo, useEffect } from 'react';
import ModalPortal from './ModalPortal';

const ModalContainer = styled.div(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
}));

const Overlay = styled.div(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
}));

const ModalContents = styled.div(({ theme }) => ({
  position: 'relative',
  overflowY: 'auto',
  zIndex: 10,
  background: theme.color.white,
  minWidth: '30vw',
  maxHeight: '80vh',
  padding: '2rem 6rem',
}));

const ModalTitle = styled.h3(({ theme }) => ({
  textAlign: 'center',
  fontSize: '1.8rem',
  fontWeight: theme.fontWeight.extraBold,
}));

const Buttons = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0 1rem',
  width: '80%',
  margin: '2rem auto 0',
}));

interface IButton {
  buttonType?: string;
}
const Button = styled.button<IButton>(({ theme, buttonType = 'inactive' }) => ({
  flex: 1,
  background: buttonType === 'active' ? theme.color.point_color : theme.color.placeholder_color,
  color: theme.color.white,
  fontWeight: theme.fontWeight.bold,
  padding: '1rem 0',
  textAlign: 'center',
  borderRadius: '60rem',
}));

interface IModal {
  show: boolean;
  children: React.ReactElement;
  modalTitle: string;
}
function Modal({ show, children, modalTitle }: IModal) {
  useEffect(() => {
    if (show) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: hidden;
      width: 100%;`;
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, [show]);

  return show ? (
    <ModalPortal>
      <ModalContainer>
        <Overlay />
        <ModalContents>
          <ModalTitle>{modalTitle}</ModalTitle>
          {children}
          <Buttons>
            <Button type="button">취소</Button>
            <Button type="submit" buttonType="active">
              회원가입
            </Button>
          </Buttons>
        </ModalContents>
      </ModalContainer>
    </ModalPortal>
  ) : null;
}

export default memo(Modal);
