import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import "./Header.css";
// import MenuImage from "./images/menuImage"
import Popup from "./Menu-popup/Popup";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = (props) => {
  const { user, onClose } = useTelegram();
  // Привет {user?.username} !
  const [buttonPopup, setButtonPopup] = useState(false);

  let navigate = useNavigate();

  const getBack = () => {
    navigate(-1);
  };

  return (
    <div className={"header"}>
      <div className={"header__body"}>
        <a onClick={getBack}>
          <div className="header__back">Назад</div>
        </a>
        <Link to={"/"}>
          <div className="header__logo">CTM.UA</div>
        </Link>
        <div className="header__container">
          <Link className="header__login" to={"login"}>login</Link>
          <div className="header__navitgation">
            <div
              className="header_nav-menu"
              onClick={() => setButtonPopup(true)}
            >
              {/* after element in css */}
            </div>
          </div>
        </div>
        <Popup
          product={props.product}
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
        />
      </div>
    </div>
  );
};

export default Header;
