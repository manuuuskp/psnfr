import React from "react";

import "./cartItem.scss";

const CartItem = (props) => {
    return (
        <div className="cartItem__container">
            <div className="cartItem__image--cont">
                <img src={props.image}/>
            </div>
            <div className="cartItem__content--cont">
                <div><h4>{props.name}</h4></div>
                <div className="cartItem__content--btn">
                    <button>-</button>
                    <span className="cartItem__content--curCount">{props.curCount}</span>
                    <button>+</button>
                    <span className="cartItem__content--asterik">*</span>
                    <span>Rs.{props.price}</span>
                </div>
            </div>
            <div className="cartItem__totalPrice--cont">
                <span>{`Rs.${props.price*props.curCount}`}</span>
            </div>
        </div>
    )
}

export default CartItem;