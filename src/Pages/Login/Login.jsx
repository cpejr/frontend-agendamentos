import { useLogin } from "../../hooks/login";
import FormSubmit from "../../components/features/FormSubmit/FormSubmit";
import { Title, Container, P, ErrorMessage, RegisterLink } from "./Styles";
import ButtonEnter from "../../components/commons/ButtonCount/ButtonCount";
import ButtonGoogle from "../../components/commons/ButtonGoogle/ButtonGoogle";
import { loginSchema } from "./utils";
import { useEffect, useState } from "react";
import CookieBanner from "../../components/commons/CookiesBanner/CookiesBanner";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/auth"; 

export default function LoginPage() {
    const [showCookieBanner, setShowCookieBanner] = useState(false);
    const navigate = useNavigate();
    const setToken = useAuthStore((state) => state.setToken); 

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (consent !== "true") {
            setShowCookieBanner(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem("cookieConsent", "true");
        setShowCookieBanner(false);
    };

    
    const handleNavigateToRegister = () => {
        navigate("/register");
    };
    
    const { mutate: loginUser, isLoading, error } = useLogin({
        onSuccess: (data) => {
            const { token, refreshToken } = data;

            setToken(token, refreshToken);

        },
        onError: (err) => {
            console.error("Erro no login:", err);
        },
    });

    const handleLogin = (formData) => {
        loginUser(formData);
    };

    const handleGoogleLogin = () => {
        alert("Login com Google ainda não implementado!");
    };

    const inputs = [
        { key: "email", type: "text", placeholder: "Digite seu e-mail" },
        { key: "password", type: "password", placeholder: "Digite sua senha" },
    ];

    return (
        <Container>
            <Title>Acessar Conta</Title>

            <FormSubmit inputs={inputs} onSubmit={handleLogin} schema={loginSchema}>
                {error && <ErrorMessage>{error.message}</ErrorMessage>}

                <ButtonEnter type="submit" disabled={isLoading}>
                    {isLoading ? "Carregando..." : "Entrar"}
                </ButtonEnter>

                <ButtonGoogle onClick={handleGoogleLogin} action="login" />
            </FormSubmit>

            <P>
                Não tem cadastro?{" "}
                <RegisterLink onClick={handleNavigateToRegister}>
                    Se registre aqui
                </RegisterLink>
            </P>

            {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} />}
        </Container>
    );
}
