import React from "react";
import {useNavigate} from "react-router";

import "./Header.scss"


const Header = () => {
    const navigate = useNavigate();
    return <header>
        <div className="header__container" tabIndex="0">
            <div>
                <img tabIndex="0" alt="sabka bazaar logo" src="./../../static/images/logo_2x.png"/>
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
                <div>
                    <a tabIndex="0">Sign In</a>
                    <a tabIndex="0">Register</a>
                </div>
                <div><span tabIndex="0">0 items</span></div>
            </div>
        </div>
    </header>
}

export default Header;