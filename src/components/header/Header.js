import React from "react";
import {useNavigate} from "react-router";

import logo from "./../../static/images/logo_2x.png";
import CartIcon from "./../utils/icons/CartIcons";

import "./Header.scss"


const Header = () => {
    const navigate = useNavigate();

    const onClickSignIn = () => {
        navigate("signin");
    }

    const onClickRegister = () => {
        navigate("signup");
    }

    return <header>
        <div className="header__container" tabIndex="0">
            <div>
                <img className="header__logo" tabIndex="0" alt="sabka bazaar logo" src={logo}/>
            </div>
            <div>
                <nav>
                    <ul className="header__navlist">
                        <li className="header__navlist--item" tabIndex="0"><a onClick={() => navigate("home")}>Home</a></li>
                        <li className="header__navlist--item" tabIndex="0"><a onClick={() => navigate("products")}>Products</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <div className="header__loggin--cont">
                    <a tabIndex="0" onClick={onClickSignIn}>Sign In</a>
                    <a tabIndex="0" onClick={onClickRegister}>Register</a>
                </div>
                <div className="header__cartdata"><button tabIndex="0"><CartIcon /><span>0 items</span></button></div>
            </div>
        </div>
    </header>
}

export default Header;