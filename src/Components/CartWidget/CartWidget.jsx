import React from "react";
import './CartWidget.css'

function CartWidget(){
    return(
        <div className='carrito-contenedor'>
            <p className='carrito-cantidad'>1</p>
            <p className='seecarrito'>🛒</p>
        </div>
    )
};

export default CartWidget;