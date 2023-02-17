import React from "react";

import { Categories } from "./../../server/categories/index.get";

import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <aside>
            <div className="sidebar__container">
                <ul aria-label="category list" className="sidebar__list">
                    {
                        Categories.map(category => <li className="sidebar__list--item" tabIndex={0} key={category.key}><span>{category.name}</span></li>)
                    }
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;