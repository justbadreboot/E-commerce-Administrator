import React,{useState} from 'react'
import ElementsProducts from '../Tables/ElementsProducts'

const Products = () => {
  const products = [
    { foto: "./logo192.png", nombre: "Paracetamol", categoria: "Analgésico", stock: "130", marca: "bayern", caducidad: "Ingerible", peso: "600" },
    { foto: "./logo192.png", nombre: "Ibuprofeno", categoria: "AINE", stock: "130", marca: "bayern", caducidad: "Por Expirar", peso: "600" },
    { foto: "./logo192.png", nombre: "Arten", categoria: "Corticoides", stock: "130", marca: "bayern", caducidad: "Expirado", peso: "600" }]

  const [searchValue, setSearchValue] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedButton, setSelectedButton] = useState("Todos");
  const options = ["Todos","Analgésico", "AINE", "Corticoides"];
  const [selectedOption, setSelectedOption] = useState("Todos");
  const optionsstatus = ["Todos","Ingerible","Por Expirar", "Expirado"];
  const [selectedOptionstatus, setSelectedOptionstatus] = useState("Todos");

  const handleChangestatus = (event) => {
    setSelectedOptionstatus(event.target.value);
    let productCopia=null
    if(selectedOption==="Todos"){
      productCopia=products
    }
    else{
      productCopia=products.filter(product=>product.categoria.includes(selectedOption))
    }
    console.log(productCopia)
    if(event.target.value==="Todos"){
      setFilteredProducts(productCopia)
    }
    else{
      const estado=event.target.value;
      setFilteredProducts(products.filter(product=>product.caducidad.includes(estado)))
    }
}

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    let productCopia;
    if(selectedOptionstatus==="Todos"){
      productCopia=products
    }
    else{
      productCopia=products.filter(product=>product.caducidad.includes(selectedOptionstatus))
    }
    if(event.target.value==="Todos"){
      setFilteredProducts(productCopia)
    }
    else{
      const elementos=event.target.value;
      setFilteredProducts(productCopia.filter(product=>product.categoria.includes(elementos)))
    }
}

  const handleButtonClick = (e) => {
    const buttonName = e.target.innerText;
    setSelectedButton(buttonName);

  }

  const handleSearch = (e) => {

  }
  return (
    <div className='w-screen h-screen px-6 py-6 mx-auto bg-gray-50'>
      <div className="flex flex-wrap -mx-3 drop-shadow-lg">

        <div className="flex-none w-full max-w-full px-3 ">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border ">
            <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <div className='flex'>
                <h6 className='pr-8'><strong>Productos</strong></h6>
                <div className="relative flex items-center w-6/12">
                  <span className="absolute z-50 text-sm leading-5.6 flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </span>
                  <input
                    className='pl-8 text-sm focus:shadow-soft-primary-outline ease-soft leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-green-100 focus:outline-none focus:transition-shadow'
                    type="text"
                    placeholder="Nombre, categoría o marca"
                    value={searchValue}
                    onChange={handleSearch}
                  />

                    <div className='pl-5 pr-3'>
                      <button
                        className={`pl-3 pr-3 rounded-lg ${selectedButton === 'Todos' ? 'bg-green-100 text-white' : 'bg-gray-50'} shadow-inner`}
                        onClick={handleButtonClick}
                      >
                        <strong>
                        Todos
                        </strong>
                      </button>
                    </div>
                    <div className='pr-3'>
                      <button
                        className={`pr-3 pl-3 rounded-lg ${selectedButton === 'Marca' ? 'bg-green-100 text-white' : 'bg-gray-50'} shadow-inner`}
                        onClick={handleButtonClick}
                      >
                        <strong>
                        Marca
                        </strong>
                      </button>
                    </div>
                    <div>
                      <select value={selectedOptionstatus} onChange={handleChangestatus} className={`pr-3 pl-3 rounded-lg  bg-gray-50 shadow-inner`}>
                        {optionsstatus.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                  </div>
                  <div>
                      <select value={selectedOption} onChange={handleChange} className={`pr-3 pl-3 rounded-lg  bg-gray-50 shadow-inner`}>
                        {options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                  </div>
                </div>
              </div>
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Producto</th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Stock/Marca</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Peso</th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                      </tr>
                    </thead>
                    <tbody>
                    {filteredProducts.map(product => (
            <ElementsProducts
              key={product.id}
              foto={product.foto}
              nombre={product.nombre}
              categoria={product.categoria}
              stock={product.stock}
              marca={product.marca}
              caducidad={product.caducidad}
              peso={product.peso}
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

export default Products