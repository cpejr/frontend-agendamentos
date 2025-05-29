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
  align-items: flex-start; 
  width: 40%;
  padding-left: 20px;
  margin-top: 40px;
`;

export const AgendamentosSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 58%;
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(to bottom, #7bc6cc, #bef2c0);
  border-radius: 50%;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const EditIcon = styled.div`
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 26px;
  height: 26px;
  background: white;
  border-radius: 50%;
  border: 1px solid #ccc;
`;

export const NomeCliente = styled.div`
  font-size: 28px;
  font-weight: bold;
  background-color: #e6f4ec;
  padding: 10px 20px;
  border-radius: 12px;
  margin: 12px 0;
  white-space: nowrap; 
  text-align: center;
`;

export const StarRating = styled.div`
  color: orange;
  font-size: 26px;
  margin-top: 10px;
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
  background-color: #e6f4ec;
  padding: 16px 24px;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  width: 100%;
  min-width: 600px; 
`;

export const Status = styled.span`
  font-weight: bold;
  color: ${({ status }) =>
    status === 'confirmado' ? 'green' :
    status === 'cancelado' ? 'red' :
    status === 'finalizado' ? 'gray' : 'black'};
  margin-left: 40px; 
`;