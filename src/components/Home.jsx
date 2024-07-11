import React from 'react'

function Home() {

    const products = [
        {
          id: 1,
          name: 'GPU Nvidia RTX 3080',
          description: 'Tarjeta gráfica de alto rendimiento',
          price: '699.99',
          imageUrl: 'https://asset.msi.com/resize/image/global/product/product_163099212970d40162c581eb52a47b37d40e98fb0f.png62405b38c58fe0f07fcef2367d8a9ba1/400.png' // Reemplaza con una URL válida
        },
        {
          id: 2,
          name: 'AMD Ryzen 9 5900X',
          description: 'Procesador potente para gaming y creación de contenido',
          price: '499.99',
          imageUrl: 'https://procesadores.net/wp-content/uploads/2020/11/AMD-Ryzen-9.png' // Reemplaza con una URL válida
        },
        // Añade más productos según necesites
      ];
      
  return (
    <>
      <h1 className=' text-3xl text-center py-10 text-blue-500'>HOME</h1>
      <div className=' text-5xl text-center bg-blue-500 p-6 text-white'>
        <h2>Encuentra los Mejores Componentes para tu PC</h2>
      </div>
        
      <div className="bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-12 text-blue-500">Componentes para PC <br />Productos Destacados </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-5">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-2">
                  <span className="text-xl font-bold">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
