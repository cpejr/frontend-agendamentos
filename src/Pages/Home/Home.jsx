import { Container, ContainerCarousel } from "./Styles";
import  DemoCarrossel  from "../../components/features/Carrossel/Carrossel";
import Category from "../../components/features/Category/Category";
import { Profissionais } from "../../components";

function Home (){

return(
    <Container>
        <Category/>
        <Profissionais/>
    </Container>
)
}

export default Home;