import React from 'react';

const ConsultarMascotas = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center">Consultar Mascota</h2>

      <form className="mt-4">
        <div className="mb-4">
          <label for="categoria" className="block text-gray-700 font-bold mb-2">
            Categoría
          </label>
          <select id="categoria" className="form-select w-full bg-gray-200 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Seleccione una categoría</option>
            <option value="perro">Perro    </option>
            <option value="gato">Gato</option>
            <option value="otro">Otro    </option>
          </select>
        </div>

        <div className="mb-4">
          <label for="nombre" className="block text-gray-700 font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="form-input w-full bg-gray-200 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label for="raza" className="block text-gray-700 font-bold mb-2">
            Raza
          </label>
          <input
            type="text"
            id="raza"
            className="form-input w-full bg-gray-200 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label for="edad" className="block text-gray-700 font-bold mb-2">
            Edad
          </label>
          <input
            type="number"
            id="edad"
            className="form-input w-full bg-gray-200 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Consultar
        </button>
      </form>
    </div>
  );
};

export default ConsultarMascotas;
