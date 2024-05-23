// src/components/PetManager.js
import React from 'react';

const pets = [
  { id: 1, name: 'karsten', breed: 'Bulldog', image: '/imgs/photo-sm-1.svg' },
  { id: 2, name: 'Alban', breed: 'Corgi', image: '/imgs/photo-sm-2.svg' },
  { id: 3, name: 'Reigner', breed: 'Bulldog', image: '/imgs/photo-sm-3.svg' },
  { id: 4, name: 'Alex', breed: 'Siamese', image: '/imgs/photo-sm-4.svg' },
  { id: 5, name: 'Ariana', breed: 'Graycat', image: '/imgs/photo-sm-5.svg' },
];

const PetManager = () => {
  return (
    <div className="bg-blue-900 p-4 rounded-lg w-80">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg">Administrar Mascotas</h2>
        <button className="text-white text-lg">✖</button>
      </div>
      <button className="bg-green-500 text-white py-2 px-4 rounded-full w-full mb-4">
        + Adicionar
      </button>
      {pets.map((pet) => (
        <div key={pet.id} className="flex items-center bg-white p-2 rounded-lg mb-2">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-12 h-12 rounded-full mr-2"
          />
          <div className="flex-grow">
            <p className="text-gray-700">{pet.name}</p>
            <p className="text-gray-500 text-sm">{pet.breed}</p>
          </div>
          <div className="flex space-x-2">
            <button className="text-blue-500">🔍</button>
            <button className="text-blue-500">✏️</button>
            <button className="text-red-500">🗑️</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PetManager;
