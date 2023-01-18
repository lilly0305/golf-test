import React from 'react';
import ReactDOM from 'react-dom';

interface IMessagePortal {
  children: React.ReactElement;
}
export default function MessagePortal({ children }: IMessagePortal) {
  const messageElement = document.querySelector('#message');

  return messageElement ? ReactDOM.createPortal(children, messageElement) : null;
}
