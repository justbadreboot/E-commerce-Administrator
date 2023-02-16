import React,{useState} from 'react'
import { deletePromotionApi } from '../../services/actions/StoreDelete';
import { PromotionData } from '../../services/actions/StoreData';
import { useDispatch } from 'react-redux';

const ElementsPromotions = (props) => {
    const dispatch = useDispatch();

    let colorClass = '';
    const producto=props.products
    const handleDelete=()=>{
        dispatch(deletePromotionApi(producto.id))
        dispatch(PromotionData())
    }
    const categorias=props.categorias
    switch (producto.expiracion) {
        case 'Ingerible':
            colorClass = 'from-success-100 to-success-60 broder rounded-lg p-1';
            break;
        case 'Expirado':
            colorClass = 'from-error-100 to-error-80 broder rounded-lg p-1';
            break;
        case 'Por Expirar':
            colorClass = 'from-warning-100 to-warning-80 broder rounded-lg p-1';
            break;
        default:
            colorClass = '';
    }
    const dates = new Date(producto.startDate);

    const year = dates.getFullYear();
    const month = (dates.getMonth() + 1).toString().padStart(2, "0");
    const day = dates.getDate().toString().padStart(2, "0");

    const dateString = `${year}-${month}-${day}`;
    const dates1 = new Date(producto.endDate);

    const year1 = dates1.getFullYear();
    const month1 = (dates1.getMonth() + 1).toString().padStart(2, "0");
    const day1 = dates1.getDate().toString().padStart(2, "0");

    const dateString1 = `${year1}-${month1}-${day1}`;

    return (

        <tr>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <div className="flex px-2 py-1">
                    <div>
                        <img src={producto.image} className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user1" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h6 className="mb-0 leading-normal text-sm">{producto.name}</h6>
                        <p className="mb-0 leading-tight text-xs text-slate-400">{producto.promotionTypes.name}</p>
                    </div>
                </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <p className="mb-0 font-semibold leading-tight text-xs">{dateString}</p>
        <p className="mb-0 leading-tight text-xs text-slate-400">{producto.brand}</p>
      </td>
      <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
      <p className="mb-0 font-semibold leading-tight text-xs">{dateString1}</p>
      </td>
      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400" onClick={handleDelete}> Eliminar </a>
      </td>
        </tr>

  )
}

export default ElementsPromotions