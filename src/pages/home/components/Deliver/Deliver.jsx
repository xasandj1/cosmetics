import React from 'react';
import "./deliver.scss"
import { Bussines } from "../../../../assets/react-icon/Bussines"
import { Love } from "../../../../assets/react-icon/Love"
import { WithLove } from "../../../../assets/react-icon/WithLove"
import { Chat } from "../../../../assets/react-icon/Chat";

export const Deliver = () => {
    return (
        <section className='deliver'>
            <div className="container deliver__container">
                <div className="deliver__blog">
                    <Bussines />
                    <h3 className="deliver__title">Ethical business</h3>
                    <p className="deliver__txt">Only green beauty products.</p>
                </div>
                <div className="deliver__blog">
                    <Love />
                    <h3 className="deliver__title">Shipped free & with love</h3>
                    <p className="deliver__txt">On orders abouve $50.</p>
                </div>
                <div className="deliver__blog">
                    <WithLove />
                    <h3 className="deliver__title">Delivered in 1-3 days</h3>
                    <p className="deliver__txt">And packaged with love.</p>
                </div>
                <div className="deliver__blog">
                    <Chat />
                    <h3 className="deliver__title">Personalized experience</h3>
                    <p className="deliver__txt">Free consultations via email.</p>
                </div>
            </div>
        </section>
    );
}
