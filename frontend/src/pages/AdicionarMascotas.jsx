// src/components/AddPet.js
import React from 'react';

const AddPet = () => {
  return (
    <div className="bg-blue-900 p-4 rounded-lg w-80">
      <div className="flex justify-between items-center mb-4">
        <button className="text-white text-lg">←</button>
        <h2 className="text-white text-lg">Adicionar Mascota</h2>
        <button className="text-white text-lg">✖</button>
      </div>
      <div className="flex justify-center mb-4">
        <div className="bg-gray-300 p-4 rounded-full">
          <svg
            className="w-12 h-12 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>
      <input
        type="text"
        placeholder="Nombre"
        className="bg-gray-200 p-2 rounded-lg mb-4 w-full"
      />
      <select className="bg-gray-200 p-2 rounded-lg mb-4 w-full">
        <option>Seleccione Raza...</option>
        <option>Bulldog</option>
        <option>Corgi</option>
        <option>Siamese</option>
        <option>Graycat</option>
      </select>
      <select className="bg-gray-200 p-2 rounded-lg mb-4 w-full">
        <option>Seleccione Categoría...</option>
        <option>Perro</option>
        <option>Gato</option>
      </select>
      <div className="bg-gray-200 p-2 rounded-lg mb-4 w-full flex items-center">
        <input
          type="text"
          placeholder="Subir Foto"
          className="bg-gray-200 flex-grow"
        />
        <button className="text-gray-600 p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7h2l1-1h10l1 1h2a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11a3 3 0 100 6 3 3 0 000-6z"
            />
          </svg>
        </button>
      </div>
      <select className="bg-gray-200 p-2 rounded-lg mb-4 w-full">
        <option>Seleccione Género...</option>
        <option>Macho</option>
        <option>Hembra</option>
      </select>
      <button className="bg-green-500 text-white py-2 px-4 rounded-full w-full">
        Guardar
      </button>
    </div>
  );
};

export default AddPet;
