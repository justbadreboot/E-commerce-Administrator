import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import MapvIew from '../shared/Maps/Map';
import Map from '../shared/Maps/Map';
import ModalOrders from '../shared/modales/ModalOrders';
import OrdersR from '../shared/modales/OrdersR';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Loader';
import { ClientData, DireccionesData } from '../../services/actions/StoreData';

const ElementsOrdersR = (props) => {
    const dispatch = useDispatch();
    const direccion = useSelector(state => state.direccionRep.data)
    const cliente = useSelector(state => state.direccionRep.clients)
    const [modal, setModal] = useState(false)
    const dir = direccion.find(object => object.id === props.products.idAddress)
    const idA = props.products.idAddress
    const cliA= props.products.idClient
    const handlesuch = () => {
        setModal(true)
    }

    useEffect(() => {
        dispatch(DireccionesData(idA));
        dispatch(ClientData(cliA))
    }, [dispatch]);

    let colorClass = '';
    let colorClass1 = '';
    let colorClass2 = '';
    const producto = props.products
    switch (props.products.EstadoOrden) {
        case 'Concluida':
            colorClass = 'from-success-100 to-success-60 p-1 broder rounded-lg';
            break;
        case 'Cancelada':
            colorClass = 'from-error-100 to-error-80 p-1 broder rounded-lg';
            break;
        case 'En Proceso':
            colorClass = 'from-warning-100 to-warning-80 p-1 broder rounded-lg';
            break;
        default:
            colorClass = '';
    }

    switch (props.products.EstadoEnvio) {
        case 'Entregado':
            colorClass1 = 'from-success-100 to-success-60 p-1 broder rounded-lg';
            break;
        case 'Cancelada':
            colorClass1 = 'from-error-100 to-error-80 p-1 broder rounded-lg';
            break;
        case 'Por Entregar':
            colorClass1 = 'from-warning-100 to-warning-80 p-1 broder rounded-lg';
            break;
        default:
            colorClass1 = '';
    }

    switch (props.products.paymentState.state) {
        case 'Pago efectuado':
            colorClass2 = 'from-success-100 to-success-60 p-1 broder rounded-lg';
            break;
        case 'Cancelada':
            colorClass2 = 'from-error-100 to-error-80 p-1 broder rounded-lg';
            break;
        case 'Pago pendiente':
            colorClass2 = 'from-warning-100 to-warning-80 p-1 broder rounded-lg';
            break;
        default:
            colorClass2 = '';
    }
    return (

        <tr>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <div className="flex px-2 py-1">
                    <div className="flex flex-col justify-center">
                        <h6 className="mb-0 leading-normal text-sm">{props.products.id}</h6>
                    </div>
                </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <p className="mb-0 leading-tight text-xs ">{props.products.total} $</p>
            </td>
            <td className="p-1 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span className={`bg-gradient-to-tl ${colorClass2} px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}>{props.products.paymentState.state}</span>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <label htmlFor={props.products.total} onClick={handlesuch} className="btn  bg-black-0 text-slate-400  border-none p-1 text-xs">Detalles</label>
                <input type="checkbox" id={props.products.total} className="modal-toggle" />
                <div className="modal lg:h-4gh">
                    <div className="modal-box bg-gray-50">
                        <h3 className="font-bold text-lg text-center">Dirección del cliente</h3>
                        {modal ? (
                            dir ? (
                                <div className='text-center'>
                                    <p><strong>Provincia:</strong> {dir.state}</p>
                                    <p><strong>Sector:</strong> {dir.sector}</p>
                                    <p><strong>Calle Principal:</strong> {dir.mainStreet}</p>
                                    <p><strong>Calle Secundaria:</strong> {dir.secondStreet}</p>
                                    <div className='flex justify-center'>
                                        <div className="modal-action pr-3">
                                            <label htmlFor={props.products.total} className="btn bg-error-100 text-white border-none">Cerrar</label>
                                        </div>
                                        <div className="modal-action">
                                            <NavLink className="btn bg-green-100 text-white border-none" to={`/details/${props.products.id}`}>
                                                Aceptar
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <Loader />
                                    <div className="modal-action pr-3">
                                        <label htmlFor={props.products.total} className="btn bg-error-100 text-white border-none">Cerrar</label>
                                    </div>
                                </>
                            )
                        ) : (<Loader />)}

                    </div>
                </div>
            </td>
        </tr>

    )
}

export default ElementsOrdersR