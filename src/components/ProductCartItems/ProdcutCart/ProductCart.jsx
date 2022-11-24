import React from "react";
import "./ProductCart.css";
import { Link } from "react-router-dom";

function ProductCart(props) {

  
    
  const sendFrom = () => {
    let productInfo = {
        "name": props.name,
        "price": props.price

    }

    props.setFrom(productInfo)
  }

  return (
    <div className="wrapper">
      <div className="product_details">
        <div className="product-images">
          <img
            src={props.img}
            alt=""
          />
        </div>
        <div className="product-info">
          <div className="prodcut-title">
            <h1>{props.name}</h1>
          </div>
          <div className="product-price">
            <p>Цена: {props.price}</p>
          </div>
          <div className="product-stock">
            <p>Доступность: <b className="avibile">В продаже</b></p>
          </div>
          <div className="product-information">
            <p className="info">Описание товара не доступно</p>
          </div>
          <div className="product-buttons">
            <Link to="/paymentForm">
              <button onClick={sendFrom} className="button">В корзину</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
