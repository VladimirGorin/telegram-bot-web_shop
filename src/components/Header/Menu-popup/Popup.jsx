import React from "react";
import "./Popup.css";
import { GetProduct } from "../../GetProduct/GetProduct";
import { useState } from "react";
import { Link } from "react-router-dom";


// rfce
function Popup(props) {
  const useProdcutState = GetProduct();

  const ItemParams = [];

  const ItemGetProduct = []
  for (let i = 1; i < 1000; i++) {
    let links = useProdcutState.items[i].links[0].replace("https://hotline.ua/", "")

    ItemParams.push({
      categori: useProdcutState.items[i].categori,
      link: links,
      name: useProdcutState.items[i].names[0],
      prices: useProdcutState.items[i].prices[0],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrd8P1C1mzTXtZ6RiKrHADw4n1IJioPPBPw&usqp=CAU",

    });
  }

  const product = {}

  const sendProduct = (p) => {
    props.product(p)
    props.setTrigger(false)
  }

  let list = ItemParams.map((p) => <Link onClick={() => {sendProduct(p)}} to={p.link} ><div className="item">{p.categori}</div></Link>);
  
  
  return props.trigger ? (
    <div className="popup__wrapper">
      <div className="popup__main">
        <div
          className="popup__close"
          onClick={() => props.setTrigger(false)}
        ></div>
        <div className="popup__catalog">
          <div className="popup__item">{list}</div>
          <div className="popup__item-info">{list}</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
