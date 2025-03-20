import { GoogleButton } from "./Styles";
import googleicon from "../../../Assets/googleicon.png";

export default function BotaoGoogle({ onClick, text = "Entrar com Google" }) {
  return (
    <GoogleButton onClick={onClick}>
      <img src={googleicon} alt="Google Logo" />
      {text}
    </GoogleButton>
  );
}
