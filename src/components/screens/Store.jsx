import React, { useState } from 'react';
import Empleados from '../Empleados';

const Store = () => {
  const [editing, setEditing] = useState(false);
  const [mission, setMission] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nobis maiores recusandae natus asperiores ducimus ab nisi quos error ipsam, suscipit eum. Quo, commodi dolorem! Alias, harum architecto? Doloribus, possimus.");
  const [vision, setVision] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis cupiditate commodi eveniet laboriosam voluptates quos magni culpa, nobis incidunt ullam necessitatibus non impedit id dolorem. Deleniti ducimus quae voluptates?");
  return (
    <div className="w-12/12 h-screen  mx-auto  transition-all duration-200 bg-gray-50 ">
      <div className=''>
        <div className='flex items-center justify-center pt-7 text-green-100 text-3xl'>
          <strong>Información de la tienda</strong>
        </div>
        <div className="w-full p-6 mx-auto flex bg-gray-50">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 xl:w-4/12 p-2 drop-shadow-lg">
              <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex flex-wrap -mx-0 pt-4 pb-1">
                  <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                    <h6 className="mb-0 text-slate-700"><strong>Objetivos de tienda</strong></h6>
                  </div>
                  <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                    <a href="javascript:;" onClick={() => setEditing(!editing)}>
                      <i className="leading-normal fas fa-pen-to-square text-xl text-slate-400" ></i>
                    </a>
                  </div>
                </div>
                <div className="flex-auto p-4">
                  <h6 className="font-bold leading-tight uppercase text-xs text-slate-500">Misión</h6>
                  <div>
                    {editing ? (
                      <textarea
                        className="border w-full p-2 rounded-lg resize-none"
                        rows="5"
                        value={mission}
                        onChange={e => setMission(e.target.value)}
                      />
                    ) : (
                      <div>{mission}</div>
                    )}
                  </div>
                  <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">Visión</h6>
                  <div>
                    {editing ? (
                      <textarea
                        className="border w-full p-2 rounded-lg resize-none"
                        rows="5"
                        value={vision}
                        onChange={e => setVision(e.target.value)}
                      />
                    ) : (
                      <div>{vision}</div>
                    )}
                  </div>
                  {editing && (
                    <button
                      className="bg-blue-500 text-white p-2 rounded-lg mt-4"
                      onClick={() => setEditing(false)}
                    >
                      Guardar
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 p-2 drop-shadow-lg ">
              <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                      <h6 className="mb-0 text-slate-700"><strong>Información de tienda</strong></h6>
                    </div>
                    <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                      <a href="javascript:;" data-target="tooltip_trigger" data-placement="top">
                        <i className="leading-normal fas fa-pen-to-square text-xl text-slate-400"></i>
                      </a>
                      <div data-target="tooltip" className="hidden px-2 py-1 text-center text-white bg-black rounded-lg text-sm" role="tooltip">
                        Edit Profile
                        <div className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-auto p-4 pt-4">
                  <h6 className="font-bold leading-tight uppercase text-xs text-slate-500">Descripción</h6>

                  <p className="leading-normal text-l pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim placeat consequuntur amet tenetur! Autem cumque, adipisci recusandae aspernatur expedita fugiat tempore veritatis explicabo molestias accusantium ea mollitia debitis eos a!</p>
                  <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
                  <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                    <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"><strong className="text-slate-700">Nombre:</strong> &nbsp; Kruger Med</li>
                    <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong className="text-slate-700">Telefono:</strong> &nbsp; (44) 123 1234 123</li>
                    <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong className="text-slate-700">Correo:</strong> &nbsp; KrugerMed@mail.com</li>
                    <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong className="text-slate-700">Dirección:</strong> &nbsp; USA</li>
                    <li className="relative block px-4 py-2 pb-0 pl-0 bg-white border-0 border-t-0 rounded-b-lg text-inherit">
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 p-2 drop-shadow-lg ">
              <div className=" min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                  <h6 className="mb-0 text-slate-700"><strong>Proveedores</strong></h6>
                </div>
                <div className=" p-4">
                  <ul className="  pl-0 mb-0 rounded-lg">
                    <Empleados nombre="medictin" venta="Medicinas" foto="./logo192.png" />
                    <Empleados nombre="Guantesino" venta="Guantes" foto="./logo192.png" />
                    <Empleados nombre="Mascaril" venta="Mascarillas" foto="./logo192.png" />
                    <Empleados nombre="Jeringuin" venta="Jeringas" foto="./logo192.png" />
                    <Empleados nombre="Suplentor" venta="Batas" foto="./logo192.png" />
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