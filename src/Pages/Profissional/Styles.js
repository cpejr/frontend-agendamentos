import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;
  background-color: #f9f9f9;
`;

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 30px;
`;

export const RightSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ProfileImage = styled.div`
  width: 160px;
  height: 160px;
  background: linear-gradient(#a0d2eb, #cdeac0);
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const Name = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #1a1a1a;
  text-align: center;
`;

export const Stars = styled.div`
  font-size: 28px;
  color: #ffa500;
`;

export const Box = styled.div`
  background-color: #e6f4ea;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #c0e2c1;
  width: 100%;
  max-width: 600px;
`;

export const Title = styled.p`
  font-weight: bold;
  margin: 15px 0 5px 0;
  font-size: 18px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 0 0 10px 0;
  color: #333;
`;
