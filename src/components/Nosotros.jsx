import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">Nosotros</h1>
        <p className="text-lg mb-4">
          Bienvenidos a <span className="font-semibold">ComponentesPC</span>, su fuente principal para los mejores componentes de computadoras. Nos dedicamos a proporcionarle lo mejor en tecnología, con un enfoque en la calidad, la confiabilidad y el servicio al cliente.
        </p>
        <p className="text-lg mb-4">
          Fundada en 2020, <span className="font-semibold">ComponentesPC</span> ha recorrido un largo camino desde sus inicios. Cuando empezamos, nuestra pasión por la tecnología nos impulsó a investigar los mejores componentes para construir la computadora perfecta. Ahora servimos a clientes de todo el país, y estamos encantados de convertir nuestra pasión en nuestra propia tienda en línea.
        </p>
        <p className="text-lg mb-4">
          Esperamos que disfruten de nuestros productos tanto como nosotros disfrutamos ofreciéndolos. Si tienen alguna pregunta o comentario, no duden en contactarnos.
        </p>
        <p className="text-lg font-semibold text-center">Sinceramente,</p>
        <p className="text-lg font-semibold text-center">El equipo de ComponentesPC</p>
      </div>
    </div>
  );
};

export default AboutUs;
