import React from 'react'

const NavBar = () => {


  return (
  <div className='contenedor-navbar'>
    <ul className="menu menu-horizontal bg-blue">
      <li>Inicio</li>
      <li tabindex="0">
    <span>Destinos</span>
    <ul class="bg-black">
      <li>Litoral</li>
      <li>Cuyo</li>
      <li>Norte</li>
      <li>Sur</li>
      <li>Centro</li>
    </ul>
      </li>
      <li>Contacto</li>
    </ul>
  </div>
  )
}

export default NavBar
