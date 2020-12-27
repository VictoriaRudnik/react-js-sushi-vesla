import React from "react";
import "./style.css";
import { ImageWithLazyLoad } from "../../../../ImageWithLazyLoad";
import { PlusButton } from "../../../../common/plusButton";
import { MinusButton } from "../../../../common/minusButton";

export const MenuInfo = (props) => {
  const {
    item,
    item: { img, name, price },
    removeItemFromCart,
    addItemToCart,
    cartItems,
  } = props;

  const itemFromCart = cartItems.find((cartItem) => cartItem.id === item.id);

  return (
    <div className="main-page__subdirectory-item">
      <ImageWithLazyLoad
        image={{ src: img, alt: "image", width: "170px", height: "170px" }}
      />
      <p className="main-page__item-text">{name}</p>
      <p className="menu-info__p-price">
        <span className="menu-info__span-price">{price}</span> руб. за порцию
        (1шт)
      </p>
      <div className="menu-info__container-counter">
        <MinusButton
          handleClick={() => {
            removeItemFromCart(itemFromCart || item);
          }}
        />
        <p className="menu-info__p-counter">{itemFromCart?.count || 0}</p>
        <PlusButton handleClick={() => addItemToCart(itemFromCart || item)} />
      </div>
    </div>
  );
};
