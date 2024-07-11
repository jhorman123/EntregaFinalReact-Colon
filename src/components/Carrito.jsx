import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';

function Carrito() {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className='container'>
      <h1 className='main-title'>Carrito</h1>

      {
            carrito.map((prod) => (
                <div key={prod.id}><br/>
                    <h2>{prod.titulo}</h2>
                    <p>Precio unitari: ${prod.precio}</p>
                    <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button className='ver-mas bg-blue-500 text-white font-bold py-2 px-4 rounded justify-center hover:bg-blue-700' onClick={handleVaciar}>Vaciar</button>
                <Link to='/checkout' className=' m-5 bg-red-700 text-white font-bold py-3 px-4 rounded justify-center hover:bg-red-800'>Finalizar Compra</Link>
            </>:
            <h2>El carrito está vacío :(</h2>
        }

    </div>
  )
}

export default Carrito
