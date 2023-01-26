import React from 'react'

const Empleados = (props) => {
  return (
    <div>
        <li class="relative flex items-center px-0 py-2 mb-2 bg-white border-0 rounded-t-lg text-inherit">
                    <div class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                      <img src={props.foto} alt="kal" class="w-full shadow-soft-2xl rounded-xl" />
                    </div>
                    <div class="flex flex-col items-start justify-center">
                      <h6 class="mb-0 leading-normal text-sm">{props.nombre}</h6>
                      <p class="mb-0 leading-tight text-xs">{props.venta}</p>
                    </div>
                    <a class="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-info-100 hover:text-info-100 hover:shadow-none active:scale-100" href="javascript:;">Detalles</a>
                  </li>
    </div>
  )
}

export default Empleados