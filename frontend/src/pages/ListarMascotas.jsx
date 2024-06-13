// src/components/Administrar.js
import React from 'react';

const pets = [
  { id: 1, name: 'karsten', breed: 'Bulldog', image: '/imgs/photo-sm-1.svg' },
  { id: 2, name: 'Alban', breed: 'Corgi', image: '/imgs/photo-sm-2.svg' },
  { id: 3, name: 'Reigner', breed: 'Bulldog', image: '/imgs/photo-sm-3.svg' },
  { id: 4, name: 'Alex', breed: 'Siamese', image: '/imgs/photo-sm-4.svg' },
  { id: 5, name: 'Ariana', breed: 'Graycat', image: '/imgs/photo-sm-5.svg' },
];

const Administrar = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className="relative rounded-3xl w-4/4 h-screen overflow-hidden">
      <img src="/public/imgs/bg.svg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="relative p-4">
        <div className="flex justify-between items-center mt-4 mb-8">
          <div></div>
          <h2 className="text-white text-lg">Administrar Mascotas</h2>
          <button className="text-white text-lg">
            <img src="/public/imgs/btn-close.svg" alt="Close Button" />
          </button>
        </div>
        <button className="rounded-full w-full py-2 flex items-center justify-center mt-4 mb-4">
          <img src="/public/imgs/btn-add.svg" alt="Add Button" />
        </button>
        {pets.map((pet) => (
          <div key={pet.id} className="flex items-center bg-slate-400 p-2 rounded-2xl mb-4">
            <img
              src={pet.image}
              alt={pet.name}
              className="w-12 h-12 rounded-full m-1"
            />
            <div className="flex-grow ml-2">
              <p className="text-gray-700">{pet.name}</p>
              <p className="text-gray-500 text-sm">{pet.breed}</p>
            </div>
            <div className="flex space-x-2">
              <button className="mr-1"><img src="/public/imgs/btn-show.svg" alt=""/></button>
              <button className="mr-1"><img src="/public/imgs/btn-edit.svg" alt="" /></button>
              <button className=""><img src="/public/imgs/btn-delete.svg" alt="" /></button>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default Administrar;
