import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import logo from './logo.png' 


export const Navbar = () => {
  return (
    <div id='Navbar'>
        <NavLink to='/'><img  src={logo} id='logo'></img></NavLink>
        <div>
        <NavLink to='/' className='home'>Home</NavLink>
        <NavLink to='/cart' className='home'><FaShoppingCart></FaShoppingCart></NavLink>
        </div>
    </div>
  )
}
