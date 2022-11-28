import React, {useEffect} from "react";
import axios from "axios";
import "./GetPost.css"
import { useState } from "react";
import { Link } from "react-router-dom";

function GetPost(props) {
  const [post, setPost] = useState()


  useEffect(() => {
    async function fetchData() {
      const response = await axios.post(
        "http://192.168.1.106:3005/post",
        {}
      );

      const data = await response.data;
      console.log(data)
      setPost(data)
    }

    fetchData();

    // fetch("/api")
    // .then(response => response.json())
    // .then(res => setApi(res.payment))
  }, []);

  const sendFrom = () => {
    let productInfo = {
        "name": post?.name,
        "price": post?.price

    }

    props.setFrom(productInfo)
  }

  return (
    <div className="wrapper">
    <div className="product_details">
      <div className="product-images">
        <img
          src={post?.img}
          alt=""
        />
      </div>
      <div className="product-info">
        <div className="prodcut-title">
          <h1>{post?.name}</h1>
        </div>
        <div className="product-price">
          <p>Цена: {post?.price}</p>
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

export default GetPost;
