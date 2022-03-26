import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

function addCartItem(){
    const notify = ()=>{
        toast('Товар успешно добавлен в корзину!')
    }
    return (
        <div className="btn btn-danger">
            <button onClick={notify}>Click Me!</button>
        </div>
    );
}

export default addCartItem;
