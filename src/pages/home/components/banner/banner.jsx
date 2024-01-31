import React from "react";
import "./banner.scss"
import { Left } from "../../../../assets/react-icons/left";
import { Right } from "../../../../assets/react-icons/right";

export const Banner = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <h1 className="hero__title">Discover summer promotions</h1>
        <p className="hero__txt">Free sample and free shipping when you spend $50</p>
        <div className="hero__btns">
          <button className="hero__btn">Skincare</button>
          <button className="hero__btn btn">Shop All</button>
        </div>
        <button className="hero__left_btn"><Left/></button>
        <button className="hero__right_btn"><Right/></button>
        
      </div>
    </section>
  )
};
