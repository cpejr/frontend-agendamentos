import { Container, Titulo, P} from "./Styles";
import FormCadrasto from "../../components/FormCadrasto/formCadrasto";

function Cadastro() {
    return (
        <Container>
            <Titulo>CRIAR CONTA</Titulo>
            <FormCadrasto />
            <P> Ja tem uma conta? <a href="/login">Acesse sua conta aqui</a></P>
        </Container>
    );
}

export default Cadastro;
