import React from "react";
import "./Popup.css";
import { GetProduct } from "../../GetProduct/GetProduct";
// rfce
function Popup(props) {
  const useProdcutState = GetProduct();

  console.log(useProdcutState);

  const ItemParams = [];

  for (let i = 1; i < 15; i++) {
    console.log(useProdcutState.items[i].names);
    ItemParams.push({
      categori: useProdcutState.items[i].categori
    });
  }

  let categori = ItemParams.map((p) => <div className="item">{p.categori}</div>);

  return props.trigger ? (
    <div className="popup__wrapper">
      <div className="popup__main">
        <div
          className="popup__close"
          onClick={() => props.setTrigger(false)}
        ></div>
        <div className="popup__catalog">
          <div className="popup__item">
            {categori}
          </div>
          <div className="popup__item-info">
            <div className="item-in">Итем</div>
            <div className="item-in">Итем</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
