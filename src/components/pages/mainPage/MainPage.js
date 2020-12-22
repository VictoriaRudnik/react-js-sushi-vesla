import React from "react";
import "./style.css";
import { Header } from "../../layouts/header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage from "../../../img/slider.png";

export const MainPage = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "carousel--container",
  };

  return (
    <div>
      <Header />
      <div className="carousel--wrapper">
        <Slider {...sliderSettings}>
          <div>
            <img className="carousel--item" src={SliderImage}></img>
          </div>
          <div>
            <img className="carousel--item" src={SliderImage}></img>
          </div>
          <div>
            <img className="carousel--item" src={SliderImage}></img>
          </div>
        </Slider>
      </div>
    </div>
  );
};
