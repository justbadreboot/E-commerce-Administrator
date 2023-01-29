import React, { useState } from 'react';

import './App.css';
import Login from './components/rutas/Login';

import RutasAdministrador from './components/rutas/RutasAdministrador';
import RutasReaprtidor from './components/rutas/RutasReaprtidor';


function App() {
  const [isLoggin,setIsLoggin]=useState(<Login/>)

  const rol=localStorage.getItem('rol')
  if(rol==="Admin"){
    setIsLoggin(<RutasAdministrador/>)
  }
  else if(rol==="Repartidor"){
    setIsLoggin(<RutasReaprtidor/>)
  }
  return (
    <>
    {isLoggin}
    </>
  );
}

export default App;
