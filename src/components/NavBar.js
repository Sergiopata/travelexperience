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
    <span><Link to={'/'}>Categoria-Destinos</Link></span>

    <ul className="btn-primary bg-gradient-to-r from-green-400">
      
      <li><Link to={'/category/litoral'}>Litoral</Link></li>
      <li><Link to={'/category/cuyo'}>Cuyo</Link></li>
      <li><Link to={'/category/norte'}>Norte</Link></li>
      <li><Link to={'/category/centro'}>Centro</Link></li>

    </ul>
      </li>
      <li><Link to={'/'}>Contacto</Link></li>
      
      <CartWidget />
    </ul>

    

  </div>
  )
}

export default NavBar
