import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
// import MenuImage from "./images/menuImage"
import Popup from './Menu-popup/Popup';
import { useState} from 'react';
import {useNavigate} from "react-router-dom"


const Header = () => {
    const {user, onClose} = useTelegram();
    // Привет {user?.username} !
    const [buttonPopup, setButtonPopup] = useState(false);

    let navigate = useNavigate();

    const getBack = () => {
        navigate(-1)
    }


    return (
        <div className={'header'}>
            <div className={'header__body'}>
                <a onClick={getBack}><div className="header__back">Назад</div></a>
                <a href='/'><div className="header__logo">ctm.ua</div></a>
                <div className="header__navitgation"><div className='header_nav-menu'  onClick={() => setButtonPopup(true)}>{/* after element in css */}</div></div>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
            </div>
        </div>
    );
};

export default Header;
