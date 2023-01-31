import React from 'react'
import Modal from '../shared/Modal';
import ModalOrders from '../shared/modales/ModalOrders';

const ElementsOrders = (props) => {
    let colorClass = '';
    let colorClass1 = '';
    let colorClass2 = '';
    const producto=props.products
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

    switch(props.products.EstadoEnvio){
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

    switch(props.products.EstadoPago){
        case 'Pagada':
            colorClass2 = 'from-success-100 to-success-60 p-1 broder rounded-lg';
            break;
        case 'Cancelada':
            colorClass2 = 'from-error-100 to-error-80 p-1 broder rounded-lg';
            break;
        case 'Por Pagar':
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
                        <h6 className="mb-0 leading-normal text-sm">{props.products.Id}</h6>
                    </div>
                </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <p className="mb-0 font-semibold leading-tight text-xs">{props.products.Fecha}</p>


      </td>
      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
      <p className="mb-0 leading-tight text-xs ">{props.products.Precio} $</p>
      </td>
      <td className="p-0 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
        <span className={`bg-gradient-to-tl ${colorClass} px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}>{props.products.EstadoOrden}</span>
      </td>
      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <span className={`bg-gradient-to-tl ${colorClass1} px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}>{props.products.EstadoEnvio}</span>
      </td>
      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <span className={`bg-gradient-to-tl ${colorClass2} px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}>{props.products.EstadoPago}</span>
      </td>
      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
      <ModalOrders producto={producto}/>
      </td>
      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400"> Eliminar </a>
      </td>
        </tr>

  )
}

export default ElementsOrders