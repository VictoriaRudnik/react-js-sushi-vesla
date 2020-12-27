import React from "react";
import "./style.css";

export const MenuInfo = (props) => {
  const { img, label } = props;
  return (
    <div className="menu-info__container">
      <div className="menu-info__container_img"><img className="menu-info__img" src={img} alt="menu" /></div>
      <div className="menu-info__container-label"><p className="menu-info__label">{label}</p> </div>
      
    </div>
  );
};
