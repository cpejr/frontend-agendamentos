import styled from "styled-components";

export const RegisterLink = styled.span`
  cursor: pointer;
  color: #007bff;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`;
export const Container = styled.div`
      display: flex;
    align-items: center;
    height: 100vh;
    flex-direction: column
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
  margin-top: 5%;
  margin-bottom: 3%;
  background: linear-gradient(to right, #f8d7ff, #a5d8ff);
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  display: inline-block;
  color: #1d3557;
  font-weight: bold;
  text-align: center;

`;
export const divButton = styled.div`
  display: flex;  
  justify-content: center;
  margin-top: none;
  
`;

export const P = styled.p`
  margin-top: 3%;
`;