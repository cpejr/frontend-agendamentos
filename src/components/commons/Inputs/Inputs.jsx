import React from "react";
import { StyledInput } from "./styles";

const Inputs = ({ type = "text", placeholder, ...props }) => {
  return <StyledInput type={type} placeholder={placeholder} {...props} />;
};

export default Inputs;