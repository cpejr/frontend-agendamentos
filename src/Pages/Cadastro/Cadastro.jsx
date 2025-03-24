import { Container, Titulo } from "./Styles";
import FormCadrasto from "../../components/FormCadrasto/formCadrasto";

function Cadastro() {
    return (
        <Container>
            <Titulo>CRIAR CONTA</Titulo>
            <FormCadrasto />
        </Container>
    );
}

export default Cadastro;
