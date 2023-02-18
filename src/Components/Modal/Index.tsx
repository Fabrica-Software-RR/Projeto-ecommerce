import { useState } from 'react';
import { ModalStyled } from './Style';

interface IModal {
  visivel: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title: string;
  onOk?: () => void;
  texto?: string;
}

function Modal({ texto, children, visivel, onClose, title, onOk }: IModal) {
  return (
    <ModalStyled
      title={title}
      visible={visivel}
      onOk={onOk}
      onCancel={onClose}
      width={'50%'}
    >
      {texto && <p>{texto}</p>}
      {children}
    </ModalStyled>
  );
}

export default Modal;
