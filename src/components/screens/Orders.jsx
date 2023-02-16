import React from 'react'
import FacturaTable from '../Tables/FacturaTable'
import OrdenesTable from '../Tables/OrdenesTable'


const Orders = () => {


  return (
    <div className='lg:w-4/5 lg:ml-60 w-11/12 mx-10'>
   <OrdenesTable/>
   <FacturaTable/>
   </div>
  )
}

export default Orders