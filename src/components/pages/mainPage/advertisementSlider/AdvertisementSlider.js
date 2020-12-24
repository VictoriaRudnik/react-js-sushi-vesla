import React from "react";
import "./style.css";
import SliderImage from "../../../../img/slider.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithLazyLoad } from "../../../ImageWithLazyLoad";

export const AdvertisementSlider = () => {
  const sliderSettings = {
    centerMode: true,
    centerPadding: "120px",
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    className: "carousel--container",
  };

  return (
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
  );
};
