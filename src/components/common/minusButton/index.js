import React from "react";
import './style.css'

export const MinusButton = (props) => {
  const { handleClick } = props;
  return (
    <div className="menu-info__button-wrapper">
      <div className="menu-info__button-line" onClick={handleClick}>
        <div className="menu-info__button-minus">-</div>
      </div>
    </div>
  );
};
