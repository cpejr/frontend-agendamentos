import { useLogin } from "../../hooks/login";
import FormSubmit from "../../components/features/FormSubmit/FormSubmit";
import { z } from "zod";
import { Title, Container, P } from "./Styles";
import ButtonEnter from "../../components/commons/ButtonCount/ButtonCount";
import ButtonGoogle from "../../components/commons/ButtonGoogle/ButtonGoogle";

const schema = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export default function LoginPage() {
    const { mutate: loginUser, isLoading, error } = useLogin({
        onSuccess: (data) => {
            console.log("Login bem-sucedido:", data);
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
            <FormSubmit inputs={inputs} onSubmit={handleLogin} schema={schema}>
            {error && <p style={{ color: "red" }}>{error.message}</p>}
                    <ButtonEnter type="submit" disabled={isLoading}>
                        {isLoading ? "Carregando..." : "Entrar"}
                    </ButtonEnter>
                    <ButtonGoogle onClick={handleGoogleLogin} action="login" />
            </FormSubmit>
            <P> Não tem cadrasto? Se registre <a href="/register"> aqui </a> </P>
        </Container>
    );
}


