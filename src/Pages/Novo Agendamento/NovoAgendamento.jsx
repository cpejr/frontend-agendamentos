import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CalendarFunction from "../../components/features/Calendar/Calendar"; // seu path correto
import {
  Container,
  Wrapper,
  CalendarContainer,
  TimeSlotsContainer,
  TimeSlotButton,
  ButtonContainer,
  ScheduleButton,
  MyAppointmentsButton,
  HighlightedTitle,
  HorizontalContainer,
} from "./Styles";
import CookieBanner from "../../components/commons/CookiesBanner/CookiesBanner";

export default function NewAppointmentPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const navigate = useNavigate();

  const timeSlots = [
    "10:00",
    "10:30",
    "10:45",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "15:00",
    "16:00",
    "16:30",
  ];

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      console.log("Agendamento realizado:", selectedDate, selectedTime);
    } else {
      alert("Selecione uma data e um horário!");
    }
  };

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowCookieBanner(false);
  };

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== "true") {
      setShowCookieBanner(true);
    }
  }, []);

  return (
    <Container>
      <HorizontalContainer>
        <HighlightedTitle>Novo agendamento</HighlightedTitle>
        <HighlightedTitle>Horários</HighlightedTitle>
      </HorizontalContainer>

      <Wrapper>
        <CalendarContainer>
          <CalendarFunction
            value={selectedDate}
            onChange={setSelectedDate}
            placeholder="Selecione a data"
            dateFormat="dd/mm/yy"
            color="#007BFF"
            error={false}
          />
        </CalendarContainer>

        <TimeSlotsContainer>
          {timeSlots.map((slot) => (
            <TimeSlotButton
              key={slot}
              onClick={() => handleTimeSelect(slot)}
              selected={selectedTime === slot}
            >
              {slot}
            </TimeSlotButton>
          ))}
        </TimeSlotsContainer>
      </Wrapper>

      <ButtonContainer>
        <ScheduleButton onClick={handleSchedule}>Agendar</ScheduleButton>
        <MyAppointmentsButton onClick={() => navigate("/meusagendamentos")}>
          Meus Agendamentos
        </MyAppointmentsButton>
      </ButtonContainer>

      {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} />}
    </Container>
  );
}
