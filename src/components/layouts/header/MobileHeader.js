import React, { useState } from "react";
import ImageLogo from "../../../img/logo.png";
import ImageLogoSign from "../../../img/logo1.png";
import "./style.css";

const MobileHeader = (props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible)
  }
  return (
    <>
    <div className="mobile-header__container">
      <div className="header__container-logo">
        <div className="header__square-red">
          <img src={ImageLogoSign} alt="logo" />
        </div>
        <img className="header_logo" src={ImageLogo} />
      </div>
      <div className="menu__burger"  onClick={handleClick}>
        <div className="menu__burger-middle"></div>
      </div>

      {isMenuVisible ? (
        <div className="mobile-header__menu"> 
          <p>Меню</p>
          <p>Акции</p>
          <p>Новости</p>
          <p>О нас</p>
          <p>Карьера</p>
          <p>Отзывы</p>
        </div>
      ) : null}
      
    </div>
    <div className="mobile-header__line"></div>
    </>
  );
};

export { MobileHeader };
