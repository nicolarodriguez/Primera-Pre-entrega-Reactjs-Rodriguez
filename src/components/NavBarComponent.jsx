import React from 'react'
import "./index.css"
import computadora from '../assets/computadora.png'
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
import { useCart } from '../context/CartContext';

const NavBarComponent = () => {

  return (
    <nav>
      <a href="/"><img src={computadora} alt="logo-navbar" className='logo'/></a>
      <div className='navbar-buttons'>
        <button className='button'>
          <Link to={'/category/logitech'} className='button'>Logitech</Link>
        </button>
        <button className='button'>
        <Link to={'/category/razer'} className='button'>Razer</Link>
        </button>
        <button className='button'>
        <Link to={'/category/hyperx'} className='button'>HyperX</Link>
        </button>
        <CartWidget />
      </div>
    </nav>      
  )
}

export default NavBarComponent;