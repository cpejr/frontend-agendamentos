import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ModalItem = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  &:hover {
    color: #0077cc;
  }
`;
