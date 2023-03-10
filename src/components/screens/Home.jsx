import React,{useEffect} from 'react';
import CardDataU from '../CardDataU';
import BarCard from '../statisctics/BarCard';
import LineChart from '../statisctics/LineChart';
import { useSelector, useDispatch } from 'react-redux'
import { StatisticsData } from '../../services/actions/StoreData';


const Home = () => {
  const dispatch = useDispatch();
  const clients=useSelector(state=>state.statistics.Tuser)
  const month=useSelector(state=>state.statistics.Fmonth)
  const day=useSelector(state=>state.statistics.Ftoday)
  const todayInvoice=useSelector(state=>state.statistics.FcountT)
  const Monthlich=useSelector(state=>state.statistics.Month)
  const Weeks=useSelector(state=>state.statistics.Weeks)

  const dia=day.toFixed(2)
  const mes=month.toFixed(2)
  useEffect(() => {
    dispatch(StatisticsData());
  }, [dispatch]);

  return (
    <div className='lg:w-4/5 lg:ml-60 w-11/12 h-full mx-10 bg-gray-50 '>
    <div className=" w-full h-full py-6 mx-auto bg-gray-50 ">
      <div className="flex flex-wrap justify-center -mx-3 bg-gray-50">
        <CardDataU
          titulo="Rentabilidad Diaria"
          cantidad={`${dia}`}
          porcentaje=" $"
          icono="fa-solid fa-sack-dollar text-lg relative top-3.5 text-white ni leading-none"
        />
        <CardDataU
          titulo="Clientes"
          cantidad={`${clients}`}
          porcentaje=" Clientes"
          icono="fa-solid fa-solid fa-users text-lg relative top-3.5 text-white ni leading-none"
        />
        <CardDataU
          titulo="Rentabilidad Mensual"
          cantidad={`${mes}`}
          porcentaje=" $"
          icono="fa-solid fa-regular fa-money-bill-trend-up text-lg relative top-3.5 text-white ni leading-none"
        />
                <CardDataU
          titulo="Entregas del día"
          cantidad={`${todayInvoice}`}
          porcentaje=" Entregas"
          icono="fa-solid fa-regular fa-money-bill-trend-up text-lg relative top-3.5 text-white ni leading-none"
        />
      </div>
      <div className="flex flex-wrap mt-6 -mx-3 ">
        <BarCard  Monthlich={Monthlich} />
        <div className="w-full max-w-full px-3 mt-0 lg:w-7/12  lg:flex-none drop-shadow-lg">
            <div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
              <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                <h6>Diferencia de ventas</h6>
                <p className="leading-normal text-sm">
                </p>
              </div>
              <div className="flex-auto p-4 ">
                <div>
                  <LineChart Weeks={Weeks}/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Home
