import React, { useState } from 'react'
import ElementsDetFactura from './ElementsDetFactura';
import ElementsRepartidor from './ElementsRepartidor';

const FacturaDetails = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const products = props.factura
  return (
    <>
      <button className="font-semibold leading-tight text-xs text-slate-400" onClick={() => setIsOpen(true)}>
        Detalles
      </button>
      {isOpen && (
        <div className="fixed  inset-x-0  pb-6 sm:inset-3 sm:p-0 sm:flex z-50 h-gl">
          <div className="inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75 rounded-lg"></div>
          </div>
            <div className="relative pb-5 bg-white  rounded-lg pt-3 h-gl  mx-auto my-auto  ">
              <button className="absolute top-0 right-0 p-1 text-black bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100" onClick={() => setIsOpen(false)}>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <div className="max-auto">
                <div className='mx-auto z-50'>
                  <div className="p-3  mx-auto my-auto bg-white rounded-lg ">

                    <h2 className="text-lg mx-auto font-medium  text-center mb-3"><strong>Detalles de Factura</strong></h2>
                    <div className='overflow-x-auto'>
                      <table className="w-full text-left table-collapse">
                        <tbody>
                          <tr className="bg-gray-100 p-3">
                            <td className="font-medium p-3 text-center"><strong>Número de Factura: </strong></td>
                            <td className="text-center p-3 font-light"> {products.number}</td>

                          </tr>
                          <tr className="bg-gray-100 p-3">
                            <td className="font-medium p-3 text-center"><strong>Fecha de Factura: </strong></td>
                            <td className="text-center p-3  font-light">{products.date}</td>

                          </tr>

                          <tr className="bg-gray-100 p-3">
                            <td className="font-medium p-3 text-center"><strong>Cédula del Cliente:</strong></td>
                            <td className="text-center p-3 font-light">{products.customerDocument}</td>
                          </tr>
                          <tr className="bg-gray-100">
                            <td className="font-medium p-3 text-center"><strong>Telefono del cliente:</strong></td>
                            <td className="text-center p-3 font-light">{products.customerPhone}</td>
                          </tr>
                          <tr className="bg-gray-100">
                            <td className="font-medium p-3 text-center"><strong>Cliente:</strong></td>
                            <td className="text-center p-3 font-light">{products.customerName} {products.customerLastName}</td>
                          </tr>
                        </tbody>
                      </table>
                      <tbody className=''>
                        {products.details.map(product => (
                          <ElementsDetFactura
                            products={product}

                          />
                        ))}
                      </tbody>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <div className="text-gray-700 font-medium">Subtotal:</div>
                      <div className="font-medium">{products.subtotal} $</div>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <div className="text-gray-700 font-medium">Total:</div>
                      <div className="font-medium">{products.total} $</div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FacturaDetails