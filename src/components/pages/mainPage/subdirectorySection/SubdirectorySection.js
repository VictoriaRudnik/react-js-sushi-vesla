import React from "react";
import "./style.css";
import ImageNigiri from "../../../../img/nigiri.png";
import { MenuInfo } from "./menuInfo/MenuInfo";
import ImageBaner from "../../../../img/banner.png";

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
          <p>Фильтры</p>
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
      </div>
      <div className="main-page__container-basket"></div>
    </div>
  );
};
