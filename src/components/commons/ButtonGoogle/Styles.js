import styled from "styled-components";

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  background-color: white;
  color: #1d3557;
  font-size: 2rem;
  font-weight: bold;
  border: 2px solid #1d3557;
  padding: 2% 4%;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 90%;
  max-width: 70%;
  margin: 0 auto;
  margin-top: 6%;
  &:hover {
    background-color: #f8d7ff;
    border-color: #a5d8ff;
  }

  img {
    width: 12%;
    max-width: 32px; /* Para evitar que fique muito pequeno */
    height: auto;
  }

  @media (max-width: 480px) {
    font-size: 6rem;
    padding: 3% 5%;
  }
`;
