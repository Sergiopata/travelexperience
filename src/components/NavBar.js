import React from 'react'
import CartWidget from './CartWidget'
import logo from './../assets/logo.png'
const NavBar = () => {


  return (
  <div className='contenedor-navbar'>

    <ul className="menu menu-horizontal bg-blue">
      <div className='logo logo-6px'><img src= {logo} alt='logotipo'/>
      </div>
      <li>Inicio</li>
      <li>
    <span>Destinos</span>
    <ul className="bg-black color-white">
      <li>Litoral</li>
      <li>Cuyo</li>
      <li>Norte</li>
      <li>Sur</li>
      <li>Centro</li>
    </ul>
      </li>
      <li>Contacto</li>
      <CartWidget />
    </ul>

    

  </div>
  )
}

export default NavBar
