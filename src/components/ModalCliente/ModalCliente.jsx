import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalItem
} from './Styles';

const ModalCliente = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalItem>👤 Profile</ModalItem>
        <ModalItem>⚙️ Configurações</ModalItem>
        <ModalItem>🚪 Logout</ModalItem>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalCliente;
