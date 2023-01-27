import React,{useState} from 'react'

const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    <button className="font-semibold leading-tight text-xs text-slate-400" onClick={() => setIsOpen(true)}>
      Detalles
    </button>
    {isOpen && (
      <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-3 sm:p-0 sm:flex z-50">
        <div className="inset-0 transition-opacity rounded-2xl">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className='mx-auto my-auto'>
        <div className="relative bg-white p-6 rounded-lg pt-10">
          <button className="absolute top-0 right-0 p-1 text-black bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100" onClick={() => setIsOpen(false)}>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className='mx-auto my-auto'>
          <img src={props.producto.foto}/>
          <p>Nombre: {props.producto.nombre}</p>
          <p>Categoria: {props.producto.categoria}</p>
          <div className='flex'>
          <p className='pr-4'>Stock: {props.producto.stock}</p>
          <p>Peso: {props.producto.peso}</p>
          </div>
          <p>Descripción:</p>
          <p>{props.producto.descripcion}</p>
          <p>Marca: {props.producto.marca}</p>
          <div className='flex'>
          <p className='pr-4'>Precio1: ${props.producto.pvp}</p>
          <p>Precio2: ${props.producto.pvd}</p>
          </div>
          <button>Editar</button>
          </div>
        </div>
      </div>
      </div>
    )}
  </div>
);
}

export default Modal