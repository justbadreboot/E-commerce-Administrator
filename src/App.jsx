import React, { useState } from 'react';

import './App.css';
import Login from './components/rutas/Login';

import RutasAdministrador from './components/rutas/RutasAdministrador';


function App() {
  const [isLoggin,setIsLoggin]=useState(<Login/>)

  const rol=localStorage.getItem('rol')
  if(rol=="Admin"){
    
  }
  return (
    <>
    {isLoggin}

    </>
  );
}

export default App;
