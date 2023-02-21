import React, { useEffect } from "react";
import CategoryItem from "../categoryitem/CategoryItem";
import {useQuery} from "react-query";

import "./CategoryList.scss";

async function getCategory() {
    const resp = await fetch('http://localhost:3001/categories');
    return await resp.json();
}

const CategoryList = () => {
    const cache = {};
    function importAll(r) {
        r.keys().forEach((key) => (cache[key] = r(key)));
    }
    importAll(require.context("./../../static/images/category", true, /\.(png|jpg|svg)$/));
    
    const images = {};
    Object.entries(cache).forEach(cur => {
        const splitName = `/static/images/category/${cur[0].replace("./", "")}`;
        images[splitName] = cur[1].default;
    });

    const { isLoading, error, data } = useQuery('category', getCategory);

   if(isLoading) {
    return <h2>Loading...</h2>
   }
    return (
        <div className="category__container">
            {
                data.map(category => <CategoryItem key={category.id} images={images} {...category}/>)
            }
        </div>
    )
}

export default CategoryList;