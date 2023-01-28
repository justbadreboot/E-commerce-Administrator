import React from 'react'
import Modal from '../shared/Modal';

const ElementsServices = (props) => {
    const producto=props.services

  return (
    <tr>
    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <div className="flex px-2 py-1">
            <div>
                <img src={props.services.foto} className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user1" />
            </div>
            <div className="flex flex-col justify-center">
                <h6 className="mb-0 leading-normal text-sm">{props.services.nombre}</h6>
            </div>
        </div>
    </td>
    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
<p className="mb-0 font-semibold leading-tight text-xs">{props.services.doctor}</p>
</td>
<td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
<span className={`bg-gradient-to-tl  px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none `}>{props.services.precio} $</span>
</td>
<td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
<span className="font-semibold leading-tight text-xs ">{props.services.especialidad}</span>
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

export default ElementsServices