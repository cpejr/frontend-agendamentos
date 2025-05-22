import { Carousel } from "react-responsive-carousel";
import { StyledImage } from "./Styles";
import { hello } from "../../../Assets";

export default function DemoCarrossel() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true} 
      interval={6000}
      infiniteLoop={true}
      dynamicHeight={false}
    >

      <StyledImage src="src\Assets\hello.jpg" alt="slide 1" />

      <StyledImage src="src\Assets\hello.jpg" alt="slide 2" />

      <StyledImage src="src\Assets\hello.jpg" alt="slide 3" />

    </Carousel>
  );
}