import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Styles";

function ButtonSchedule({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      Fazer novo agendamento
    </StyledButton>
  );
}

ButtonSchedule.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ButtonSchedule;
