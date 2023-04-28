import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'



const Navbar=()=>{
    return(
        <div className='nav-container'>
            <nav className='navbar'>
                <h1 className='navbar-logo'>Ateneo Libros</h1>
                <ul className='ul-navbar-menu'>
                    <li className='navbar-menu'>  <a href=''>LIBROS</a> </li>
                    <li className='navbar-menu'> <a href=''>MUSICA</a> </li>
                    <li className='navbar-menu'> <a href=''>PEICULAS</a> </li>
                    <li className='navbar-menu'> <a href=''>PROMOCIONES</a> </li>
                </ul>
                <CartWidget/>
                
            </nav>
        </div>
    )
}

export default Navbar