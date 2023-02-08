import React from 'react'
import { NavLink } from 'react-router-dom'
import ElementsRepartidor from '../Tables/ElementsRepartidor'

const DetallesOrd = () => {
    const products = 
        {
            Id: "1235", EstadoPago: "Pagado", Fecha: "17/11/2023", Precio: "15,50",
            EstadoOrden: "Concluida", EstadoEnvio: "Entregado", EstadoPago: "Pagada",
            cedula: "1753403607", nombre: "Adrian", apellido: "Bastidas", subtotal: "13,5",
            total: "15",
            orderDetails: [{ amount: 2, id: 1, name: "Naproxeno", price: 2 }, { amount: 5, id: 2, name: "Paracetamol", price: 5 }, { amount: 4, id: 3, name: "ibuprofeno", price: 5.50 }, { amount: 3, id: 4, name: "Gasas", price: 10 }]
        }
    return (
        <div className='mx-auto w-screen z-50'>
            <div className="p-5  mx-auto my-auto bg-white rounded-lg ">

                <h2 className="text-lg mx-auto font-medium mb-3 drop-shadow-xl">Detalles de Orden</h2>
                <table className="w-full text-left table-collapse">
                    <tbody>
                        <tr className="bg-gray-100">
                            <td className="font-medium p-3">Número de Factura:</td>
                            <td className="p-3 font-light">{products.Id}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="font-medium p-3">Fecha de Factura:</td>
                            <td className="p-3 font-light">{products.Fecha}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="font-medium p-3">Cédula del Cliente:</td>
                            <td className="p-3 font-light">{products.cedula}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="font-medium p-3">Cliente:</td>
                            <td className="p-3 font-light">{products.nombre} {products.apellido}</td>
                        </tr>
                    </tbody>
                </table>
                <tbody className='w-full'>
                    {products.orderDetails.map(product => (
                        <ElementsRepartidor
                            products={product}

                        />
                    ))}
                </tbody>

                <div className="mt-5 flex justify-between">
                    <div className="text-gray-700 font-medium">Subtotal:</div>
                    <div className="font-medium">{products.subtotal}</div>
                </div>
                <div className="mt-2 flex justify-between">
                    <div className="text-gray-700 font-medium">Total:</div>
                    <div className="font-medium">{products.total}</div>
                </div>
            </div>
            <NavLink to='/'>
            <div className='w-full fixed bottom-0 left-0 '>
            <button className='bg-blue-600 text-white w-full p-2 text-xl' >Terminar</button>
            </div>
            </NavLink>
        </div>
    )
}

export default DetallesOrd