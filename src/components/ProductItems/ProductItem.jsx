import './ProductItem.css';
import star_Img from "./images/star.png"
import heart_Img from "./images/heart.png"
import smile_Img from "./images/smile.png"
import tablet_Img from "./images/tablet.png"
import shopingCart_Img from "./images/shopping-cart.png"
import { useState } from 'react';
import {useTelegram} from "../../hooks/useTelegram"  
import {Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import ProductCartItems from '../ProductCartItems/ProductCartItems';


function ProductItem(props) {
    const {tg,queryId} = useTelegram();


    const onAdd = () => {
        alert(
            `Цена ${props.price} \nТовар ${props.name}`
        )
        tg.MainButton.show();
        


    }


    return (
        <div className="main__itemRow">
            <div className="main__item">
                <div className="main__iTop">
                    <div className="star-box">
                        <img src={star_Img} alt="" />
                    </div>
                    <div className="main__categori">
                        <span>{props.delivery}</span>
                    </div>
                    <img className="heart" src={heart_Img} alt="" />
                </div>
                <div className="main__iCenter">
                    <div className="main__iInfo">
                        <div className="main__iL">
                            <span>{props.credit}</span>
                            <p>Кредит</p>
                        </div>
                        <div className="main__iL">
                            <img src={smile_Img} alt="" />
                            <p>Бонус:{props.bonuce}</p>
                        </div>
                    </div>
                    <div className="main__image">
                        <img src={props?.img} alt="" />
                    </div>
                </div>
                <div className="main__iDownCenter">
                    <span>{props.name}</span>
                    <div className="main__star">

                    </div>
                </div>
                <div className="main__iBottom">
                    <div className="main__top">
                        <span>{props.price}</span>
                        <p><img src={tablet_Img} alt="" />{props.price_moth} в месяц</p>
                    </div>
                    <div className="main__bottom">
                        <a href={props.link} target={'_blank'}><button className="buy">Купить <br />один клик</button></a>
                        <Link to="/paymentForm" ><button onClick={onAdd} className="cart"><img src={shopingCart_Img} alt=""/></button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductItem;
