import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import ElementsOrders from '../Tables/ElementsOrders'
import ElementsProducts from '../Tables/ElementsProducts'
import FacturaTable from '../Tables/FacturaTable'
import OrdenesTable from '../Tables/OrdenesTable'

const Orders = () => {

  return (
    <div className='w-4/5 ml-60'>
   <OrdenesTable/>
   <FacturaTable/>
   </div>
  )
}

export default Orders