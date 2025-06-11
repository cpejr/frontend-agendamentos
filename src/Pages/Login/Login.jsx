import { Container, Title, P } from "./Styles";
import AuthForm from "../../components/features/Authform/Authform";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    return (
        <Container>
            <Title>ACESSAR CONTA</Title>
             <AuthForm isRegister={false} />
            <P>
                Don't have an account?
                <a 
                    onClick={() => navigate("/register")} // Navegação via onClick
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    Sign up here
                </a>
                 </P>         
        </Container>
    );
}

export default Login;