import React from 'react';

function Login() {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <div className='relative w-full h-screen'>
        <div className='absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover' style={{backgroundImage: "url('/bg-login.svg')", width:'400px', height:'100%'}}>
          <div className='flex flex-col items-center justify-center h-full'>
            <div className='w-full max-w-xs'>
              <form action="">
                <input type="text" placeholder='Correo Electronico' className='w-full p-2 mb-4  bg-slate-50 opacity-75 rounded-full ' />
                <input type="password" placeholder='Contraseña' className='w-full p-2 mb-4  bg-slate-50 opacity-75 rounded-full ' />
                -
                <button className='w-full p-2 bg-blue-900 text-white rounded-full'>Ingresar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
