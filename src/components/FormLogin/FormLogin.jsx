import { useState } from "react"; 
import { Eye, EyeOff } from "lucide-react";
import Input from "../Inputs/Inputs";
import Button from "../BotaoConta/BotaoConta";
import ButtonGoogle from "../ButtonGoogle/ButtonGoogle";
import { ErrorMessage, FormContainer, InputWrapper, IconWrapper } from "./Styles";

const handleGoogleLogin = () => {
  alert("Login com Google ainda não implementado!");
};

export default function FormLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

    console.log("Form enviado:", formData);
    setFormData({ email: "", password: "" }); 
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputWrapper>
        <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />

        <div style={{ position: "relative", width: "100%" }}>
          <Input type={showPassword ? "text" : "password"} name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required />
          <IconWrapper onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </IconWrapper>
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
          <ButtonGoogle onClick={handleGoogleLogin} text="Fazer Login com o Google" />
        </div>

        <Button type="submit">ENTRAR</Button>
      </InputWrapper>
    </FormContainer>
  );
}
