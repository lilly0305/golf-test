import React from 'react';
import ReactDOM from 'react-dom';

interface IModalPortal {
  children: React.ReactElement;
}
export default function ModalPortal({ children }: IModalPortal) {
  const modalElement = document.querySelector('#modal');

  return modalElement ? ReactDOM.createPortal(children, modalElement) : null;
}
