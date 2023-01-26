import React from 'react';
import Empleados from '../Empleados';

const Store = () => {
  return (
    <div className="w-10/12 ease-soft-in-out xl:ml-68.5  bg-gray-50 transition-all duration-200">
      <div className=''>
        <div className='flex items-center justify-center pt-10 text-green-100 text-3xl'>
        <strong>Información de la tienda</strong>
        </div>
        <div class="w-full p-6 mx-auto block">
          <div class="flex flex-wrap -mx-3">
            <div class="w-full max-w-full px-3 xl:w-4/12 p-2 drop-shadow-lg">
              <div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="flex flex-wrap -mx-0 pt-4 pb-1">
                  <div class="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                    <h6 class="mb-0 text-slate-700"><strong>Objetivos de tienda</strong></h6>
                  </div>
                  <div class="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                    <a href="javascript:;" data-target="tooltip_trigger" data-placement="top">
                      <i class="leading-normal fas fa-pen-to-square text-xl text-slate-400"></i>
                    </a>
                    <div data-target="tooltip" class="hidden px-2 py-1 text-center text-white bg-black rounded-lg text-sm" role="tooltip">
                      Edit Profile
                      <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow></div>
                    </div>
                  </div>
                </div>
                <div class="flex-auto p-4">
                  <h6 class="font-bold leading-tight uppercase text-xs text-slate-500">Misión</h6>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nobis maiores recusandae natus asperiores ducimus ab nisi quos error ipsam, suscipit eum. Quo, commodi dolorem! Alias, harum architecto? Doloribus, possimus.</div>
                  <h6 class="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">Visión</h6>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis cupiditate commodi eveniet laboriosam voluptates quos magni culpa, nobis incidunt ullam necessitatibus non impedit id dolorem. Deleniti ducimus quae voluptates?</div>
              </div>
            </div>
          </div>
          <div class="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 p-2 drop-shadow-lg">
            <div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <div class="flex flex-wrap -mx-3">
                  <div class="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                    <h6 class="mb-0 text-slate-700"><strong>Información de tienda</strong></h6>
                  </div>
                  <div class="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                    <a href="javascript:;" data-target="tooltip_trigger" data-placement="top">
                    <i class="leading-normal fas fa-pen-to-square text-xl text-slate-400"></i>
                    </a>
                    <div data-target="tooltip" class="hidden px-2 py-1 text-center text-white bg-black rounded-lg text-sm" role="tooltip">
                      Edit Profile
                      <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-auto p-4">
                <p class="leading-normal text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim placeat consequuntur amet tenetur! Autem cumque, adipisci recusandae aspernatur expedita fugiat tempore veritatis explicabo molestias accusantium ea mollitia debitis eos a!</p>
                <hr class="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                  <li class="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"><strong class="text-slate-700">Nombre:</strong> &nbsp; Kruger Med</li>
                  <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-700">Telefono:</strong> &nbsp; (44) 123 1234 123</li>
                  <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-700">Correo:</strong> &nbsp; KrugerMed@mail.com</li>
                  <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-700">Dirección:</strong> &nbsp; USA</li>
                  <li class="relative block px-4 py-2 pb-0 pl-0 bg-white border-0 border-t-0 rounded-b-lg text-inherit">
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 p-2 drop-shadow-lg ">
            <div class=" min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                  <h6 class="mb-0 text-slate-700"><strong>Proveedores</strong></h6>
                </div>
                <div class=" p-4">
                  <ul class="  pl-0 mb-0 rounded-lg">
                    <Empleados nombre="medictin" venta="Medicinas" foto="./logo192.png" />
                    <Empleados nombre="Guantesino" venta="Guantes" foto="./logo192.png" />
                    <Empleados nombre="Mascaril" venta="Mascarillas" foto="./logo192.png" />
                    <Empleados nombre="Jeringuin" venta="Jeringas" foto="./logo192.png" />
                    <Empleados nombre="Suplentor" venta="Batas" foto="./logo192.png" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Store; 