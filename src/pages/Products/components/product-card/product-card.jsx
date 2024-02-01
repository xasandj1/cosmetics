import React from "react";
import {cards} from "../data"
import { Pagination } from "../pagination";
import { Link } from "react-router-dom";

//// icons:
import { CardHeartIcon } from "../../../../assets/react-icon/card-heart-icon";
import { BagIcon } from "../../../../assets/react-icon/bag-icon";
import { EyesIcon } from "../../../../assets/react-icon/eyes-icon";
import  CardStyle from "./product-card.module.scss"
export const ProductCard = () => {
  return (
    <div>
      <ul className={CardStyle.cards_main}>
        {cards.map((item) => (
          <li className={CardStyle.cards_item} key={item.id}>
            <div className={CardStyle.cards_img__main}>
              <img className={CardStyle.cards_img} src={item.img} alt="img" />
              <div className={CardStyle.cards_review__icons}>
                <button className={CardStyle.cards_review__icons_item}>
                  <BagIcon />
                </button>
                <Link to={`/product/${item.id}`} className={CardStyle.cards_review__icons_item}>
                  <EyesIcon  />
                </Link>
                <button className={CardStyle.cards_review__icons_item}>
                  <CardHeartIcon />
                </button>
              </div>
            </div>
            <h2 className={CardStyle.cards_title}>{item.title}</h2>
            <strong className={CardStyle.cards_price}>$ {item.price}</strong>
          </li>
        ))}
      </ul>
      <Pagination />
    </div>
  );
};
