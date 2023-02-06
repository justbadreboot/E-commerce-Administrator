import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ModalAñadirCategoria from '../Creations/ModalAñadirCategoria';
import ModalAñadirDoctor from '../Creations/ModalAñadirDoctor';
import ModalAñadirEspecialidad from '../Creations/ModalAñadirEspecialidad';
import ModalCrearProducto from '../Creations/ModalCrearProducto';
import ModalCrearServicio from '../Creations/ModalCrearServicio';
import AboutUs from '../screens/AboutUs';
import Categories from '../screens/Categories';
import Contact from '../screens/Contact';
import Doctors from '../screens/Doctors';
import Home from '../screens/Home';
import Orders from '../screens/Orders';
import Products from '../screens/Products';
import Promotions from '../screens/Promotions';
import Services from '../screens/Services';
import Store from '../screens/Store';
import Navbar from '../shared/Navbar/Navbar';
import FacturaDetails from '../Tables/FacturaDetails';



const RutasAdministrador = () => {
  return (
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
        <Route path='/services/crearServicio' element={<ModalCrearServicio/>}/>
        <Route path='/doctors/crearDoctor' element={<ModalAñadirDoctor/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/detalleFactura' element={<FacturaDetails/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/doctors/crearEspecialidad' element={<ModalAñadirEspecialidad/>}/>
        <Route path='/categories/crearCategoria' element={<ModalAñadirCategoria/>}/>
      </Routes>


    </div>
  )
}

export default RutasAdministrador