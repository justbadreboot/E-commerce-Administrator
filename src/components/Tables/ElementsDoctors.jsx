import React from 'react'
import Modal from '../shared/Modal';
import ModalDoctors from '../shared/modales/ModalDoctors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDoctorApi } from '../../services/actions/StoreDelete';
import { NavLink } from 'react-router-dom';

const ElementsDoctors = (props) => {
    const dispatch = useDispatch();
    let colorClass = '';
    const producto = props.products

    const handleDelete=()=>{
        dispatch(deleteDoctorApi(producto.id))
    }

    switch (props.products.caducidad) {
        case 'Ingerible':
            colorClass = 'from-success-100 to-success-60 broder rounded-lg';
            break;
        case 'Expirado':
            colorClass = 'from-error-100 to-error-80 broder rounded-lg';
            break;
        case 'Por Expirar':
            colorClass = 'from-warning-100 to-warning-80 broder rounded-lg';
            break;
        default:
            colorClass = '';
    }
    return (

        <tr>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <div className="flex px-2 py-1">
                    <div>
                        <img src={props.products.image} className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user1" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h6 className="mb-0 leading-normal text-sm">{props.products.name} {props.products.lastName}</h6>
                        <p className="mb-0 leading-tight text-xs text-slate-400">{props.products.document}</p>
                    </div>
                </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <p className="mb-0 font-semibold leading-tight text-xs">{props.products.email}</p>
                <p className="mb-0 leading-tight text-xs text-slate-400">{props.products.phone}</p>
            </td>
            <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                <span className={`bg-gradient-to-tl px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none `}>{props.products.address}</span>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <ModalDoctors producto={producto} />
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <button  className="font-semibold leading-tight text-xs text-slate-400" onClick={handleDelete}> Eliminar </button>
            </td>
        </tr>

    )
}

export default ElementsDoctors