import styled from "styled-components";

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  background-color: white;
  color: #1d3557;
  font-size: 1.7rem;
  font-weight: bold;
  border: 2px solid #1d3557;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 80%;
  max-width: 300px;
  margin: 0 auto;
  margin-top: 6%;

  &:hover {
    background-color: #f8d7ff;
    border-color: #a5d8ff; 
  }

  img {
    width: 12%;
    max-width: 32px; 
    height: auto;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; 
    padding: 1rem 1.5rem;
    width: 90%;
    max-width: 250px;
  }
`;
