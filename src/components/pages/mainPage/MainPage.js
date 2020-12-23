import React from "react";
import "./style.css";
import { Header } from "../../layouts/header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage from "../../../img/slider.png";
import SearchGroup from "../../../img/search-group.png";
import Clock from "../../../img/clock.png";
import Bike from "../../../img/bike.png";
import { BlockInfo } from "./blokInfo/BlockInfo";
import Promocode from "../../../img/discount.png"
import CoinsImage from "../../../img/coins.JPG"
import PresentImage from "../../../img/present.JPG"

export const MainPage = () => {
  const sliderSettings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1.25,
    slidesToScroll: 1,
    speed: 500,
    //variableWidth: true,
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
          <div>
            <img className="carousel--item" src={SliderImage}></img>
          </div>
        </Slider>
      </div>
      <div className="main-page__container-information">
        <div className="main-page__container-input-img">
          <div className="main-page__container-input">
            <img className="main-page__img" src={SearchGroup} />
            <input
              className="main-page__input"
              placeholder="Выберите адрес доставки или выберите точку самовывоза"
            ></input>
          </div>
        </div>
        <div className="main-page__container-delivery">
          <BlockInfo
            img={Clock}
            deliveryType="Самовывоз"
            deliveryTime="20 мин"
          />
          <BlockInfo img={Bike} deliveryType="Доставка" deliveryTime="60 мин" />
        </div>
        <div className="main-page__container-promocode">
          <img className="main-page__img-promocode" src={Promocode}/>
          <p className="main-page__p-promocode">Промокод</p>
        </div>
        <div className="main-page__container-coins">
          <button className="main-page__button-coins">
            <img className="main-page__img-coins" src={CoinsImage}></img>
            <p>Суши-койны</p>
          </button>
          <button className="main-page__button-coins">
            <img className="main-page__img-coins" src={PresentImage}></img>
            <p>Подарки</p>
          </button>
        </div>
      </div>
    </div>
  );
};
