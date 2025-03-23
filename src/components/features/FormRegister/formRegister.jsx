import { useState } from "react"; 
import Input from "../../commons/Inputs/Inputs";
import Button from "../../commons/ButtonCount/ButtonCount";
import BotaoGoogle from "../../commons/ButtonGoogle/ButtonGoogle";
import { ErrorMessage, FormContainer, InputWrapper, IconWrapper1, IconWrapper2, divButton } from "./styles";
import { Eye, EyeOff } from 'lucide-react';

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      <InputWrapper>
      <Input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
      <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
      <Input type={showPassword ? 'text' : 'password'} name="password" placeholder="Senha" value={formData.password}onChange={handleChange} required/>
      <IconWrapper1 onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </IconWrapper1>
      <Input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" placeholder="Confirme a Senha" value={formData.confirmPassword} onChange={handleChange} required />
      <IconWrapper2 onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      </IconWrapper2>
      </InputWrapper>
      <divButton>
      <BotaoGoogle onClick={handleGoogleLogin} text="Cadastar com o Google"/>
     </divButton>
      <Button type="submit">CADASTRAR</Button>
    </FormContainer>
  );
}