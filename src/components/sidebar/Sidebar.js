import React from "react";

import { Categories } from "./../../server/categories/index.get";

import "./Sidebar.scss";

const Sidebar = ({setCurProd, curProd}) => {

    const activeListClass = "sidebar__list--item active";

    return (
        <aside>
            <div className="sidebar__container">
                <ul aria-label="category list" className="sidebar__list">
                    {
                        Categories.map(category => <li className={`${category.id === curProd ? activeListClass : "sidebar__list--item"}`} tabIndex={0} key={category.key} onClick={() => setCurProd(category.id)}><span>{category.name}</span></li>)
                    }
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;