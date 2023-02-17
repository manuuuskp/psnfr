import React from "react";
import ProductItem from "../productitem/ProductItem";

import {Products} from "./../../server/products/index.get"

import "./ProductList.scss";

const ProductList = () => {
    return <main>
        <div className="productList__container">
            {
                Products.map(prod => <ProductItem key={prod.sku} {...prod}/>)
            }
        </div>
    </main>
}

export default ProductList;