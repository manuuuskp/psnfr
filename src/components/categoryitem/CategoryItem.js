import React from "react";

import "./CategoryItem.scss";

const CategoryItem = (props) => {
    return (
        <div className="categoryitem__container">
            <div className="categoryitem__image--cont">
                <img className="categoryitem__image" alt={`${props.name} image`} src={props.images[props.imageUrl]}/>
            </div>
            <div className="categoryitem__desc--cont">
                <h4>{props.name}</h4>
                <p className="categoryitem__description">{props.description}</p>
                <button className="categoryitem__explore">Explore {props.name}</button>
            </div>
        </div>
        )
}

export default CategoryItem;