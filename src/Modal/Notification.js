import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

function Notification(){
    alert('Hello')
    const notify = ()=>{
        toast('Товар успешно добавлен в корзину!')
    }
}

export default Notification;
