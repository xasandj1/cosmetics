import React from "react";
import style from "./product-hero.module.scss";

export const ProductHero = () => {
  return (
    <section className={style.hero}>
      <div className="container">
        <div className={style.box}>
          <h2 className={style.title}>Carefully selected beauty products</h2>
          <p className={style.text}>
            Our team carefully selects only the best products that have
            toxic-free formulas and are not tested on animals.
          </p>
        </div>
      </div>
    </section>
  );
};
