import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  height: 100vh;
  background-color: #f9f9f9;
  font-family: 'Inter', sans-serif;
`;

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  // Centraliza verticalmente
  padding: 20px;
`;

export const RightSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;  // Centraliza horizontalmente
  align-items: center;      // Centraliza verticalmente
  padding: 20px;
`;

export const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(#A7CEFD, #DDFFE0);
  border-radius: 50%;
  margin-bottom: 40px;
  /* Remova o border */
  border: none;
  outline: 12px solid #DDFFE0;  /* borda externa */
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.15);
`;

export const Box = styled.div`
  background: #F2FFF3;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  /* Remova o border */
  border: none;
  outline: 12px solid #DDFFE0;  /* borda externa */
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.15);
`;


export const Name = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #063D61;
  text-align: center;
  font-family: 'Inter', sans-serif;
`;

export const Stars = styled.div`
  font-size: 60px;
  color: #ffa500;
`;

export const Title = styled.p`
  font-weight: bold;
  margin: 20px 0 8px 0;
  font-size: 20px;
  color: #063D61;
  font-family: 'Inter', sans-serif;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 0 0 15px 0;
  color: #063D61;
  font-family: 'Inter', sans-serif;
`;
