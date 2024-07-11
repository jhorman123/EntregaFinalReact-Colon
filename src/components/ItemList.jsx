import React from 'react';
import Item from './Item';

function ItemList({ productos, titulo }) {
  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl md:text-3xl font-bold text-center mb-6'>{titulo}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
