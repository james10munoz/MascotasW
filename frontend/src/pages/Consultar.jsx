import React from 'react';

const Consultar = () => {
  return (
    <div className=''>
      <div className="relative rounded-3xl  w-4/4 h-screen overflow-hidden">
        <img src="/public/imgs/bg.svg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="relative p-4">
          <div className="flex justify-between items-center mt-4 mb-8">
            <button className="">
              <img src="/public/imgs/btn-back.svg" alt="Back" />
            </button>
            <h2 className="text-white text-lg">Consultar Mascota</h2>
            <button className="text-white text-lg">
              <img src="/public/imgs/btn-close.svg" alt="Close" />
            </button>
          </div>
          <div className="flex justify-center mb-8">
            <img 
              src="/public/imgs/photo-lg-1.svg" 
              alt="Pet" 
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <div className="text-white items-center p-2">
            <div className="flex mb-4 w-full rounded-lg">
              <span className="text-white bg-slate-400 p-3 rounded-l-lg w-1/3">Nombre:</span>
              <span className="text-cyan-800 bg-slate-300 p-3 rounded-r-lg w-2/3">Reigner</span>
            </div>
            <div className="flex mb-4 w-full rounded-lg">
              <span className="text-white bg-slate-400 p-3 rounded-l-lg w-1/3">Raza:</span>
              <span className="text-cyan-800 bg-slate-300 p-3 rounded-r-lg w-2/3">Bulldog</span>
            </div>
            <div className="flex mb-4 w-full rounded-lg">
              <span className="text-white bg-slate-400 p-3 rounded-l-lg w-1/3">Categoría:</span>
              <span className="text-cyan-800 bg-slate-300 p-3 rounded-r-lg w-2/3">Perro</span>
            </div>
            <div className="flex mb-4 w-full rounded-lg">
              <span className="text-white bg-slate-400 p-3 rounded-l-lg w-1/3">Género:</span>
              <span className="text-cyan-800 bg-slate-300 p-3 rounded-r-lg w-2/3">Macho</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultar;
