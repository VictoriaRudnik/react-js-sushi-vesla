import React from "react";
import "./style.css";

export const MenuInfo = (props) => {
  const { img, label } = props;
  return (
    <div className="menu-info__container">
      <img className="menu-info__img" src={img} alt="menu" />
      <p className="menu-info__label">{label}</p>
    </div>
  );
};
