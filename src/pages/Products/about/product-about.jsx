import React from "react";
import style from "./product-about.module.scss";
import { PrSelectIcon } from "../../../assets/react-icon/PrSelectIcon";
import { FilterBar } from "../components/filterBar";
import  {ProductCard} from "../components/product-card"
export const ProductAbout = () => {
  return (
    <section className={style.about}>
      <div className="container ">
       <div className={style.box_select}>
       <div className={style.text_content}>
            <p className={style.textDesc}>Home</p>
            <span>/</span>
            <p className={style.desc_text}>Shop All</p>
        </div>
        <div className={style.sorting_select__main}>
            <select className={style.sorting_select}>
              <option value="">Defoult sorting</option>
              <option value="Sort by popularity">Sort by popularity</option>
              <option value="Sort by average rating">
                Sort by average rating
              </option>
              <option value="Sort by latest">Sort by latest</option>
              <option value="Sort by price: low to high">
                Sort by price: low to high
              </option>
              <option value="Sort by price: high to low">
                Sort by price: high to low
              </option>
            </select>
            <div className={style.sorting_select__icon}>
              <PrSelectIcon />
            </div>
          </div>
       </div>
        <div className={style.box}>
          <div>
          <FilterBar/>
          </div>
          <div>
         <ProductCard/>
          </div>
        </div>
      </div>
    </section>
  );
};
