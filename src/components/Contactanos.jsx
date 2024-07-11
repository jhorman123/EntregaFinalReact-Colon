import React from "react";

function Contactanos() {
  return (

    <>
    <h1 className="text-center py-5 text-5xl text-blue-500">Contactanos</h1>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-screen-md">
          <h1 className="text-2xl font-bold text-center mb-6">Contáctame</h1>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Mensaje"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 px-10 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contactanos;
