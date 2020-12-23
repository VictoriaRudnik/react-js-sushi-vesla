import React from "react";
import "./style.css"

export const BlockInfo = (props) => {
  const { img, deliveryType, deliveryTime } = props;
  return (
    <div className="main-page__container-delivery-item">
      <div className="main-page__img-delivery">
        <img src={img}></img>
      </div>
      <div className="main-page_text-delivery">
    <div><p className="main-page_p-delivery">{deliveryType}</p></div>
     <div><p className="main-page_p-delivery">{deliveryTime}</p></div>  
      </div>
    </div>
  );
};
