import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    width: 100%;
`
export const Title = styled.h1`
  margin-top: 2%;
  background: linear-gradient(to right, #f8d7ff, #a5d8ff);
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  display: inline-block;
  color: #1d3557;
  font-weight: bold;
`;

export const P = styled.p`
  margin-top: 1%;
`;