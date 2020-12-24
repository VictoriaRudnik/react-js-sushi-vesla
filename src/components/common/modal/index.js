import React, { useState } from "react";
import "./style.css";
import ImageCloser from "../../../img/closer.png";

export const Modal = (props) => {
  const { isVisible, setIsVisible, children, title } = props;
  if (isVisible) {
    return (
      <div className="modal__container">
        <div className="modal__content">
          <div className="modal__header">
            <div />
            <div className="modal__title">{title}</div>
            <div className="modal__closer" onClick={() => setIsVisible(false)}>
              <img alt="close" src={ImageCloser} />
            </div>
          </div>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
