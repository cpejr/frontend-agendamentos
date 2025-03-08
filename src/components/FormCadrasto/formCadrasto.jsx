import { useState } from "react"; 
import Input from "../Inputs/Inputs";
import Button from "../BotaoConta/BotaoConta";
import BotaoGoogle from "../BotaoGoogle/BotaoGoogle";
import { ErrorMessage, FormContainer } from "./styles";

const handleGoogleLogin = () => {
    alert("Login com Google ainda não implementado!");
  };
export default function FormCadrasto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    setError(""); 
    setFormData({ name: "", email: "", password: "", confirmPassword: "" }); 
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
      <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
      <Input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required />
      <Input type="password" name="confirmPassword" placeholder="Confirme a Senha" value={formData.confirmPassword} onChange={handleChange} required />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div>
      <BotaoGoogle onClick={handleGoogleLogin} />
     </div>
      <Button type="submit">CADASTRAR</Button>
    </FormContainer>
  );
}
