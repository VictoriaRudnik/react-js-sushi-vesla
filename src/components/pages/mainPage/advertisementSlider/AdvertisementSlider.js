import React from "react";
import "./style.css";
import SliderImage from "../../../../img/slider.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AdvertisementSlider = () => {
  const sliderSettings = {
    centerMode: true,
    centerPadding: "132px",
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    className: "carousel--container",
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
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
