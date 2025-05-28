import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 40px 20px 20px 20px;
  align-items: center;
  background-color: #f9fbff;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: nowrap;
  margin-bottom: 20px;
`;

export const CalendarContainer = styled.div`
  background-color: #e8f4fd;
  padding: 20px;
  border-radius: 15px;
  margin: 10px;
  width:  300px;
`;

export const TimeSlotsContainer = styled.div`
  background-color: #e8f4fd;
  padding: 20px;
  border-radius: 15px;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-height: 250px;
  overflow-y: auto;
`;

export const HighlightedTitle = styled.h2`
  margin-top: 5%;
  margin-bottom: 3%;
  background: linear-gradient(to right, #dbf7dc, #a7d8ff);
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  display: inline-block;
  font-weight: bold;
  color: #1d3557;
  text-align: center;
  user-select: none;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const TimeSlotButton = styled.button`
  background-color: ${({ selected }) => (selected ? "#74c0fc" : "white")};
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#4dabf7" : "#f1f3f5")};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const ScheduleButton = styled.button`
  background-color: #1971c2;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #1864ab;
  }
`;

export const MyAppointmentsButton = styled.button`
  background-color: #dbe4ff;
  color: #364fc7;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #bac8ff;
  }
`;

export const HorizontalContainer = styled.div`
  display: flex;
  gap: 150px; 
  align-items: center; 
`;

