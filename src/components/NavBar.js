/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import CartWidget from "./CartWidget";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {

	return (
		<>
			<div className="navbar bg-sergio-blue text-white">

				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex="0" className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>

						{/* Menu responsive */}

						<ul
							tabIndex="0"
							className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-sergio-blue rounded-box w-52"
						>

							<li>
								<Link to={"/"}>Inicio</Link>
							</li>
							<li tabIndex="0">
								<Link to={"/"} className="justify-between">
									Categoria-Destinos
									<svg
										className="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
									</svg>
								</Link>
								<ul className="p-2 bg-sergio-blue">
									<li>
										<Link to={"/category/Litoral"}>
											Litoral
										</Link>
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
						</ul>
					</div>

					<Link to="/">
						<img className="h-20 w-20" src={logo} alt="logotipo" />
					</Link>
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						<li>
							<Link to={"/"}>Inicio</Link>
						</li>
						<li tabIndex="0">
							<Link to={"/"} className="justify-between">
								Categoria-Destinos
								<svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
								</svg>
							</Link>
							<ul className="px-8 w-36  bg-sergio-blue">
								<li className="">
									<Link to={"/category/Litoral"}>
										Litoral
									</Link>
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
					</ul>
				</div>

				<div className="navbar-end">
					<div className="inline-block px-2 py-2 text-sm leading-none text-zinc-900 rounded hover:border-transparent lg:mt-0">
						<CartWidget />
					</div>
				</div>
			</div>

		</>
	);
};

export default NavBar;
