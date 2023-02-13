import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import Modal from '../shared/Modal';
import ModalFactura from '../shared/modales/ModalFactura';
import FacturaDetails from './FacturaDetails';
import { ClientData } from '../../services/actions/StoreData';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Loader';

const ElementsFacturas = (props) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false)

    const producto=props.products
    const dates = new Date(producto.date);
    const client = useSelector(state => state.direccionRep.clients)
    const year = dates.getFullYear();
    const month = (dates.getMonth() + 1).toString().padStart(2, "0");
    const day = dates.getDate().toString().padStart(2, "0");

    const dateString = `${year}-${month}-${day}`;

    useEffect(() => {
      dispatch(ClientData(producto.id));
    }, [dispatch]);
    useEffect(() => {
      if (client.length != 0) {
        setIsLoading(false)
      }
      else{
        setIsLoading(true)

      }
    }, [client.length != 0])
    return (

        <tr>
        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
          <div className="flex px-2 py-1">
            <div className="flex flex-col">
              <h6 className="mb-0 leading-normal text-sm font-bold">{props.products.number}</h6>
              <p className="mb-0 leading-tight text-xs text-slate-400">{dateString}</p>
            </div>
          </div>
        </td>

          <>
          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
          <p className="mb-0 leading-normal text-sm">{producto.customerDocument}</p>
        </td>
        <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
          <span className={`bg-gradient-to-tl px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none`}>{producto.customerName} {producto.customerLastName}</span>
        </td>
        </>

        
        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
          <span className="font-semibold leading-tight text-xs text-slate-400">{props.products.total} $</span>
        </td>
        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
          <FacturaDetails factura={producto} />
        </td>
      </tr>

  )
}

export default ElementsFacturas