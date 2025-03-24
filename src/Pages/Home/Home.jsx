import { Container, ContainerCarrossel, ContainerIcones} from "./Styles";
import Carrossel from "../../components/Carrossel/Carrossel";
import Categorias from "../../components/Categorias/Categorias";
import { Profissionais } from "../../components";
import { Titulo } from "../../components";
import { TituloProfissionais } from "../../components";

function Home () {
  return (
    <Container>
        <ContainerCarrossel>
          <Carrossel /> 
        </ContainerCarrossel>
        <ContainerIcones>
        <Titulo text="CATEGORIAS"/>
        <TituloProfissionais text="PROFISSIONAIS"/>
        <Categorias />
        <Profissionais />
        </ContainerIcones>
        
    </Container>
  );
}

export default Home;