import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 12px 24px;
  background-color: #7f56d9;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 20px auto 0;
  display: block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6938c0;
  }

  &:active {
    background-color: #5a2fb0;
  }
`;