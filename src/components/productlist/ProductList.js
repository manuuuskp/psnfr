import React from "react";
import { useQuery } from "react-query";
import ProductItem from "../productitem/ProductItem";

import "./ProductList.scss";

async function getProduct() {
    const resp = await fetch('http://localhost:3001/products');
    return await resp.json();
}

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

    const { isLoading, error, data } = useQuery('product', getProduct);

   if(isLoading) {
    return <h2>Loading...</h2>
   }
    
    return <main>
        <div className="productList__container">
            {
                data.filter(prod => {
                    return curProd !== "" ? prod.category === curProd : true
                }).map(prod => <ProductItem key={prod.sku} {...prod} images={images}/>)
            }
        </div>
    </main>
}

export default ProductList;