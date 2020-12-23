import React from "react";
import "./style.css";
import ImageLogo from "../../../img/logo.JPG"

export const Footer = () => {
  return(
    <div className="footer__container">
          <div>
            <div className="footer__container-contact">
              <div><img src={ImageLogo}/></div>
              <div className="footer__container-contact-text">
                  <p>Прием заказов: +375 29 321 00 00, +375 33 321 00 00</p>
                  <p>E-mail: feedback@sushivesla.by</p>
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
                г.Минск, ул. Уманская, 54 ТЦ "Глобо" (пн- чт, вс 11.00-23.00,
                пт-сб круглосуточно)
              </p>
              <p>г.Минск, пр. Партизанский, 150а ТЦ "Момо" (10.00-23.00)</p>
              <p>
                г.Минск, пр. Победителей, 9 ТРЦ "Galleria Minsk" (10.00-22.00)
              </p>
            </div>
          </div>
          <div></div>
        </div>
  )
}