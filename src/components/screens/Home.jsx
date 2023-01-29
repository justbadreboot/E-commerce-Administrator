import React from 'react';
import CardDataU from '../CardDataU';
import BarCard from '../statisctics/BarCard';
import LineChart from '../statisctics/LineChart';

const Home = () => {

  return (
    <div className='w-4/5 ml-60'>
    <div className=" w-full h-screen py-6 mx-auto bg-gray-50 ">
      <div className="flex flex-wrap -mx-3 bg-gray-50">
        <CardDataU
          titulo="Today's Money"
          cantidad="$53,000"
          porcentaje="+55%"
          icono="fa-solid fa-sack-dollar text-lg relative top-3.5 text-white ni leading-none"
        />
        <CardDataU
          titulo="Today's Users"
          cantidad="2,300"
          porcentaje="+3%"
          icono="fa-solid fa-solid fa-users text-lg relative top-3.5 text-white ni leading-none"
        />
        <CardDataU
          titulo="New Clients"
          cantidad="+3,462"
          porcentaje="-2%"
          icono="fa-solid fa-regular fa-money-bill-trend-up text-lg relative top-3.5 text-white ni leading-none"
        />
        <CardDataU
          titulo="Sales"
          cantidad="$103,430"
          porcentaje="+5%"
          icono="fa-solid fa-regular fa-money-bill-trend-up text-lg relative top-3.5 text-white ni leading-none"
        />
      </div>
      <div class="flex flex-wrap mt-6 -mx-3 bg-gray-50">
        <BarCard />
        <div class="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none drop-shadow-lg">
            <div class="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
              <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                <h6>Sales overview</h6>
                <p class="leading-normal text-sm">
                </p>
              </div>
              <div class="flex-auto p-4">
                <div>
                  <LineChart/>
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
