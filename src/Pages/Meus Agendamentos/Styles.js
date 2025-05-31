import styled from "styled-components";

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


export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    flex-direction: column
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
    overflow-x: auto;
    width:80%;
   

`;

export const AppointmentCard = styled.div`
    flex: 0 0 calc(25% - 12px); 
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    background: #f9f9f9;
    width:20%
`;

export const ServiceName = styled.h2`
    font-size: 18px;
    margin-bottom: 8px;
     @media (max-width: 768px) {
        font-size: 14px;
    }
     @media (max-width: 561px) {
        font-size: 8px;
    }
`;

export const AppointmentInfo = styled.p`
    margin: 4px 0;
    min-width:none;
    margin-bottom: 8px;
     @media (max-width: 768px) {
        font-size: 14px;
    }
     @media (max-width: 561px) {
        font-size: 8px;
    }
`;

export const NavigationButton = styled.button`
    margin-top: 20px;
    padding: 10px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;