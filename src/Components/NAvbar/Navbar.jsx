import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'



const Navbar=()=>{
    return(
        <div className='nav-container'>
            <nav className='navbar'>
                <h1 className='navbar-logo'>Ateneo Libros</h1>
                <ul className='ul-navbar-menu'>
                    <li className='navbar-menu'>LIBROS</li>
                    <li className='navbar-menu'>MUSICA</li>
                    <li className='navbar-menu'>PEICULAS</li>
                    <li className='navbar-menu'>PROMOCIONES</li>
                </ul>
                <CartWidget/>
                
            </nav>
        </div>
    )
}

export default Navbar