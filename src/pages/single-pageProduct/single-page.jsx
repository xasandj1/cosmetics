import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { cards } from "../Products/components/data";
import style from "./single-page.module.scss";
import { XIcon } from "../../assets/react-icon/x-icon";
export const SinglePage = () => {
  const { id } = useParams();
  let [count, setCount] = React.useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const rotate=()=>{
   
  }
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const product = cards.find((item) => item.id === parseInt(id));
  console.log(product);
  return (
    <section className={style.singlePage_hero}>
      <div className="container">
        <div className={style.content_box}>
          <div className={style.box}>
            <div className={style.angry_grid}>
              <img
                className={style.item0}
                src={product.imgSecondary[0]}
                alt={product.title}
              />
              <img
                className={style.item1}
                src={product.imgSecondary[1]}
                alt={product.title}
              />
              <img
                className={style.item2}
                src={product.imgSecondary[2]}
                alt={product.title}
              />
              <img
                className={style.item3}
                src={product.img}
                alt={product.title}
              />
            </div>
            <div></div>
          </div>
          <div className={style.content_text}>
            <h2 className={style.title}>{product.title}</h2>
            <div className={style.text_box}>
              <span>${product.price}</span>
              <p className={style.text}> ${(product.price * 0.7).toFixed(2)}</p>
            </div>
            <p className={style.desc}>{product.desc}</p>
            <div className={style.type_box}>
              <a href="#" className={style.type}>
                {product.type[0]} ml
              </a>
              <a href="#" className={style.type}>
                {product.type[1]} ml
              </a>
            </div>
            <div className={style.button_box}>
              <div className={style.btnBox}>
                <button className={style.btn} onClick={increment}>
                  +
                </button>
                <p className={style.count}>{count}</p>
                <button className={style.btn} onClick={decrement}>
                  -
                </button>
              </div>
              <button className={style.addBtn}>Add to cart</button>
            </div>
            <p className={style.tags}>Tags:{product.tags}</p>
            <div>
              <div onClick={rotate} className={style.accardion}>
                <p>Description</p>
                <a className={style.Xarrow} href="#"><XIcon /></a>
              </div>
              <p>{product.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
