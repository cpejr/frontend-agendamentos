import React from "react";
import Slider from "react-slick";
import { StyledImage } from "./Styles";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { hello } from "../../Assets";

const Carrossel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: "70%", height: "100%", marginTop: "25px", overflow: "hidden" }}>
      <Slider {...settings}>
        <div>
          <StyledImage src= {hello} alt="slide 1" />
        </div>
        <div>
          <StyledImage src= {hello} alt="slide 2" />
        </div>
        <div>
          <StyledImage src= {hello} alt="slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrossel;