import React from 'react'
import { navbarLinks } from '../data/data'
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import { div } from 'motion/react-client';
import { useState } from "react";
import MenuResponsivo from "./MenuResponsivo";

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <nav className="navbar-animada"> {/* Quitamos nav-link de aquí para que no afecte a todo el nav */}
        <div className='container flex justify-between font-bold items-center py-8'>
          
          {/* Sección de Logo */}
          <div className='text-2xl flex items-center gap-2 uppercase'>
              <ImBooks />
              <p>Bienvenido a AdoptAmigos</p>
              <p className='text-secondary'>Mascotas</p>
          </div>

          {/* Sección de Menú */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 text-gray-600">
              {navbarLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                  //seccion de logo
                    className="inline-block py-1 px-3 duration-300 hover-jump"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sección de Íconos y Botón Ingresar */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300 hover-jump">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300 hover-jump">
              <PiShoppingCartLight />
            </button>
            {/* El botón de ingresar también puede saltar */}
            <button className="hover:bg-primary font-semibold rounded-md text-white bg-secondary px-4 py-2 duration-300 border-primary hidden md:block hover-jump">
              Ingresar
            </button>
          </div>

          {/* Sección de Móvil */}
          <div className="md:hidden">
            <MdMenu onClick={() => setAbierto(!abierto)} className="text-4xl cursor-pointer" />
          </div>
        </div>
      </nav>
      <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
    </>
  )
}

export default Navbar
