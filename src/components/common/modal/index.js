import React, { useState } from "react";
import "./style.css";

export const Modal = (props) => {
  const { isVisible, setIsVisible, children, title } = props;
  if (isVisible) {
    return (
      <div className="modal__container">
        <div className="modal__content">
          <div className="modal__header">
            <div />
            <div>{title}</div>
            <div onClick={() => setIsVisible(false)}>X</div>
          </div>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
