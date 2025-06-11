import { GoogleButton } from "./Styles";
import googleicon from "../../../Assets/googleicon.png";
import { useGoogleLogin } from "../../../services/useGoogleLogin";

export default function BotaoGoogle({ text = "Entrar com Google" }) {
  const { logGoogleUser, isLoading } = useGoogleLogin();

  return (
    <GoogleButton 
      onClick={logGoogleUser}
      disabled={isLoading}
      aria-label={isLoading ? "Processando login" : text}
    >
      <img 
        src={googleicon} 
        alt="Google Logo" 
        style={{ visibility: isLoading ? "hidden" : "visible" }} 
      />
      {isLoading ? "Autenticando..." : text}
    </GoogleButton>
  );
}