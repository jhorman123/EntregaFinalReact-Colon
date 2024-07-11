import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className="bg-blue-500 p-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/Home" className="text-2xl font-bold">My Ti_Enda Virtual</Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-200 hover:border-blue-200">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </button>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto justify-end">
          <div className="text-sm lg:flex-grow">
            <Link to="/Home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-700 px-3 py-2 rounded-md">HOME</Link>
            <Link to="/Productos" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-700 px-3 py-2 rounded-md">PRODUCTOS</Link>
            <Link to="/Productos/Procesador" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-700 px-3 py-2 rounded-md">PROCESADOR</Link>
            <Link to="/Nosotros" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-700 px-3 py-2 rounded-md">NOSOTROS</Link>
            <Link to="/Contactanos" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-700 px-3 py-2 rounded-md">CONTACTOS</Link>
          </div>
          <div className="block mt-4 lg:mt-0">
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
