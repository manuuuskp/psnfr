import React from "react";

import "./CardWrapper.scss";

const CardWrapper = (props) => {
    return <div className="cardwrapper">{props.children}</div>
}

export default CardWrapper;