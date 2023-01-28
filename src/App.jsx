import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ModalCrearProducto from './components/ModalCrearProducto';
import AboutUs from './components/screens/AboutUs';
import Doctors from './components/screens/Doctors';
import Home from './components/screens/Home';
import Orders from './components/screens/Orders';
import Products from './components/screens/Products';
import Promotions from './components/screens/Promotions';
import Services from './components/screens/Services';
import SideBar from './components/screens/Side';
import Store from './components/screens/Store';
import Navbar from './components/shared/Navbar/Navbar';

function App() {
  return (
    <div className='App bg-gray-50'>
    <div className="m-0 flex font-sans antialiased font-normal text-base leading-default  text-slate-500 ">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/promotions" element={<Promotions/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/products/crearProducto' element={<ModalCrearProducto/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
