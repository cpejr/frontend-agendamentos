import { Container} from "./Styles";
import Carrossel from "../../components/Carrossel/Carrossel";
import Categorias from "../../components/Categorias/Categorias";
import { Profissionais } from "../../components";
import { Titulo } from "../../components";
import { TituloProfissionais } from "../../components";

function Home () {
  return (
    <Container>

            <Carrossel /> 

        <Titulo text="CATEGORIAS"/>
        <TituloProfissionais text="PROFISSIONAIS"/>
        <Categorias />
        <Profissionais />
    </Container>
  );
}

export default Home;