import React from "react";

import "./modal.scss";

const Modal = (props) => {
    return <div className="modal__container">
                <div className="modal__backdrop"></div>
                <div className="modal__content">
                    {props.children}
                </div>
            </div>
}

export default Modal;