import React from "react";
import ProductList from "../productlist/ProductList";
import Sidebar from "../sidebar/Sidebar";

import "./Products.scss";

const Products = () => {
    return (
        <div className="product__container">
            <Sidebar />
            <ProductList />
        </div>
    )
}

export default Products;