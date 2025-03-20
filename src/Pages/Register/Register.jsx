import { Container, Title, P } from "./Styles";
import AuthForm from "../../components/features/Authform/Authform"; // Caminho para o novo componente

function Register() {
    return (
        <Container>
            <Title>CRIAR CONTA</Title>
            <AuthForm isRegister={true} />
            <P> Já tem uma conta? <a href="/login">Acesse sua conta aqui</a></P>
        </Container>
    );
}

export default Register;
