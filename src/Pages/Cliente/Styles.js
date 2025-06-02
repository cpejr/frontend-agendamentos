import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 80px 60px 80px;
  max-width: 1400px;
  margin: 0 auto;
  font-family: sans-serif;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;    
  width: 40%;
  padding-left: 20px;
  margin-top: 40px;
  margin-left: -80px; 
`;

export const AgendamentosSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 58%;
`;

export const Avatar = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border: 9px solid #DDFFE0;
  background: linear-gradient(to bottom, #A7CEFD, #DDFFE0);
  border-radius: 50%;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 1px 5px 2px rgba(0, 0, 0, 0.2);
`;

export const EditIcon = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  border: 4.5px solid #DDFFE0;
  box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  z-index: 10;

  ${({ position }) =>
    position === 'avatar' &&
    `
    bottom: -5px;   
    right: -10px;     
  `}

  ${({ position }) =>
    position === 'nome' &&
    `
    bottom: -25px;
    right: -25px;
  `}
`;

export const NomeClienteWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 12px 0 40px;
  width: 100%;
  max-width: 320px; 
`;

export const NomeCliente = styled.div`
  font-size: 28px;
  font-weight: bold;
  border: 7px solid #DDFFE0;
  background-color: white;
  padding: 10px 80px 10px 20px; 
  border-radius: 12px;
  white-space: nowrap;
  text-align: center;
  box-shadow: 1px 5px 2px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
`;

export const StarRating = styled.div`
  color: #FFC36E;
  font-size: 50px;
  margin-top: -25px;
`;

export const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 24px 0 10px;
`;

export const AgendaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

export const AgendaItem = styled.div`
  background-color: #F2FFF3;
  padding: 16px 24px;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: lighter; 
  width: 100%;
  border: 7px solid #DDFFE0;
  min-width: 600px;
  box-shadow: 1px 5px 2px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  font-weight: bold;
  color: #063D61;
  margin-left: 40px; 
`;
