import React, { useContext } from "react";
import CartItem from "../cartitem/CartItem";
import { cartItemContext } from "../cartreducer/CartReducer";

import "./cart.scss";

const Cart = (props) => {

    const cartItemCtx = useContext(cartItemContext);

    return (
    <div className="cart__container">
        <div className="cart__header">
            <span>My Cart</span>
            <span className="cart__close" onClick={() => props.setOpen(false)}>X</span>
        </div>
        <div className="cart__content">
            {
                Object.entries(cartItemCtx.cartItem.cartItems).map(cartItm => <CartItem key={cartItm[0]} {...cartItm[1]}></CartItem>)
            }
        </div>
        <div className="cart__footer">
            <div className="cart__promo--cont">
                <span>Promo code can be applied on the Checkout Page</span>
            </div>
            <div className="cart__checkout">
                    <span>Proceed to Checkout</span>
                <div>
                    <span>100 Rs</span>
                    <span>{'>'}</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cart;