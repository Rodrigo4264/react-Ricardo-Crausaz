import React from "react";
import './ItemListContainer.css'

function ItemListContainer (props){
    return(
        
            <div className="ItemListContainer">
                <h1>Ateneo Libros</h1>
                <p>{props.greeting}</p>
                
            </div>
        
    )
}

export default ItemListContainer;