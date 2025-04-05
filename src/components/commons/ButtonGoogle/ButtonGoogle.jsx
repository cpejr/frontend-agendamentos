import { Styled } from "./Styles";
import googleIcon from "../../../Assets/googleicon.png";
import PropTypes from "prop-types";

function ButtonGoogle({ onClick, action = "login" }) {
  const buttonTexts = {
    login: "Entrar com Google",
    register: "Cadastrar com Google",
    continue: "Continuar com Google",
  };

  return (
    <Styled onClick={onClick}>
      <img src={googleIcon} alt="Google Logo" />
      {buttonTexts[action]}
    </Styled>
  );
}

ButtonGoogle.propTypes = {
  onClick: PropTypes.func.isRequired,
  action: PropTypes.oneOf(["login", "register", "continue"]),
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

ButtonGoogle.defaultProps = {
  action: "login",
  imgSrc: googleIcon,
  imgAlt: "Google Logo",
};

export default ButtonGoogle;