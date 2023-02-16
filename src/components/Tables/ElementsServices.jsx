import React from 'react'
import { useDispatch } from 'react-redux';
import ModalServicio from '../shared/modales/ModalServicio';
import { deleteServicesApi } from '../../services/actions/StoreDelete';
import { ServiceData } from '../../services/actions/StoreData';

const ElementsServices = (props) => {
  const producto = props.services
  const dispatch = useDispatch();
  const especialidades=props.especialidad

  const handleDelete=()=>{
    dispatch(deleteServicesApi(producto.id))
    dispatch(ServiceData())
}

  return (
    <tr>
      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <div className="flex px-2 py-1">
          <div>
            <img src={producto.image} className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user1" />
          </div>
          <div className="flex flex-col justify-center">
            <h6 className="mb-0 leading-normal text-sm">{props.services.name}</h6>
          </div>
        </div>
      </td>

      <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
        <span className={`bg-gradient-to-tl  px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline uppercase leading-none `}>{props.services.specialty.name}</span>
      </td>
      <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
        <span className={`bg-gradient-to-tl  px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none `}>{props.services.price} $</span>
      </td>

      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <ModalServicio producto={producto} especialidad={especialidades} />
      </td>
      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <button  className="font-semibold leading-tight text-xs text-slate-400"  onClick={handleDelete}> Eliminar </button>
      </td>
    </tr>
  )
}

export default ElementsServices