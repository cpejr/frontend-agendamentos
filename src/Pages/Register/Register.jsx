import { Container, Title, P } from "./Styles";
import FormSubmit from "../../components/features/FormSubmit/FormSubmit";
import ButtonEnter from "../../components/commons/ButtonCount/ButtonCount";
import ButtonGoogle from "../../components/commons/ButtonGoogle/ButtonGoogle";
import { registerSchema } from "./utils";

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