import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext)

  return (
    <div>
      <Link className='menu-link' to='/carrito'>
      <FaShoppingCart className="text-white text-2xl mr-11 hover: cursor-pointer" />
      <span className="absolute top-0 right-0 mt-7 text-center mr-8 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;