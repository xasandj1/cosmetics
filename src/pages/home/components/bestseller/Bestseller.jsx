import React from 'react';
import "./bestseller.scss"
import { Cards } from '../cards/Cards';
import { LeftSlider } from '../../../../assets/react-icon/LeftSlider';
import { RightSlider } from '../../../../assets/react-icon/RightSlider';

export const Bestseller = () => {
  return (
    <section className="bestseller">
      <div className="container bestseller__container">
        <div className="bestseller__top">
          <h2 className="bestseller__title">Our bestsellers</h2>
        </div>
        <div className="bestseller__bottom">
          <div className="bestseller__cards">
            {Cards.map((item) => (
              <div className='bestseller__info'>
                <img src={item.img} alt="" className='bestseller__img'/>
                <h4 className="bestseller__info__title">{item.title}</h4>
                <p className="bestseller__info__txt"><span>{item.price}</span> <span>{item.risePrice}</span></p>
              </div>
            ))}
          </div>
          <div className="bestseller__show">
            <button className="show__btn">Shop All</button>
          </div>
          <button className="left__btn"><LeftSlider /></button>
          <button className="right__btn"><RightSlider /></button>
        </div>
      </div>
    </section>
  );
}

