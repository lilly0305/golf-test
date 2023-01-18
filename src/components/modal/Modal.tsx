import styled from '@emotion/styled';
import React, { memo, useCallback, useEffect } from 'react';
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
  marginBottom: '3rem',
  padding: '2rem 6rem',
  textAlign: 'center',
  lineHeight: '1.5',
}));

const ModalTitle = styled.h3(({ theme }) => ({
  marginBottom: '3rem',
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
  margin: '3rem auto 0',
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
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  activeButtonName: string;
  closeButtonName?: string;
  activeEvent: React.MouseEventHandler<HTMLButtonElement>;
}
function Modal({
  show,
  children,
  modalTitle,
  setModal,
  activeButtonName,
  closeButtonName = '취소',
  activeEvent,
}: IModal) {
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

  const closeModal = useCallback(() => {
    setModal(false);
  }, [setModal]);

  return show ? (
    <ModalPortal>
      <ModalContainer>
        <Overlay />
        <ModalContents>
          <ModalTitle>{modalTitle}</ModalTitle>

          {children}

          <Buttons>
            <Button type="button" onClick={closeModal}>
              {closeButtonName}
            </Button>
            <Button type="button" buttonType="active" onClick={activeEvent}>
              {activeButtonName}
            </Button>
          </Buttons>
        </ModalContents>
      </ModalContainer>
    </ModalPortal>
  ) : null;
}

export default memo(Modal);
