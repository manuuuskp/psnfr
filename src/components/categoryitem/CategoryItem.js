import React, { useContext } from "react";
import { useNavigate } from "react-router";

import "./CategoryItem.scss";

const CategoryItem = (props) => {
    const navigate = useNavigate();
    // const curProdCtx = useContext(prodStateContext);

    const navigateToProducts = (prodId) => {
        // curProdCtx.setCurrentProdState({type:"setCurProd", payload:prodId})
        navigate("/products");
    }

    return (
        <div className="categoryitem__container">
            <div className="categoryitem__image--cont">
                <img className="categoryitem__image" alt={`${props.name} image`} src={props.images[props.imageUrl]}/>
            </div>
            <div className="categoryitem__desc--cont">
                <h4>{props.name}</h4>
                <p className="categoryitem__description">{props.description}</p>
                <button className="categoryitem__explore" onClick={() => navigateToProducts(props.id)}>Explore {props.name}</button>
            </div>
        </div>
        )
}

export default CategoryItem;