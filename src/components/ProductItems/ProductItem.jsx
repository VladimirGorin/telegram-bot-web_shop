import './ProductItem.css';
import star_Img from "./images/star.png"
import heart_Img from "./images/heart.png"
import smile_Img from "./images/smile.png"
import tablet_Img from "./images/tablet.png"
import shopingCart_Img from "./images/shopping-cart.png"



function ProductItem(props) {

    return (
        <div className="main__itemRow">
            <div class="main__item">
                <div class="main__iTop">
                            <div class="star-box">
                                <img src={star_Img} alt="" />
                            </div>
                            <div class="main__categori">
                                <span>{props.delivery}</span>
                            </div>
                            <img class="heart" src={heart_Img} alt="" />

                </div>
                <div class="main__iCenter">
                    <div class="main__iInfo">
                        <div class="main__iL">
                            <span>{props.credit}</span>
                            <p>Кредит</p>
                        </div>
                        <div class="main__iL">
                            <img src={smile_Img} alt="" />
                            <p>Бонус:<br />{props.bonuce}</p>
                        </div>
                    </div>
                    <div class="main__image">
                        <img src={props?.img} alt="" />
                    </div>
                </div>
                <div class="main__iDownCenter">
                            <span>{props.name}</span>
                            <div class="main__star">

                            </div>
                </div>
                <div class="main__iBottom">
                            <div class="main__top">
                                <span>{props.price}</span>
                                <p><img src={tablet_Img} alt="" /> {props.price_moth} в месяц</p>
                            </div>
                            <div class="main__bottom">
                                <button class="buy"><a href={props.link}>Купить <br />один клик</a></button>
                                <button class="cart"><img src={shopingCart_Img} alt="" /></button>
                            </div>
                </div>
            </div>
        </div>

    );
}

export default ProductItem;
