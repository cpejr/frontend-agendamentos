import { Container, Title, P } from "./Styles";
import FormSubmit from "../../components/features/FormSubmit/FormSubmit";
import ButtonEnter from "../../components/commons/ButtonCount/ButtonCount";
import { z } from "zod";
import ButtonGoogle from "../../components/commons/ButtonGoogle/ButtonGoogle";

const registerSchema = z.object({
    nome: z.string()
      .min(3, "O nome deve ter pelo menos 3 caracteres")
      .max(50, "O nome não pode ter mais que 50 caracteres"),
    email: z.string()
      .email("E-mail inválido")
      .max(100, "O e-mail não pode ter mais que 100 caracteres"),
    senha: z.string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .max(20, "A senha não pode ter mais que 20 caracteres"),
    confirmarSenha: z.string()
  }).refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"]
  });

  export default function Register() {
    
    const handleRegister = (formData) => {
      console.log("Dados do formulário:", formData);
    };
    const handleGoogleCreate = () => {
        alert("Login com Google ainda não implementado!");
    };
  
    const inputs = [
      { key: "nome", type: "text", placeholder: "Digite seu nome completo" },
      { key: "email", type: "text", placeholder: "Digite seu e-mail" },
      { key: "senha", type: "password", placeholder: "Digite sua senha" },
      { key: "confirmarSenha", type: "password", placeholder: "Confirme sua senha" }
    ];
  
    return (
      <Container>
        <Title>Criar Conta</Title>
        <FormSubmit
          inputs={inputs}
          onSubmit={handleRegister}
          schema={registerSchema}>
          <ButtonEnter type="submit">Cadastrar</ButtonEnter>
          <ButtonGoogle onClick={handleGoogleCreate} action="register" />
        </FormSubmit>
         <P> Ja tem cadrasto? Faça login <a href="/login"> aqui </a> </P>
      </Container>
    );
  }