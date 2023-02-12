import React,{useState, useEffect} from 'react'
import ElementsOrders from '../Tables/ElementsOrders'
import ElementsOrdersR from '../Tables/ElementsOrdersR'
import { useSelector, useDispatch } from 'react-redux'
import { OrdenesRepartidorData } from '../../services/actions/StoreData'
import Loader from '../../Loader'

const HomeRepartidor = () => {
  const dispatch = useDispatch();
  const products1=useSelector(state=>state.ordenRep.data)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    dispatch(OrdenesRepartidorData());
  }, [dispatch]);

  useEffect(() => {
    if (products1.length != 0) {
      setIsLoading(false)
    }
    else{
      setIsLoading(true)
    }
  }, [products1.length != 0])

  const products = products1
  console.log(products1)
  return (
    <div className='lg:w-4/5 lg:pt-5  lg:ml-60 w-full  mx-8 bg-gray-50 h-screen'>
      <div className=" -mx-8 h-full drop-shadow-lg table-container">

        <div className="flex-none  max-w-full lg:px-3 h-5gl lg:h-4gh table-container">
          <div className=" min-w-0 mb-6 break-words bg-white h-full border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border ">
            <div className="  mb-0 bg-white border-b-0 border-b-solid rounded-2xl h-full overflow-auto">

              <div className=' overflow-x-auto sm:flex grid grid-cols-1 pb-3' >
                <h6 className='pr-8 mx-auto text-xl'><strong>Ordenes</strong></h6>
                
              </div>
              <div className="p-0 overflow-x-auto overflow-y-scroll lg:h-2.5gl h-4gl">
                <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">ID</th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Total</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Pago</th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <ElementsOrdersR
                      products={product}

                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRepartidor