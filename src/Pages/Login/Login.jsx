import { Container, Title } from "./Styles";
import AuthForm from "../../components/features/Authform/Authform";

function Login() {
    return (
        <Container>
            <Title>ACESSAR CONTA</Title>
            <AuthForm isRegister={false} />
        </Container>
    );
}

export default Login;