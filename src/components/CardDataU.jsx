import React from 'react'

const CardDataU = (props) => {
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 drop-shadow-lg">
    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
      <div className="flex-auto p-4">
        <div className="flex flex-row -mx-3">
          <div className="flex-none w-2/3 max-w-full px-3">
            <div>
              <p className="mb-0 font-sans font-semibold leading-normal text-sm">{props.titulo}</p>
              <h5 className="mb-0 font-bold">
                {props.cantidad}
                <span className="leading-normal text-sm font-weight-bolder text-lime-500">{props.porcentaje}</span>
              </h5>
            </div>
          </div>
          <div className="px-3 text-right basis-1/3">
            <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-green-100 to-green-20">
              <i className={props.icono}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardDataU