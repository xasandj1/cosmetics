import React from "react";
import { SearchIcon } from "../../../../assets/react-icons/search-icon";
import { Down } from "../../../../assets/react-icons/down";
import "./header-button.scss"
import { Heart } from "../../../../assets/react-icons/heart";

export const HeaderButtons = () => {
  return (
    <header className="header__btn">
      <button className="header__lang"><span className="header__span">En</span><Down className="header__down" /></button>
      <button className=""><SearchIcon /></button>
      <button><Heart /></button>
    </header>
  );
};
