import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DetallesOrd from '../Repartidor/DetallesOrd'
import HomeRepartidor from '../Repartidor/HomeRepartidor'
import NavbarRep from '../Repartidor/SharedRep/NavbarRep'

const RutasReaprtidor = () => {
  return (
    <div className="m-0 flex w-full h-screen font-sans antialiased font-normal text-base leading-default  text-slate-500 bg-gray-50">
                    <NavbarRep/>
        <Routes>

            <Route path="/" element={<HomeRepartidor/>}/>
            <Route path="/details/:id" element={<DetallesOrd/>}/>
        </Routes>
        </div>
  )
}

export default RutasReaprtidor