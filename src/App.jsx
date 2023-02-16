import React from 'react';


import Login from './components/rutas/Login';
import RutasAdministrador from './components/rutas/RutasAdministrador';
import RutasReaprtidor from './components/rutas/RutasReaprtidor';

function App() {
  const rol = localStorage.getItem('rol');

  return (
    <>


    <div className='bg-gray-50 h-screen w-screen'>

      {rol==="Admin" ||rol==="Repartidor" ? (
        <>
          {localStorage.getItem('rol') === "Admin" ? (
            <RutasAdministrador />
          ) : (
            <RutasReaprtidor />
          )}
        </>
      ) : (
        <Login/>
      )}
    </div>
    </>
  );
}

export default App;
