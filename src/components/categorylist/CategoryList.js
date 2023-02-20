import React from "react";
import CategoryItem from "../categoryitem/CategoryItem";
import { Categories } from "./../../server/categories/index.get";

import "./CategoryList.scss";

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

    return (
        <div className="category__container">
            {
                Categories.map(category => <CategoryItem key={category.id} images={images} {...category}/>)
            }
        </div>
    )
}

export default CategoryList;