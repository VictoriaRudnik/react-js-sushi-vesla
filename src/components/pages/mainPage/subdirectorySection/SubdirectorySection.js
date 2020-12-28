import React from "react";
import "./style.css";
import ImageNigiri from "../../../../img/nigiri.png";
import { MenuInfo } from "./menuInfo/MenuInfo";
import ImageBaner from "../../../../img/banner.png";
import ImageVector from "../../../../img/vector.png";
import { Footer } from "../../../layouts/footer/Footer";
import { MinusButton } from "../../../common/minusButton/index";
import { PlusButton } from "../../../common/plusButton/index";
import CartImage from "../../../../img/cart.png";

const menuItem = [
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90", id: 1 },
  { img: ImageNigiri, name: "Спайси текка маки", price: "2.90", id: 2 },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90", id: 3 },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90", id: 4 },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90", id: 5 },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90", id: 6 },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90", id: 7 },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90", id: 8 },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90", id: 9 },
  {
    img: ImageNigiri,
    name: "Нигири с тунцом опаленным",
    price: "2.90",
    id: 10,
  },
];

export const SubdirectorySection = (props) => {
  const { cartItems, addItemToCart, removeItemFromCart } = props;
  return (
    <>
    <div className="main-page__container-subdirectory">
      <div className="main-page__container-subdirectory-section">
        <div className="main-page__container-filters">
          <p className="main-page__subdirectory-text">Раздел подкаталога</p>
          <div className="main-page__div-subdirectory">
            <img
              className="main-page__img-subdirectory-filters"
              src={ImageVector}
            />
            <p className="main-page__p-subdirectory-text">Фильтры</p>
          </div>
        </div>
        <div className="main-page__container-subdirectory-item">
          {menuItem.map((item, index) => (
            <MenuInfo
              item={item}
              key={index}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
              cartItems={cartItems}
            />
          ))}
          <div className="main-page__img-subdirectory-item">
            <img className="main-page__img-subdirectory" src={ImageBaner} />
          </div>
        </div>
       
      </div>
      <div className="main-page__container-cart">
        <div className="main-page__cart-sticky">
          <div className="subdirectory__cart-text">
            <p className="subdirectory__p-cart-text">Корзина</p>
          </div>
          <div className="cart-items-container">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-items__item-container">
                <div className="cart-items__item-name">
                  <div>{item.name}</div>
                  <div className="cart-items__item-weight">(10 шт - 554гр)</div>
                </div>
                <div className="cart-items__count-container">
                  <div className="cart-items__count-price">
                    {(item.price * item.count).toFixed(2)} руб
                  </div>
                  <div className="cart-items__container-counter">
                    <MinusButton
                      handleClick={() => {
                        removeItemFromCart(item);
                      }}
                    />
                    <p className="cart-items__p-counter">{item.count}</p>

                    <PlusButton
                      handleClick={() => {
                        addItemToCart(item);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button className="cart-order-button">
              {" "}
              <img
                className="cart-order-button-img"
                src={CartImage}
                alt="cart"
              />
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};
