import { useState } from "react"; 
import Input from "../Inputs/Inputs";
import Button from "../BotaoConta/BotaoConta";
import ButtonGoogle from "../ButtonGoogle/ButtonGoogle";
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

    if (!formData.email || !formData.password) {
      setError("Preencha todos os campos!");
      return;
    }

    // Aqui você pode chamar a API de autenticação

    console.log("Form enviado:", formData);
    setFormData({ email: "", password: ""}); 
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
      <Input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required />
      
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <ButtonGoogle onClick={handleGoogleLogin} text="Fazer Login com o Google" />
      </div>

      <Button type="submit">ENTRAR</Button>
    </FormContainer>
  );
}
