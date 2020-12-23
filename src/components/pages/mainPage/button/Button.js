import React from "react";
import "./style.css";

export const Button = (props) => {

  const {img, label} = props

  return(
    <button className="main-page__button-coins">
    <img className="main-page__img-coins" src={img}></img>
    <p>{label}</p>
    </button>
  )
}