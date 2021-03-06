import React, { useState } from "react";
import "./style.css";
import { Header } from "../../layouts/header/Header";
import { MobileHeader } from "../../layouts/header/MobileHeader";
import SearchGroup from "../../../img/search-group.png";
import Clock from "../../../img/clock.png";
import Bike from "../../../img/bike.png";
import { BlockInfo } from "./blokInfo/BlockInfo";
import Promocode from "../../../img/discount.png";
import CoinsImage from "../../../img/coins.JPG";
import PresentImage from "../../../img/present.JPG";
import { Button } from "./button/Button";
import ImageDinner from "../../../img/menuDinner.png";
import { MenuInfo } from "./menuInfo/MenuInfo";
import ImageMaki from "../../../img/maki.png";
import ImageUraMaki from "../../../img/uraMaki.png";
import { SubdirectorySection } from "./subdirectorySection/SubdirectorySection";
import { AdvertisementSlider } from "./advertisementSlider/AdvertisementSlider";
import { Modal } from "../../common/modal";
import { ImageWithLazyLoad } from "../../ImageWithLazyLoad";
import ImageCar from "../../../img/car.JPG";
import { useWindowSize } from "../../../hooks/useWindowSize";

export const MainPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLocationModalVisible, setIsLocationModalVisible] = useState(false);
  const { width } = useWindowSize();
  
  const addItemToCart = (item) => {
    const isItemAlreadyInCart = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (isItemAlreadyInCart) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            count: cartItem.count + 1,
          };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        ...item,
        count: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeItemFromCart = (item) => {
    if (item.count > 1) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            count: cartItem.count - 1,
          };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    }
  };

  const menuInfo = [
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageMaki, label: "Маки" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageUraMaki, label: "Ура маки" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
    { img: ImageDinner, label: "Обеденное меню" },
  ];

  return (
    <>
      {width <= 850 ? (
        <MobileHeader />
      ) : (
        <Header setIsLocationModalVisible={setIsLocationModalVisible} />
      )}
      <AdvertisementSlider />
      <div className="main-page__container-information">
        <div className="main-page__container-input-img">
          <div className="main-page__container-input">
            <img className="main-page__img" src={SearchGroup} />
            <input
              className="main-page__input"
              placeholder="Выберите адрес доставки или выберите точку самовывоза"
            ></input>
          </div>
        </div>
        <div className="main-page__container-delivery">
          <BlockInfo
            img={Clock}
            deliveryType="Самовывоз"
            deliveryTime="20 мин"
          />
          <BlockInfo img={Bike} deliveryType="Доставка" deliveryTime="60 мин" />
          <Button img={Promocode} label="Промокод" />
          <Button img={CoinsImage} label="Суши-койны" />
          <Button img={PresentImage} label="Подарки" />
        </div>
      </div>
      <div className="main-page__container-products">
        {menuInfo.map((item, index) => (
          <MenuInfo img={item.img} label={item.label} key={index} />
        ))}
      </div>
      <SubdirectorySection
        cartItems={cartItems}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
      />

      <Modal
        isVisible={isLocationModalVisible}
        setIsVisible={setIsLocationModalVisible}
        title={"Ваша локация"}
      >
        <div className="main-page__location-modal">
          <div>
            <img className="main-page__modal-img" alt="car" src={ImageCar} />
          </div>
          <div className="main-page__location-description">
            <div className="main-page__modal-text">Ваш Адрес:</div>
            <div className="main-page__modal-text-bold">
              ул.Тимирязева, 72/1
            </div>
            <div className="main-page__modal-text">Время доставки:</div>
            <div className="main-page__modal-text-bold">
              через 95 минут (в 12.28)
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
