import React, { useState } from 'react';

import Login from './components/rutas/Login';
import RutasAdministrador from './components/rutas/RutasAdministrador';
import RutasReaprtidor from './components/rutas/RutasReaprtidor';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const rol = localStorage.getItem('rol');

  return (
    <>
      {rol=="Admin" ||rol=="Repartidor" ? (
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
    </>
  );
}

export default App;
