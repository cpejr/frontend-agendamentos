import { useState } from "react"; 
import Input from "../Inputs/Inputs";
import Button from "../BotaoConta/BotaoConta";
import BotaoGoogle from "../BotaoGoogle/BotaoGoogle";
import { ErrorMessage, FormContainer } from "./Styles";

const handleGoogleLogin = () => {
    alert("Login com Google ainda não implementado!");
  };
export default function FormLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 
    setFormData({ email: "", password: ""}); 
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
      <Input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div>
      <BotaoGoogle onClick={handleGoogleLogin} />
     </div>
      <Button type="submit">ENTRAR</Button>
    </FormContainer>
  );
}