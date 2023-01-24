import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Doctors from './components/screens/Doctors';
import Home from './components/screens/Home';
import Orders from './components/screens/Orders';
import Products from './components/screens/Products';
import Promotions from './components/screens/Promotions';
import Services from './components/screens/Services';
import Store from './components/screens/Store';
import Navbar from './components/shared/Navbar/Navbar';

function App() {
  return (
    <div className="flex m-0 font-sans antialiased font-normal text-base leading-default bg-gray-80 text-slate-500 h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/promotions" element={<Promotions/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </div>
  );
}

export default App;
