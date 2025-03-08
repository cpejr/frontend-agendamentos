import { StyledButton, ButtonContainer } from "./Styles";
import React from "react";


const Button = ({ children, ...props }) => {
    return (
      <ButtonContainer>
        <StyledButton {...props}>{children}</StyledButton>
      </ButtonContainer>
    );
  };

export default Button;
