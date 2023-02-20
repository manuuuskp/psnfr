import React from "react";
import CardWrapper from "../utils/cardwrapper/CardWrapper";

import "./ProductItem.scss";

const ProductItem = (props) => {
    return <CardWrapper>
        <div className="productItem__title"><h4 tabIndex={0}>{props.name}</h4></div>
        <div className="productItem__imgcontainer"><img tabIndex={0} src={props.images[props.imageURL]} alt={`${props.name} image`}/></div>
        <div className="productItem__description"><p tabIndex={0}>{props.description}</p></div>
        <div className="productItem__purchase-cont">
            <div><span tabIndex={0}>{`MRP Rs.${props.price}`}</span></div>
            <div><button className="productItem__buynow">BUY NOW</button></div>
        </div>
    </CardWrapper>
}

export default ProductItem;