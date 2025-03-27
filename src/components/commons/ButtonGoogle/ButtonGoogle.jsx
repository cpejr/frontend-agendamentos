import { GoogleButton } from "./Styles";
import googleicon from "../../../Assets/googleicon.png";
import PropTypes from "prop-types";

export default function ButtonGoogle({ onClick, action = "login" }) {
  const buttonTexts = {
    login: "Entrar com Google",
    register: "Cadastrar com Google",
    continue: "Continuar com Google",
  };

  return (
    <GoogleButton onClick={onClick}>
      <img src={googleicon} alt="Google Logo" />
      {buttonTexts[action] || "Entrar com Google"}
    </GoogleButton>
  );
}

ButtonGoogle.propTypes = {
  onClick: PropTypes.func.isRequired,
  action: PropTypes.oneOf(["login", "register", "continue"]),
};

