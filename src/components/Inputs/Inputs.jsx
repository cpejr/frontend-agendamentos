import React from "react";
import { StyledInput } from "./styles";

const Input = ({ type = "text", placeholder, ...props }) => {
  return <StyledInput type={type} placeholder={placeholder} {...props} />;
};

export default Input;