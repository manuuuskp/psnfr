import React, { useReducer } from "react";

const initialState = {
    cartItems: {}
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
                    }
                }
            } else {
                return {
                    cartItems: {
                        ...state.cartItems,
                        [action.payload.id]: action.payload
                    }
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
                    cartItems
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
                    }
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