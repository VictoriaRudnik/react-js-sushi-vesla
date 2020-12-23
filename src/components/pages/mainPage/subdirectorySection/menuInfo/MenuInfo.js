import React from "react";
import "./style.css";
import ImageButtonMinus from "../../../../../img/minusButton.png"

export const MenuInfo = (props) => {

  const {img, name, price} = props
  return (
    <div className="main-page__subdirectory-item">
      <img className="menu-info__img" src={img} />
      <p className="main-page__item-text">{name}</p>
      <p className="menu-info__p-price">
        <span className="menu-info__span-price">{price}</span> руб. за порцию (1шт)
      </p>
      <div className="menu-info__container-counter">
        <button className="menu-info__button-plus">-</button> 
        {/* <img className="menu-info__button-counter" src={ImageButtonMinus}/> */}
        <p className="menu-info__p-counter">1</p>
        <button className="menu-info__button-minus">+</button>
      </div>
    </div>
  );
};
