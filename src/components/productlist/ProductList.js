import React from "react";
import ProductItem from "../productitem/ProductItem";

import {Products} from "./../../server/products/index.get"

import "./ProductList.scss";

const ProductList = ({curProd}) => {
    const cache = {};
    function importAll(r) {
        r.keys().forEach((key) => (cache[key] = r(key)));
    }
    importAll(require.context("./../../static/images/products", true, /\.(png|jpg|svg)$/));
    
    const images = {};
    Object.entries(cache).forEach(cur => {
        const splitName = `/static/images/products/${cur[0].replace("./", "")}`;
        images[splitName] = cur[1].default;
    });
    
    return <main>
        <div className="productList__container">
            {
                Products.filter(prod => {
                    return curProd !== "" ? prod.category === curProd : true
                }).map(prod => <ProductItem key={prod.sku} {...prod} images={images}/>)
            }
        </div>
    </main>
}

export default ProductList;