import React, { useReducer } from "react";

const initialState = {
    curProd: ""
}

export const prodStateContext = React.createContext({
    currentProdState: "",
    setCurrentProdState: () => {}
})

const reducerFn = (state, action) => {
    switch(action.type){
        case "setCurProd":
            state.curProd = action.payload;
            break;
    }
}

const ProductStateReducer = (props) => {
    const [currentProdState, setCurrentProdState] = useReducer(reducerFn, initialState);
    return <prodStateContext.Provider value={{currentProdState, setCurrentProdState}}>{props.children}</prodStateContext.Provider>
}

export default ProductStateReducer;