
import React from 'react';

const Modificar = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="relative rounded-3xl w-full max-w-md h-screen overflow-hidden">
      <img
        src="/public/imgs/bg.svg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative p-4">
        <div className="flex justify-between items-center mt-3 mb-4">
          <button className="text-white text-5xl">
            <img src="/public/imgs/btn-back.svg" alt="Back" />
          </button>
          <h2 className="text-white text-lg">Modificar Mascota</h2>
          <button className="text-white text-lg">
            <img src="/public/imgs/btn-close.svg" alt="Close" />
          </button>
        </div>
        <div className="flex justify-center mb-8">
          <div className="rounded-full">
            <img
              src="/imgs//photo-lg-1.svg"
              alt="Camera Icon"
              className="w-32 h-32"
            />
          </div>
        </div>
        <div className="items-center p-2">    
      <input
        type="text"
        placeholder="Nombre"
        defaultValue="Reigner"
        className="bg-gray-200 p-2 rounded-lg mb-4 w-full"
      />
      <select className="bg-gray-200 p-2 rounded-lg mb-4 w-full" defaultValue="Bulldog">
        <option>Bulldog</option>
        <option>Corgi</option>
        <option>Siamese</option>
        <option>Graycat</option>
      </select>
      <select className="bg-gray-200 p-2 rounded-lg mb-4 w-full" defaultValue="Perro">
        <option>Perro</option>
        <option>Gato</option>
      </select>
      <div className="bg-slate-400 p-2 rounded-full mb-4 w-full flex items-center">
              <input
                type="text"
                id="file-upload-text"
                placeholder="Cambiar Foto"
                className="bg-slate-400 flex-grow text-black"
                readOnly
              />
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={(e) => {
                  const fileName = e.target.files[0]
                    ? e.target.files[0].name
                    : 'Subir Foto';
                  document.getElementById('file-upload-text').value = fileName;
                }}
              />
              <button
                className="text-gray-600 p-2"
                onClick={() => document.getElementById('file-upload').click()}
              >
                <img
                  src="/public/imgs/icon-camera.svg"
                  alt="Upload"
                  className="w-6 h-6"
                />
              </button>
            </div>
      <select className="bg-gray-200 p-2 rounded-lg mb-4 w-full" defaultValue="Macho">
        <option>Macho</option>
        <option>Hembra</option>
      </select>
      <button className="bg-green-500 text-white py-2 px-4 rounded-full w-full">
        Modificar
      </button>
    </div></div>
    </div>
    </div>
  );
};

export default Modificar;
