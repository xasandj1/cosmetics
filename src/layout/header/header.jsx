import React from "react";
import { Logo } from "../../assets/react-icons/logo";
import { links } from "./data";
import { HeaderButtons } from "./components/header-buttons/header-buttons";
import { Link } from "react-router-dom";
import "./scss/header.scss"

export const Header = () => {
  return (
    <header className="header">
      <div className="container box">
        <Logo />
        <ul className="header__list">
          {links.map((item) => (
            <Link className="header__link" key={item.path} to={item.path}>
              {item.name}
            </Link>
          ))}
        </ul>
        <HeaderButtons />
      </div>
    </header>
  );
};
