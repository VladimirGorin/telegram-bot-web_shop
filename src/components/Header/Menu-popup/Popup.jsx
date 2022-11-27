import React, { useEffect, useState } from "react";
import "./Popup.css";
import { GetProduct } from "../../GetProduct/GetProduct";
import { Link } from "react-router-dom";
import ItemCatalog from "./ItemCatalog/ItemCatalog";

// rfce
function Popup(props) {
  const useProdcutState = GetProduct();
  const [item, setItem] = useState(false)
  const [product, setProduct] = useState([""])

  const ItemParams = [];
  const ItemGetProduct = [];

  function foo(arr, copies) {
    let map = new Map();
    for (let elem of arr) {
        let counter = map.get(elem);
        map.set(elem, counter ? counter + 1 : 1);
    }
    let res = [];
    for (let [elem, counter] of map.entries())
        if (counter >= copies)
            res.push(elem);
    return res;
  }


  function getCategori (arr) {
    let catalog = []

    for (let i = 1; i < arr.items.length; i++) {

      catalog.push(
        arr.items[i].categori[0],
      )

    }


    return catalog
    
  }


  let catalogArr = getCategori(useProdcutState)
  let catalog = foo(catalogArr, 1)




  for (let i = 1; i < catalog.length; i++) {

    ItemParams.push({
      categori: catalog[i],
      
    });

  }

  const sendProduct = (p) => {
    props.product(p)
    props.setTrigger(false)
  }



  // <Link onClick={() => {sendProduct(p)}} to={p.link}>{p.product_name}</Link>



  let itemCatalog = ItemParams.map((p) => <ItemCatalog ItemGetProduct={ItemGetProduct} setProduct={setProduct} setItem={setItem} name={p.categori} useProdcutState={useProdcutState} />);

  let ItemCart = product.map((p) => item? <Link onClick={() => {sendProduct(p)}} to={p.link}>{p.products}</Link>  : ("") );


  
  return props.trigger ? (
    <div className="popup__wrapper">
      <div className="popup__main">
        <div
          className="popup__close"
          onClick={() => props.setTrigger(false)}
        ></div>
        <div className="popup__catalog">
          <div className="popup__item">{itemCatalog}</div>
          <div className="popup__item-info">{ItemCart}</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
