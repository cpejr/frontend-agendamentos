import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./styles";

export default function Inputs({ type = "text", placeholder, ...props }) {
  return <StyledInput type={type} placeholder={placeholder} {...props} />;
}

Inputs.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};