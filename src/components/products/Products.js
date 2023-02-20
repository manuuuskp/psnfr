import React, { useState } from "react";
import ProductList from "../productlist/ProductList";
import Sidebar from "../sidebar/Sidebar";

import "./Products.scss";

const Products = () => {
    const [curProd, setCurProd] = useState("");
    return (
        <div className="product__container">
            <Sidebar setCurProd={setCurProd} curProd={curProd}/>
            <ProductList curProd={curProd}/>
        </div>
    )
}

export default Products;