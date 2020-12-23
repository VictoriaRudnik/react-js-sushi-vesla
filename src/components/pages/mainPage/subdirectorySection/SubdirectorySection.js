import React from "react";
import "./style.css";
import ImageNigiri from "../../../../img/nigiri.png";
import { MenuInfo } from "./menuInfo/MenuInfo";
import ImageBaner from "../../../../img/banner.png";
import ImageVector from "../../../../img/vector.png";
import {Footer} from "../../../layouts/footer/Footer"

const menuItem = [
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
  { img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
];

export const SubdirectorySection = () => {
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
              img={item.img}
              name={item.name}
              price={item.price}
              key={index}
            />
          ))}
          <div className="main-page__img-subdirectory-item">
            <img className="main-page__img-subdirectory" src={ImageBaner} />
          </div>
        </div>
        <Footer />
      </div>
      <div className="main-page__container-basket">
        <div className="subdirectory__basket-text">
          <p className="subdirectory__p-basket-text">Корзина</p>
        </div>
      </div>
    </div>
  );
};
