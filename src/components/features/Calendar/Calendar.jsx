import React from "react";
import PropTypes from "prop-types";
import { Calendar } from "primereact/calendar";
import { Container, StyledCalendar } from "./Styles";

export default function CalendarFunction({
  value,
  onChange,
  error,
  color,
  placeholder,
  dateFormat,
}) {
  return (
    <Container>
      <StyledCalendar
        inline
        value={value}
        onChange={(e) => onChange(e.value)}
        dateFormat={dateFormat || "dd/mm/yy"}
        placeholder={placeholder}
        className={error ? "error-calendar" : ""}
        style={{
          borderColor: error ? "red" : color || "#000",
          width: "100%",
          minHeight: "320px",
          backgroundColor: "#dcefff",
          borderRadius: "12px",
          padding: "12px",
        }}
      />
    </Container>
  );
}

CalendarFunction.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  dateFormat: PropTypes.string,
};
