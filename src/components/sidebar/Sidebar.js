import React from "react";
import { useQuery } from "react-query";

import "./Sidebar.scss";

async function getCategory() {
    const resp = await fetch('http://localhost:3001/categories');
    return await resp.json();
}

const Sidebar = ({setCurProd, curProd}) => {

    const activeListClass = "sidebar__list--item active";

    const { isLoading, error, data } = useQuery('getcategory', getCategory);

   if(isLoading) {
    return <h2>Loading...</h2>
   }

    return (
        <aside>
            <div className="sidebar__container">
                <ul aria-label="category list" className="sidebar__list">
                    {
                        data.map(category => <li className={`${category.id === curProd ? activeListClass : "sidebar__list--item"}`} tabIndex={0} key={category.key} onClick={() => setCurProd(category.id)}><span>{category.name}</span></li>)
                    }
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;