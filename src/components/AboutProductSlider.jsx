import React from "react";
import { NavLink } from "react-router-dom";
import { CarouselCaption, CarouselItem } from "react-bootstrap";
// Bootstrp slider
import Carousel from "react-bootstrap/Carousel";

// Slider images
import SolitairesRing from "../Assets/SolitairesRing.webp";
import FlatDiscount from "../Assets/FlatDiscount.webp";
import DiamondDesign from "../Assets/DiamondDesign.jpg";

const AboutProductSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <NavLink>
            <img src={SolitairesRing} className="img-fluid" />
          </NavLink>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <NavLink>
            <img src={FlatDiscount} className="img-fluid" />
          </NavLink>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <NavLink>
            <img src={DiamondDesign} className="img-fluid" />
          </NavLink>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AboutProductSlider;
