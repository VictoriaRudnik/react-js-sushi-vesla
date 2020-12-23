import React from "react";
import "./style.css";

export const MenuInfo = (props) => {

  const {img, name, price} = props
  return (
    <div className="main-page__subdirectory-item">
      <img className="menu-info__img" src={img} />
      <p className="main-page__item-text">{name}</p>
      <p>
        <span>{price}</span> руб. за порцию (1шт)
      </p>
    </div>
  );
};
