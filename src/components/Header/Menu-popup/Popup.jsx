import React from 'react'
import "./Popup.css"
// rfce
function Popup(props) {
  return (props.trigger) ? (
        <div className="popup__wrapper">
            <div className="popup__main">
                <div className="popup__close" onClick={() => props.setTrigger(false)}></div>
                <div className="popup__catalog">
                    <div className="popup__item">
                        <div className="item">Каталог</div>
                        <div className="item">Каталог</div>
                        <div className="item">Каталог</div>
                        <div className="item">Каталог</div>
                    </div>
                    <div className="popup__item-info"></div>
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup