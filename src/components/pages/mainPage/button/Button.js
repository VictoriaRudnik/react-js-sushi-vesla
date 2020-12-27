import React from "react";
import "./style.css";

export const Button = (props) => {
  const { img, label } = props;

  return (
    <button className="main-page__button-coins">
      <div className="button_container-image"> <img className="main-page__img-coins" src={img}></img></div>
     
      <p className="button__label">{label}</p>
    </button>
  );
};
