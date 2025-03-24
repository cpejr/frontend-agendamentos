import { Container, Titulo } from "./Styles";
import FormLogin from "../../components/FormLogin/FormLogin";

function Login() {
    return (
        <Container>
            <Titulo>ACESSAR CONTA</Titulo>
            <FormLogin />
        </Container>
    );
}

export default Login;