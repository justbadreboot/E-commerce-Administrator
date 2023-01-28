import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import ModalCrearProducto from '../Creations/ModalCrearProducto'
import ElementsProducts from '../Tables/ElementsProducts'
import ElementsServices from '../Tables/ElementsServices'

const Services = () => {
  const products = [
    { foto: "./logo192.png", nombre: "Inyecciones", doctor: "Analgésico", precio: "130", especialidad: "bayern"},
    { foto: "./logo192.png", nombre: "Ibuprofeno", doctor: "Patología", precio: "130", especialidad: "meditin" },
    { foto: "./logo192.png", nombre: "Arten", doctor: "Corticoides", precio: "130", especialidad: "bayern"},
    { foto: "./logo192.png", nombre: "Ibuprofeno", doctor: "AINE", precio: "130", especialidad: "Carlos Herrera" },
    { foto: "./logo192.png", nombre: "Ibuprofeno", doctor: "AINE", precio: "130", especialidad: "meditin"},
    { foto: "./logo192.png", nombre: "Ibuprofeno", doctor: "AINE", precio: "130", especialidad: "meditin" },
    { foto: "./logo192.png", nombre: "Ibuprofeno", doctor: "AINE", precio: "130", especialidad: "meditin" },
    { foto: "./logo192.png", nombre: "Ibuprofeno", doctor: "AINE", precio: "130", especialidad: "meditin"},
    { foto: "./logo192.png", nombre: "Ibuprofeno", doctor: "AINE", precio: "130", especialidad: "meditin" },

  ]

  const [searchValue, setSearchValue] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedButton, setSelectedButton] = useState("Nombre");
  const options = ["Todos", "Analgésico", "AINE", "Corticoides", "Patología"];
  const [selectedOption, setSelectedOption] = useState("Todos");
  const optionsstatus = ["Todos", "Ingerible", "Por Expirar", "Expirado"];
  const [selectedOptionstatus, setSelectedOptionstatus] = useState("Todos");

  const handleChangestatus = (event) => {
    let productCopia = null
    if (searchValue.length >= 2) {
      if (selectedButton == "Nombre") {
        productCopia = products.filter(product => product.nombre.includes(searchValue))
      }
      else {
        productCopia = products.filter(product => product.doctor.includes(searchValue))
      }

      setSelectedOptionstatus(event.target.value);

      if (selectedOption !== "Todos") {
        productCopia = productCopia.filter(product => product.especialidad.includes(selectedOption))
      }
      console.log(productCopia)
      if (event.target.value === "Todos") {
        setFilteredProducts(productCopia)
      }
      else {
        const estado = event.target.value;
        setFilteredProducts(productCopia.filter(product => product.caducidad.includes(estado)))
      }
    }
    else {
      setSelectedOptionstatus(event.target.value);

      if (selectedOption === "Todos") {
        productCopia = products
      }
      else {
        productCopia = products.filter(product => product.especialidad.includes(selectedOption))
      }
      console.log(productCopia)
      if (event.target.value === "Todos") {
        setFilteredProducts(productCopia)
      }
      else {
        const estado = event.target.value;
        setFilteredProducts(products.filter(product => product.caducidad.includes(estado)))
      }
    }

  }

  const handleChange = (event) => {
    let productCopia;
    if (searchValue.length >= 2) {
      if (selectedButton == "Nombre") {
        productCopia = products.filter(product => product.nombre.includes(searchValue))
      }
      else {
        productCopia = products.filter(product => product.doctor.includes(searchValue))
      }

      setSelectedOption(event.target.value);

      if (selectedOptionstatus !== "Todos") {
        productCopia = productCopia.filter(product => product.caducidad.includes(selectedOptionstatus))
      }
      if (event.target.value === "Todos") {
        setFilteredProducts(productCopia)
      }
      else {
        const elementos = event.target.value;
        setFilteredProducts(productCopia.filter(product => product.especialidad.includes(elementos)))
      }
    }
    else {
      setSelectedOption(event.target.value);

      if (selectedOptionstatus === "Todos") {
        productCopia = products
      }
      else {
        productCopia = products.filter(product => product.caducidad.includes(selectedOptionstatus))
      }
      if (event.target.value === "Todos") {
        setFilteredProducts(productCopia)
      }
      else {
        const elementos = event.target.value;
        setFilteredProducts(productCopia.filter(product => product.especialidad.includes(elementos)))
      }
    }

  }

  const handleButtonClick = (e) => {
    const buttonName = e.target.innerText;
    setSelectedButton(buttonName);

  }

  const handleSearch = (e) => {
    let productosCopia;
    if (selectedOption === "Todos") {
      productosCopia = products;
      if (selectedOptionstatus !== "Todos") {
        const prod = productosCopia
        productosCopia = prod.filter(product => product.caducidad.includes(selectedOptionstatus))
      }
    }
    else {
      if (selectedOptionstatus === "Todos") {
        productosCopia = products;
        const prod = productosCopia
        productosCopia = prod.filter(product => product.especialidad.includes(selectedOption))
      }
      else {
        productosCopia = products.filter(product => product.caducidad.includes(selectedOptionstatus))
        const prod = productosCopia
        productosCopia = prod.filter(product => product.especialidad.includes(selectedOption))
      }
    }
    if (selectedButton === "Nombre") {
      setSearchValue(e.target.value)
      console.log(searchValue.length)
      console.log(searchValue)
      if (searchValue.length === 1 || searchValue.length === 0) {
        setFilteredProducts(productosCopia)
      } else {
        setFilteredProducts(productosCopia.filter(product => product.nombre.includes(searchValue)))

      }
    }
    else {
      setSearchValue(e.target.value)
      console.log(searchValue.length)
      console.log(searchValue)
      if (searchValue.length === 1 || searchValue.length === 0) {
        setFilteredProducts(productosCopia)
      } else {
        setFilteredProducts(productosCopia.filter(product => product.doctor.includes(searchValue)))

      }
    }

  }
  return (
    <div className='w-4/5 h-full px-6 py-6 mx-auto bg-gray-50 '>
      <div className=" -mx-3 drop-shadow-lg table-container">

        <div className="flex-none w-full h-full max-w-full px-3 table-container">
          <div className=" min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border ">
            <div className="p-6  mb-0 bg-white border-b-0 border-b-solid rounded-2xl h-3gl">

              <div className=' overflow-x-auto sm:flex grid grid-cols-1 pb-3' >
                <h6 className='pr-8'><strong>Servicios</strong></h6>
                <div className="grid items-center w-8/12 grid-cols-1 grid-rows-2 sm:grid-cols-6 sm:flex">
                  <div className='pl-2'>
                    <span className="absolute z-50 text-sm leading-5.6  h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                      <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                    <input
                      className='pl-8 text-sm focus:shadow-soft-primary-outline ease-soft leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-green-100 focus:outline-none focus:transition-shadow'
                      type="text"
                      placeholder="Nombre o doctor"
                      value={searchValue}
                      onChange={handleSearch}
                    />
                  </div>
                  <div className='flex'>
                  <div className='sm:pl-5 pr-3'>
                    <button
                      className={`pl-3 pr-3 rounded-lg ${selectedButton === 'Nombre' ? 'bg-green-100 text-white' : 'bg-gray-50'} shadow-inner`}
                      onClick={handleButtonClick}
                    >
                      <strong>
                        Nombre
                      </strong>
                    </button>
                  </div>
                  <div className='pr-3'>
                    <button
                      className={`pr-3 pl-3 rounded-lg ${selectedButton === 'Especialidad' ? 'bg-green-100 text-white' : 'bg-gray-50'} shadow-inner`}
                      onClick={handleButtonClick}
                    >
                      <strong>
                        Especialidad
                      </strong>
                    </button>
                  </div>
                  </div>
                  <div className='flex'>

                  <div className='pr-3'>
                    <select value={selectedOption} onChange={handleChange} className={`pr-3 pl-3 rounded-lg  bg-gray-50 shadow-inner`}>
                      {options.map((option) => (
                        <option className='bg-white border-transparent ' key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className='w-8/12'>
                  <NavLink to="crearServicio"><i class="fa-solid fa-heart-circle-plus"></i></NavLink>
                  </div>    
                  </div>      
                </div>
              </div>
              <div className="p-0 overflow-x-auto overflow-y-scroll h-2gl">
                <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Servicio</th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Especialidad</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Precio</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Doctor</th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map(product => (
                      <ElementsServices
                      services={product}

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

export default Services