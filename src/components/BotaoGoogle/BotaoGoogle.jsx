import { GoogleButton } from "./styles";

export default function BotaoGoogle({ onClick }) {
  return (
    <GoogleButton onClick={onClick}>
      <img src="/google-icon.png" alt="Google Logo" />
      Cadrastar com a Google
    </GoogleButton>
  );
}
