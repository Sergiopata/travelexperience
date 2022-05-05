import React from 'react'
import CartWidget from './CartWidget'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom';


const NavBar = () => {


  return (
  <div className='contenedor-navbar'>

    <ul className="menu menu-horizontal bg-blue">
      <div className='logo logo-6px'><img src= {logo} alt='logotipo'/>
      </div>
      <li><Link to={'/'}>Inicio</Link></li>
      <li>
    <span><Link to={'/'}>Destinos</Link></span>
    <ul className="bg-black color-white">
      <li>Litoral</li>
      <li>Cuyo</li>
      <li>Norte</li>
      <li>Sur</li>
      <li>Centro</li>
    </ul>
      </li>
      <li><Link to={'/'}>Contacto</Link></li>
      <CartWidget />
    </ul>

    

  </div>
  )
}

export default NavBar
