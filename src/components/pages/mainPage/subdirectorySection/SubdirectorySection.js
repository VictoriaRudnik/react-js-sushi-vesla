import React from "react";
import "./style.css";
import ImageNigiri from "../../../../img/nigiri.png";
import {MenuInfo} from "./menuInfo/MenuInfo"

const menuItem = [{img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
{img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
{img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
{img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
{img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
{img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
{img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
{img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
{img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" },
{img: ImageNigiri, name: "Нигири с тунцом опаленным", price: "2.90" }]

export const SubdirectorySection = () => {

  return(
    <div className="main-page__container-subdirectory">
        <div className="main-page__container-subdirectory-section">
          <div className="main-page__container-filters">
            <p className="main-page__subdirectory-text">Раздел подкаталога</p>
            <p>Фильтры</p>
          </div>
          <div className="main-page__container-subdirectory-item">
            {/* <div className="main-page__subdirectory-item">
              <img src={ImageNigiri} />
              <p className="main-page__item-text">Нигири с тунцом опаленным</p>
              <p>
                <span>2.90 </span> руб. за порцию (1шт)
              </p>
            </div> */}
            {menuItem.map((item) => 
            <MenuInfo img={item.img} name={item.name} price={item.price}/>)}
            
          </div>
        </div>
        <div className="main-page__container-basket"></div>
      </div>
  )
}