import React from "react";
import "./style.css";
import {ImageWithLazyLoad} from "../../../../ImageWithLazyLoad"


export const MenuInfo = (props) => {
  const {
    item,
    item: { img, name, price },
    removeItemFromCart,
    addItemToCart,
    cartItems,
  } = props;

  const itemFromCart = cartItems.find((cartItem) => cartItem.id === item.id);

  //const image = {img: SliderImage, alt: "image", width: "100%"}
  return (
    <div className="main-page__subdirectory-item">
      {/* <img className="menu-info__img" src={img} /> */}
      <ImageWithLazyLoad image={{src:img, alt: "image", width: "100%",height: "170px"}}/>
      <p className="main-page__item-text">{name}</p>
      <p className="menu-info__p-price">
        <span className="menu-info__span-price">{price}</span> руб. за порцию
        (1шт)
      </p>
      <div className="menu-info__container-counter">
        <button
          className="menu-info__button-plus"
          onClick={() => {
            removeItemFromCart(itemFromCart || item);
          }}
        >
          -
        </button>
        {/* <img className="menu-info__button-counter" src={ImageButtonMinus}/> */}
        <p className="menu-info__p-counter">{itemFromCart?.count || 0}</p>
        <button
          className="menu-info__button-minus"
          onClick={() => addItemToCart(itemFromCart || item)}
        >
          +
        </button>
      </div>
    </div>
  );
};
