import React, { useContext } from "react";
import { cartItemContext } from "../cartreducer/CartReducer";

import "./cartItem.scss";

const CartItem = (props) => {
    const cartItemCtx = useContext(cartItemContext);
    const cartItmObj = {
        name: props.name,
        image: props.image,
        price: props.price,
        id: props.id,
        curCount: 1
    }

    function addToCart() {
        cartItemCtx.setCartItem({type:"addToCart", payload:cartItmObj});
    }

    function removeFromCart() {
        cartItemCtx.setCartItem({type:"removeFromCart", payload:cartItmObj});
    }

    return (
        <div className="cartItem__container">
            <div className="cartItem__image--cont">
                <img src={props.image}/>
            </div>
            <div className="cartItem__content--cont">
                <div><h4>{props.name}</h4></div>
                <div className="cartItem__content--btn">
                    <button onClick={removeFromCart}>-</button>
                    <span className="cartItem__content--curCount">{props.curCount}</span>
                    <button onClick={addToCart}>+</button>
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