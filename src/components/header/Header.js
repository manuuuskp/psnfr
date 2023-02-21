import React, { useState } from "react";
import {createPortal} from "react-dom";
import {useNavigate} from "react-router";
import { NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
import Modal from "../utils/modal/Modal";

import logo from "./../../static/images/logo_2x.png";
import CartIcon from "./../utils/icons/CartIcons";

import "./Header.scss"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const onClickSignIn = () => {
        navigate("signin");
    }

    const onClickRegister = () => {
        navigate("signup");
    }

    const activeStyle = {
        borderBottom: "2px solid red"
    }

    return <header>
        <div className="header__container" tabIndex="0">
            <div>
                <img className="header__logo" tabIndex="0" alt="sabka bazaar logo" src={logo}/>
            </div>
            <div>
                <nav>
                    <ul className="header__navlist">
                        <li className="header__navlist--item" tabIndex="0">
                            <NavLink to="home" style={({ isActive }) => isActive ? activeStyle : undefined }>Home</NavLink></li>
                        <li className="header__navlist--item" tabIndex="0">
                            <NavLink to="products" style={({ isActive }) => isActive ? activeStyle : undefined }>Products</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div>
                <div className="header__loggin--cont">
                    <a tabIndex="0" onClick={onClickSignIn}>Sign In</a>
                    <a tabIndex="0" onClick={onClickRegister}>Register</a>
                </div>
                <div className="header__cartdata"><button tabIndex="0" onClick={() => setIsOpen(true)}><CartIcon /><span>0 items</span></button></div>
            </div>
            {isOpen && createPortal(<Modal><Cart setOpen={setIsOpen}></Cart></Modal>, document.getElementById("modal-root"))}
        </div>
    </header>
}

export default Header;