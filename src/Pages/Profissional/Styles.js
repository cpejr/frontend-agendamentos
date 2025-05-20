import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  height: 100vh;
  background-color: #f9f9f9;
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
  background: linear-gradient(#a0d2eb, #cdeac0);
  border-radius: 50%;
  margin-bottom: 40px;
`;

export const Name = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1a1a1a;
  text-align: center;
`;

export const Stars = styled.div`
  font-size: 32px;
  color: #ffa500;
`;

export const Box = styled.div`
  background-color: #e6f4ea;
  padding: 40px;
  border-radius: 16px;
  border: 1px solid #c0e2c1;
  width: 100%;
  max-width: 600px;
`;

export const Title = styled.p`
  font-weight: bold;
  margin: 20px 0 8px 0;
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  margin: 0 0 15px 0;
  color: #333;
`;

