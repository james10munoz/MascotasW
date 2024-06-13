// src/App.js
import React from 'react';
import Listar from './pages/ListarMascotas';
import Login from "./pages/Login";
import Adicionar from '../src/pages/AdicionarMascotas'
import Consultar from "./pages/Consultar.jsx";
import Modificar from './pages/Modificar.jsx';
import Imagen from './pages/imagen.jsx';

function App() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* <Login/> */}
      {/* <Imagen/> */}
      {/* <Listar/> */}
      {/* <Adicionar/> */}
      {/* <Consultar/> */}
      <Modificar/>

    </div>
    </>
  );
}

export default App;
