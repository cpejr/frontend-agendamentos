import { Container, ContainerCarousel } from "./Styles";
import  DemoCarrossel  from "../../components/Carrossel/Carrossel";
import Categorias from "../../components/Categorias/Categorias";
import { Profissionais } from "../../components";

function Home (){

return(
    <Container>
        <Categorias/>
        <Profissionais/>
    </Container>
)
}

export default Home;