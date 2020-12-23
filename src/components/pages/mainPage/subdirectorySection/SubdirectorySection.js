import React from "react";
import "./style.css";
import ImageNigiri from "../../../../img/nigiri.png";
import { MenuInfo } from "./menuInfo/MenuInfo";
import ImageBaner from "../../../../img/banner.png";
import ImageVector from "../../../../img/vector.png";
import {Footer} from "../../../layouts/footer/Footer"

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
        <Footer />
      </div>
        <div className="main-page__container-cart">
          <div className="main-page__cart-sticky">
            <div className="subdirectory__cart-text">
              <p className="subdirectory__p-cart-text">Корзина</p>
            </div>
            <div className="cart-items-container">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-items__item-container">
                  <div className="cart-items__item-name">{item.name}</div>
                  <div className="cart-items__count-container">
                    <div>{(item.price * item.count).toFixed(2)} руб</div>
                    <div className="cart-items__container-counter">
                      <button
                        className="cart-items__button-plus"
                        onClick={() => {
                          removeItemFromCart(item);
                        }}
                      >
                        -
                      </button>
                      <p className="cart-items__p-counter">{item.count}</p>
                      <button
                        className="cart-items__button-minus"
                        onClick={() => addItemToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button className="cart-order-button">Оформить заказ</button>
            </div>
          </div>
        </div>
    </div>
  );
};
