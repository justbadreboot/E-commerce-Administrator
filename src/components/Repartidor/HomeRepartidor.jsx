import React,{useState, useEffect} from 'react'
import ElementsOrders from '../Tables/ElementsOrders'
import ElementsOrdersR from '../Tables/ElementsOrdersR'

const HomeRepartidor = () => {
  const products = [
    { Id: "1235", EstadoPago: "Pagado", Fecha: "17/11/2023", Precio: "15,50", EstadoOrden: "Concluida", EstadoEnvio: "Entregado", EstadoPago:"Pagada", cedula:"1753403607", nombre:"Adrian", apellido:"Bastidas", subtotal:"13,5", total:"15" },
    { Id: "1243", EstadoPago: "Ibuprofeno", Fecha: "17/10/2021", Precio: "130,00", EstadoOrden: "En Proceso", EstadoEnvio: "Por Entregar", EstadoPago: "Por Pagar" },
    { Id: "1252", EstadoPago: "Arten", Fecha: "17/02/2013", Precio: "20,50", EstadoOrden: "Cancelada", EstadoEnvio: "Cancelada", EstadoPago: "Cancelada" },
    { Id: "1231", EstadoPago: "Ibuprofeno", Fecha: "17/11/2023", Precio: "5,80", EstadoOrden: "Concluida", EstadoEnvio: "Entregado", EstadoPago: "Pagada" },
    { Id: "1235", EstadoPago: "Ibuprofeno", Fecha: "17/11/2023", Precio: "50,30", EstadoOrden: "Cancelada", EstadoEnvio: "Cancelada", EstadoPago: "Cancelada" },
    { Id: "1236", EstadoPago: "Ibuprofeno", Fecha: "17/11/2023", Precio: "45,00", EstadoOrden: "En Proceso", EstadoEnvio: "Entregado", EstadoPago: "Por Pagar" },
    { Id: "1238", EstadoPago: "Ibuprofeno", Fecha: "17/11/2023", Precio: "130,00", EstadoOrden: "Concluida", EstadoEnvio: "Entregado", EstadoPago: "Pagada" },
    { Id: "1239", EstadoPago: "Ibuprofeno", Fecha: "17/02/2013", Precio: "150,50", EstadoOrden: "Concluida", EstadoEnvio: "Entregado", EstadoPago: "Pagada" },
    { Id: "1231", EstadoPago: "Ibuprofeno", Fecha: "17/02/2013", Precio: "130,20", EstadoOrden: "Concluida", EstadoEnvio: "Entregado", EstadoPago: "Pagada" },

  ]
  return (
    <div className='lg:w-4/5 pt-5 lg:ml-60 w-11/12 mx-10 bg-gray-50 h-screen'>
      <div className=" -mx-3 drop-shadow-lg table-container">

        <div className="flex-none  max-w-full px-3 table-container">
          <div className=" min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border ">
            <div className="p-6  mb-0 bg-white border-b-0 border-b-solid rounded-2xl h-3gl">

              <div className=' overflow-x-auto sm:flex grid grid-cols-1 pb-3' >
                <h6 className='pr-8 mx-auto'><strong>Ordenes</strong></h6>
                
              </div>
              <div className="p-0 overflow-x-auto overflow-y-scroll h-2gl">
                <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">ID</th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Total</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Pago</th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <ElementsOrdersR
                      products={product}

                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRepartidor