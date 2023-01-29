import React,{useState} from 'react'
import Modal from '../shared/Modal';

const ElementsFacturas = (props) => {
    const producto=props.products
    return (

        <tr>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <div className="flex px-2 py-1">
                    <div className="flex flex-col">
                        <h6 className="mb-0 leading-normal text-sm font-bold">{props.products.numero}</h6>
                        <p className="mb-0 leading-tight text-xs text-slate-400">{props.products.fecha}</p>
                    </div>
                </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <p className="mb-0 leading-normal text-sm">{props.products.cedula}</p>
      </td>
      <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
        <span className={`bg-gradient-to-tl px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none`}>{props.products.nombre} {props.products.apellido}</span>
      </td>
      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <span className="font-semibold leading-tight text-xs text-slate-400">{props.products.total} $</span>
      </td>
      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
      <Modal producto={producto}/>
      </td>
      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400"> Eliminar </a>
      </td>
        </tr>

  )
}

export default ElementsFacturas