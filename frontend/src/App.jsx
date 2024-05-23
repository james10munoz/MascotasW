// src/App.js
import React from 'react';
import Listar from './pages/ListarMascotas';
import Login from "./pages/Login";
import Adicionar from '../src/pages/AdicionarMascotas'
import Consultar from "./pages/Consultar.jsx";

function App() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* <Login/> */}
      <Listar/>
      <Adicionar/>
      <Consultar/>

    </div>
    </>
  );
}

export default App;
