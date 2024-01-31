import React from 'react';
import MoreGirl from "../../../../assets/img/moreGirl.png";
import Morning from "../../../../assets/img/morning.png"
import Mirror from "../../../../assets/img/mirror.png"
import Cosmetics from "../../../../assets/img/cosmetics.png"
import "./blog.scss"
import { LeftSlider } from '../../../../assets/react-icon/LeftSlider';
import { RightSlider } from '../../../../assets/react-icon/RightSlider';

export const Blog = () => {
    return (
        <section className="blog">
            <div className="container blog__container">
                <div className="blog__top">
                    <h2 className="blog__title">Blogs</h2>
                </div>
                <div className="blog__bottom">
                    <div className="blog__cards">
                        <img src={MoreGirl} alt="" />
                        <h5 className="blog__cards__title">Beauty <span className='blog__span'>May 2, 2021</span></h5>
                        <p className="blog__cards__txt">Some beaty secrets from our editor in chief</p>
                    </div>
                    <div className="blog__cards">
                        <img src={Morning} alt="" />
                        <h5 className="blog__cards__title">Beauty <span className='blog__span'>May 2, 2021</span></h5>
                        <p className="blog__cards__txt">Some beaty secrets from our editor in chief</p>
                    </div>
                    <div className="blog__cards">
                        <img src={Mirror} alt="" />
                        <h5 className="blog__cards__title">Beauty <span className='blog__span'>May 2, 2021</span></h5>
                        <p className="blog__cards__txt">Some beaty secrets from our editor in chief</p>
                    </div>
                    <div className="blog__cards">
                        <img src={Cosmetics} alt="" />
                        <h5 className="blog__cards__title">Beauty <span className='blog__span'>May 2, 2021</span></h5>
                        <p className="blog__cards__txt">Some beaty secrets from our editor in chief</p>
                    </div>
                    <button className="left__btn"><LeftSlider /></button>
                    <button className="right__btn"><RightSlider /></button>
                </div>
            </div>
        </section>
    );
}
