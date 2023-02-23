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
            {
                Object.entries(cartItemCtx.cartItem.cartItems).length === 0 && (
                    <div className="cart__content--noItems">
                        <h3>No Items in your cart</h3>
                        <span>Your Favorite items are just a click away</span>
                    </div>
                )
            }
        </div>
        <div className="cart__footer">
            {
                Object.entries(cartItemCtx.cartItem.cartItems).length > 0 && 
                (
                <>
                <div className="cart__promo--cont">
                    <span>Promo code can be applied on the Checkout Page</span>
                 </div>
                <div className="cart__checkout" role="button">
                        <span>Proceed to Checkout</span>
                    <div>
                        <span>{cartItemCtx.cartItem.totalPrice} Rs</span>
                        <span>{' >'}</span>
                    </div>
                </div>
                </>
                )
            }
            {
                Object.entries(cartItemCtx.cartItem.cartItems).length === 0 &&
                (
                    <div className="cart__checkout--cont">
                        <button className="cart__checkout--btn" onClick={() => props.setOpen(false)}>
                            Start Shopping
                        </button>
                    </div>
                )
            }
            
        </div>
    </div>
    )
}

export default Cart;