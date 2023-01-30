import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeRepartidor from '../Repartidor/HomeRepartidor'
import NavbarRep from '../Repartidor/SharedRep/NavbarRep'

const RutasReaprtidor = () => {
  return (
    <div className="m-0 flex font-sans antialiased font-normal text-base leading-default  text-slate-500 ">
                    <NavbarRep/>
        <Routes>

            <Route path="/" element={<HomeRepartidor/>}/>
        </Routes>
        </div>
  )
}

export default RutasReaprtidor