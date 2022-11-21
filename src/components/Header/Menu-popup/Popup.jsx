import React from "react";
import "./Popup.css";
import { GetProduct } from "../../GetProduct/GetProduct";
import { useState } from "react";
// rfce
function Popup(props) {
  const useProdcutState = GetProduct();
  let state = useState();

  const ItemParams = [];

  for (let i = 1; i < 20; i++) {
    ItemParams.push({
      categori: useProdcutState.items[i].categori,
      links: useProdcutState.items[i].links,

    });
  }

  let list = ItemParams.map((p) => <a href={p.links} target="_blank"><div className="item">{p.categori}</div></a>);


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
