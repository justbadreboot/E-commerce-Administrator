import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ElementsRepartidor from '../Tables/ElementsRepartidor'
import { useSelector } from 'react-redux'
import axios from 'axios'

const DetallesOrd = () => {
    const { id } = useParams();
    const products = (useSelector(state => state.ordenRep.data)).find(object => object.id === parseInt(id))
    const client = (useSelector(state => state.direccionRep.clients)).find(object => object.id === products.idClient)
    const direction = (useSelector(state => state.direccionRep.data)).find(object => object.id === products.idAddress)
    console.log(direction)
    console.log(products)

    const [date,setDate]=useState(products.date)
    const [total,setTotal]=useState(products.total)
    const [subtotal,setSubtotal]=useState(products.subtotal)
    const [idClient,setIdClient]=useState(products.idClient)
    const [idAddress,setIdAddress]=useState(products.idAddress)
    const [deliveryState,setDeliveryState]=useState({
        id:2
    })
    const [orderState,setOrderState]=useState({
        id:products.orderState.id
    })
    const [paymentState,setPaymentState]=useState({
        id:products.paymentState.id
    })
    const [orderDetails,setOrderDetails]=useState(products.orderDetails)

    axios.put(`https://order-production-bfbc.up.railway.app/api/order/{id}?id=${products.id}`, {
        id,
        date,
        total,
        subtotal,
        idClient,
        idAddress,
        deliveryState,
        orderState,
        paymentState,
        orderDetails
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.error(err);
          });

    const dates = new Date(date);

    const year = dates.getFullYear();
    const month = (dates.getMonth() + 1).toString().padStart(2, "0");
    const day = dates.getDate().toString().padStart(2, "0");

    const dateString = `${year}-${month}-${day}`;

    return (
        <div className='mx-auto w-screen z-50'>
            <div className="p-5  mx-auto my-auto bg-white rounded-lg ">

                <h2 className="text-lg mx-auto font-medium  text-center mb-3"><strong>Detalles de Orden</strong></h2>
                <table className="w-full text-left table-collapse">
                    <tbody>
                        <tr className="bg-gray-100 p-3">
                            <td>
                                <p className="font-medium pt-3 text-center"><strong>Número de Orden</strong></p>
                                <p className="text-center pb-3  font-light">{products.id}</p>
                            </td>
                            <td>
                                <p className="font-medium pt-3 text-center"><strong>Fecha de Orden</strong></p>
                                <p className="text-center pb-3  font-light">{dateString}</p>
                            </td>

                        </tr>

                        <tr className="bg-gray-100 p-3 border-b-4">
                            <td>
                                <p className="font-medium pt-3 text-center"><strong>Estado de Pago</strong></p>
                                <p className="text-center pb-3 font-light">{products.paymentState.state}</p>
                            </td>
                            <td>
                                <p className="font-medium pt-3 text-center"><strong>Cédula del Cliente</strong></p>
                                <p className="text-center pb-3 font-light">{client.document}</p>
                            </td>
                        </tr>
                        <tr className="bg-gray-100 border-b-4">
                            <td>
                                <p className="font-medium pt-3 text-center"><strong>Telefono del cliente</strong></p>
                                <p className="text-center pb-3 font-light">{client.phone}</p>
                            </td>
                            <td>
                                <p className="font-medium pt-3 text-center"><strong>Cliente</strong></p>
                                <p className="text-center pb-3 font-light">{client.firstName} {client.lastName}</p>
                            </td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td>
                                <p className="font-medium pt-3 text-center"><strong>Ciudad y Provincia</strong></p>
                                <p className="text-center pb-3 font-light">{direction.city}, {direction.state}</p>
                            </td>
                            <td>
                                <p className="font-medium pt-3 text-center"><strong>Sector</strong></p>
                                <p className="text-center pb-3 font-light">{direction.sector}</p>
                            </td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td>
                                <p className="font-medium pt-3 text-center"><strong>Calle Principal</strong></p>
                                <p className="text-center pb-3 font-light">{direction.mainStreet}</p>
                            </td>
                            <td>
                                <p className="font-medium pt-3 text-center"><strong>Calle Secundaria</strong></p>
                                <p className="text-center pb-3 font-light">{direction.secondStreet}</p>
                            </td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td>
                                <p className="font-medium pt-3 text-center"><strong>Número de Casa</strong></p>
                                <p className="text-center pb-3 font-light">{direction.houseNumber}</p>
                            </td>
                            <td>
                                <p className="font-medium pt-3 text-center"><strong>Código Postal</strong></p>
                                <p className="text-center pb-3 font-light">{direction.postalCode}</p>
                            </td>
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
                <div className="mt-2 flex justify-between">
                    <div className="text-gray-700 font-medium">Subtotal:</div>
                    <div className="font-medium">{products.subtotal} $</div>
                </div>
                <div className="mt-2 flex justify-between">
                    <div className="text-gray-700 font-medium">Total:</div>
                    <div className="font-medium">{products.total} $</div>
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