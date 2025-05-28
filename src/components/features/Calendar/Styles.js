import styled from "styled-components";
import { Calendar } from "primereact/calendar";

export const Container = styled.div`
  width: 350px;
  margin: auto;

  .error-calendar {
    border: 1px solid red !important;
  }
`;

export const StyledCalendar = styled(Calendar)`
  background: #dcefff !important;
  border-radius: 12px !important;
  padding: 12px !important;

  &.p-datepicker {
    border: none !important;
  }

  .p-datepicker-header {
    background: transparent !important;
    color: #003366 !important;
    font-weight: 600 !important;
    font-size: 1.1rem !important;
    display: flex !important;
    justify-content: space-between !important;
    padding: 0 10px !important;
  }

  .p-datepicker-title {
    margin: 0 auto !important;
  }

  .p-datepicker-prev,
  .p-datepicker-next {
    position: relative;
    color: #003366 !important;
    cursor: pointer !important;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  .p-datepicker-prev:hover,
  .p-datepicker-next:hover {
    background-color: #3a78d7 !important; 
    color: white !important;              
  }

  .p-datepicker-calendar {
    background: #dcefff !important;
    border-radius: 8px !important;
  }

  .p-datepicker-calendar th {
    color: #003366 !important;
    font-weight: 700 !important;
    font-size: 0.85rem !important;
    padding: 8px 0 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    border-bottom: 1px solid #a0c8ff !important;
  }

  .p-datepicker-calendar td {
    background-color: white !important;
    font-size: 1rem !important;
    padding: 6px !important;
    transition: background-color 0.3s ease;
  }

  /* Hover com bolinha azul nas datas */
  .p-datepicker-calendar td:hover:not(.p-disabled):not(.p-highlight) {
    background-color: #a0c8ff !important;
    border-radius: 50% !important;
    cursor: pointer;
  }

  .p-datepicker-calendar td.p-highlight {
    background-color: #3a78d7 !important;
    border-radius: 50% !important;
    color: white !important;
  }

  .p-datepicker-calendar td.p-disabled {
    color: #bbb !important;
  }
`;
