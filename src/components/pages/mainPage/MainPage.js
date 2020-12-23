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
import Promocode from "../../../img/discount.png";
import CoinsImage from "../../../img/coins.JPG";
import PresentImage from "../../../img/present.JPG";
import { Button } from "./button/Button";
import ImageDinner from "../../../img/menuDinner.png";
import { MenuInfo } from "./menuInfo/MenuInfo";
import ImageMaki from "../../../img/maki.png";
import ImageUraMaki from "../../../img/uraMaki.png";
// import ImageNigiri from "../../../img/nigiri.png";
import {SubdirectorySection} from "./subdirectorySection/SubdirectorySection"


export const MainPage = () => {
  const sliderSettings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    //variableWidth: true,
    className: "carousel--container",
  };
  const menuInfo = [
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageMaki, label: "Маки" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageUraMaki, label: "Ура маки" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
  ];

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
          <img className="main-page__img-promocode" src={Promocode} />
          <p className="main-page__p-promocode">Промокод</p>
        </div>
        <div className="main-page__container-coins">
          <Button img={CoinsImage} label="Суши-койны" />
          <Button img={PresentImage} label="Подарки" />
        </div>
      </div>
      <div className="main-page__container-products">
        {menuInfo.map((item) => (
          <MenuInfo img={item.img} label={item.label} />
        ))}
      </div>
      <SubdirectorySection />
     
    </div>
  );
};
