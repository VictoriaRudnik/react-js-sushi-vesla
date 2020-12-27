import React from "react";
import './style.css'

export const PlusButton = (props) => {
  const { handleClick } = props;
  return (
    <div className="menu-info__button-wrapper">
      <div className="menu-info__button-line" onClick={handleClick}>
        <div className="menu-info__button-plus">+</div>
      </div>
    </div>
  );
};
