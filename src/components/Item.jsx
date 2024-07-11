import React from 'react'
import { Link } from 'react-router-dom'

function Item({producto}) {
  return (
    <div className='producto'>
      <img src={producto.imagen} />
      <div>
        <h4>{producto.titulo}</h4>
        <p>Precio: ${producto.precio}</p>
        <p>Categoría: {producto.categoria}</p>
        <p>Descripción: {producto.descripcion}</p>
        <Link className='ver-mas bg-blue-500 text-white font-bold py-2 px-4 rounded justify-center' to={`/item/${producto.id}`}>Ver más</Link>
      </div>
    </div>
  )
}

export default Item
