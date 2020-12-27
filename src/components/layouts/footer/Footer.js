import React from "react";
import "./style.css";
import ImageLogo from "../../../img/logo.png";
import ImageLogoSign from "../../../img/logo1.png";

export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container-first">
        <div className="footer__container-contact">
          <div className="footer__container-logo">
            <div className="footer__square-red">
              <img src={ImageLogoSign} alt="logo" />
            </div>
            <img className="footer_logo" src={ImageLogo} />
          </div>
          <div className="footer__container-contact-text">
            <p className="footer__p-contact-text">
              Прием заказов: +375 29 321 00 00, +375 33 321 00 00
            </p>

            <p className="footer__p-contact-text">
              E-mail: feedback@sushivesla.by
            </p>
          </div>
        </div>
        <div className="footer-address">
          <p>Адреса OOO “Кузница вкуса”:</p>
          <p className="footer-p-address">
            г.Минск, пр. Машерова, 78 (11.00-23.00)
          </p>
          <p>г.Минск, ул. Я. Коласа, 37 ТЦ "Айсберг" (круглосуточно)</p>
          <p>г.Минск, ул. Притыцкого, 83 (11.00-23.00)</p>
          <p>г.Минск, ул. Шафарнянская, 11 (11.00-23.00)</p>
          <p>
            г.Минск, ул. Уманская, 54 ТЦ "Глобо" (пн- чт, вс 11.00-23.00, пт-сб
            круглосуточно)
          </p>
          <p>г.Минск, пр. Партизанский, 150а ТЦ "Момо" (10.00-23.00)</p>
          <p>г.Минск, пр. Победителей, 9 ТРЦ "Galleria Minsk" (10.00-22.00)</p>
        </div>
        <div className="footer_container-div-text">
          Подробнее условия оплаты и доставки
        </div>
        <div className="footer_container-developer">
          <p className="footer_developer-text">© 2007- 2020 "СУШИ ВЕСЛА".</p>
          <p>Разработка сайта - Gik Media</p>
        </div>
      </div>
      <div className="footer__container-second">
        <div>
          <p className="footer__p-additional-text">ООО «Кузница Вкуса»</p>
          <p className="footer__p-additional-text">
            Зарегистрировано решением Минского районного исполнительного
            комитета от 25.05.2018г. в Едином государственном регистре
            юридических лиц и индивидуальных предпринимателей. Свидетельство о
            государственной регистрации юридического лица №193083807
          </p>
        </div>

        <p className="footer__p-additional-text">
          Интернет-магазин sushivesla.by зарегистрирован в Торговом реестре
          Республики Беларусь 14.01.2016 г. Регистрационный номер 301081. УНП
          190790821
        </p>
        <p className="footer__p-additional-text">
          Интернет-магазин takeaway.sushivesla.by зарегистрирован в Торговом
          реестре Республики Беларусь 05.03.2019 г. Регистрационный номер
          442605. УНП 193083807
        </p>
        <div>
          <p className="footer__p-address-text">
            Юридический и почтовый адрес:{" "}
          </p>
          <p className="footer__p-address-text">
            220036, г. Минск, ул. К. Либкнехта, 45-17а
          </p>
        </div>
      </div>
    </div>
  );
};
