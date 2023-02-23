import React, { useReducer } from "react";

const initialState = {
    cartItems: {},
    totalPrice: 0
}

function cartReducerFn(state, action) {
    switch(action.type) {
        case "addToCart":
            if(state.cartItems[action.payload.id]) {
                const cartObj = {
                    ...action.payload,
                    curCount: state.cartItems[action.payload.id]['curCount'] + 1
                }
                return {
                    cartItems: {
                        ...state.cartItems,
                        [action.payload.id]: cartObj
                    },
                    totalPrice: state.totalPrice + action.payload.price
                }
            } else {
                return {
                    cartItems: {
                        ...state.cartItems,
                        [action.payload.id]: action.payload
                    },
                    totalPrice: state.totalPrice + action.payload.price
                }
            }
        break;
        case "removeFromCart":
            if(state.cartItems[action.payload.id]["curCount"] === 1) {
                const cartItems = {
                    ...state.cartItems
                }
                delete cartItems[action.payload.id];
                return {
                    cartItems,
                    totalPrice: state.totalPrice - action.payload.price
                };
            } else {
                const cartObj = {
                    ...action.payload,
                    curCount: state.cartItems[action.payload.id]['curCount'] - 1
                }
                return {
                    cartItems: {
                        ...state.cartItems,
                        [action.payload.id]: cartObj
                    },
                    totalPrice: state.totalPrice - action.payload.price
                }
            }
        break;
    }
}

export const cartItemContext = React.createContext({
    cartItem: initialState,
    setCartItem: () => {}
})

const CartReducer = (props) => {

    const [cartItem, setCartItem] = useReducer(cartReducerFn, initialState);

    return <cartItemContext.Provider value={{cartItem, setCartItem}}>{props.children}</cartItemContext.Provider>
}

export default CartReducer;