import React from "react";
import CardWrapper from "../utils/cardwrapper/CardWrapper";

import "./ProductItem.scss";

const ProductItem = (props) => {
    return <CardWrapper>
        <div><h4>{props.name}</h4></div>
        <div className="productItem__imgcontainer"><img src={props.imageURL} alt={`${props.name} image`}/></div>
        <div><p>{props.description}</p></div>
        <div>
            <div><span>{`MRP Rs.${props.price}`}</span></div>
            <div><button>BUY NOW</button></div>
        </div>
    </CardWrapper>
}

export default ProductItem;