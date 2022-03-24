import React from 'react';
import "./modal.css"

const Modal = ({active, setActive, children}) => {
    return(
        <div className={active ? "modal-s active" :  "modal-s"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content-s active" :  "modal__content-s"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
