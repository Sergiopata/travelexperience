/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import CartWidget from './CartWidget'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom';
import { useCartContext } from './context/CartContext';

function NavBar() {
    const { cart } = useCartContext();
    let [open, setOpen] = useState(false);

    return (
        <div className="contenedor-navbar">
            <ul className="menu menu-horizontal bg-blue">
                <div className="logo">
                    <li>
                        <Link to="/">
                            <img src={logo} alt="logotipo" />
                        </Link>
                    </li>
                </div>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <span>
                        <Link to={"/"}>Categoria-Destinos</Link>
                    </span>

                    <ul className="btn-primary bg-gradient-to-r from-green-400">
                        <li>
                            <Link to={"/category/Litoral"}>Litoral</Link>
                        </li>
                        <li>
                            <Link to={"/category/Cuyo"}>Cuyo</Link>
                        </li>
                        <li>
                            <Link to={"/category/Norte"}>Norte</Link>
                        </li>
                        <li>
                            <Link to={"/category/Centro"}>Centro</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to={"/"}>Contacto</Link>
                </li>

                <CartWidget />
            </ul>
        </div>
    );
}

export default NavBar;
