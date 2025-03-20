import { Container, Titulo, P} from "./Styles";
import FormLogin from "../../components/FormLogin/FormLogin";

function Login() {
    return (
        <Container>
            <Titulo>ACESSAR CONTA</Titulo>
            <FormLogin />
            <P> Não possui uma conta? <a href="/cadastro">Crie sua conta aqui</a></P>
        </Container>
    );
}

export default Login;