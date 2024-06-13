import React from 'react';

const Imagen = () => {
  return (
    <>
        <div className='flex justify-center items-center h-screen'>
      <div className="relative rounded-3xl w-3/4 h-screen overflow-hidden">
        <img src="/public/imgs/bg-login.svg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0"/>
        <div className="relative p-4 h-full flex flex-col justify-center">
          <div className="flex justify-between items-center mt-3 mb-6 w-full">
             <form action="">
                <input type="text" placeholder='Correo Electronico' className='w-full p-2 mb-4  bg-slate-50 opacity-75 rounded-full ' />
                <input type="password" placeholder='Contraseña' className='w-full p-2 mb-4  bg-slate-50 opacity-75 rounded-full ' />
                <button className='w-full p-2 bg-blue-900 text-white rounded-full'>Ingresar</button>
              </form>
          </div>
        </div>
      </div></div>
    </>
  );
};

export default Imagen;
