import { Container, Title, P, ConteinerForm } from "./Styles";
import AuthForm from "../../components/features/Authform/Authform";

function Login() {
    return (
        <Container>
            <Title>ACESSAR CONTA</Title>
            <ConteinerForm> 
                  <AuthForm isRegister={false} />
            </ConteinerForm>
            <P> Não tem uma conta? <a href="/register">Crie sua conta aqui</a></P>         
        </Container>
    );
}

export default Login;