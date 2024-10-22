import React from 'react'
import "./NavBarComponent.css"
import logo from '../assets/logo.png'
import carrito from '../assets/carrito.png'

const NavBarComponent = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="logo-navbar" className='logo'/>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">Offers</a></li>
          <li><a href="">About</a></li>
        </ul>
        <img src={carrito} alt="carrito-navbar" className='carrito'/>            
    </div>
  )
}

export default NavBarComponent