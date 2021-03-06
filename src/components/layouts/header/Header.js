import React from "react";
import ImageLogo from "../../../img/logo.png";
import ImageLogoSign from "../../../img/logo1.png";
import Language from "../../../img/Language.png";
import User from "../../../img/User.png";
import Call from "../../../img/Call.png";
import "./style.css";
import Search from "../../../img/search.png";

export const Header = (props) => {
  const { setIsLocationModalVisible } = props;
  return (
    <header className="container_header">
      <div className="header-wrapper">
        <div className="header__container-logo">
          <div className="header__square-red">
            <img src={ImageLogoSign} alt="logo" />
          </div>
          <img className="header_logo" src={ImageLogo} />

          <p className="menu">Меню</p>
          <p className="menu">Акции</p>
          <p className="menu">Новости</p>
          <p className="menu">О нас</p>
          <p className="menu">Карьера</p>
          <p className="menu">Отзывы</p>
        </div>
        <div className="header_container-search">
          <div className="header_container-number">
            <a className="header__p-number" href="tel:+375293210000">
              <img className="header__img-call" src={Call} />
            </a>
            <a className="header__p-number" href="tel:+375293210000">
              <p className="header__p-number-tel">+375 (29) 321 00 00</p>
            </a>
          </div>
          <div className="header__container-input-img">
            <div className="header__container-input">
              <img className="header__img-search" src={Search} />
              <input className="header__input" placeholder="Поиск"></input>
            </div>
          </div>

          <img className="header__img" src={Language} />
          <img
            className="header__img-focus"
            src={User}
            onClick={() => setIsLocationModalVisible(true)}
          />
        </div>
        <div className="menu__burger">
          <div className="menu__burger-middle"></div>
        </div>
      </div>
      <div className="header__line"></div>
    </header>
  );
};
