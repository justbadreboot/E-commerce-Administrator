import React,{useState, useEffect} from 'react'
import ElementsFacturas from './ElementsFacturas'
import { FacturaData } from '../../services/actions/StoreData'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Loader'


const FacturaTable = () => {
  const dispatch = useDispatch();
  let products1=useSelector(state=>state.factura.data)
  useEffect(() => {
    dispatch(FacturaData());
    setFilteredProducts(products1);
  }, [dispatch]);
  useEffect(()=>{
    setFilteredProducts(products);
  },[products1]);
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    if (products1.length != 0) {
      setIsLoading(false)
    }
    else{
      setIsLoading(true)
    }
  }, [products1.length != 0])
    const products = products1
    
      const [searchValue, setSearchValue] = useState('')
      const [filteredProducts, setFilteredProducts] = useState(products1)
      const [selectedButton, setSelectedButton] = useState("Numero");
      const [selectedOption, setSelectedOption] = useState("Todos");
      const [selectedOptionstatus, setSelectedOptionstatus] = useState("Todos");
    
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
            productosCopia = prod.filter(product => product.nombre.includes(selectedOptionstatus))
          }
        }
        else {
          if (selectedOptionstatus === "Todos") {
            productosCopia = products;
            const prod = productosCopia
            productosCopia = prod.filter(product => product.fecha.includes(selectedOption))
          }
          else {
            productosCopia = products.filter(product => product.nombre.includes(selectedOptionstatus))
            const prod = productosCopia
            productosCopia = prod.filter(product => product.fecha.includes(selectedOption))
          }
        }
        if (selectedButton === "Numero") {
          setSearchValue(e.target.value)
          if (searchValue.length === 1 || searchValue.length === 0) {
            setFilteredProducts(productosCopia)
          } else {
            setFilteredProducts(productosCopia.filter(product => product.number.includes(searchValue)))
    
          }
        }
        else {
          setSearchValue(e.target.value)
          if (searchValue.length === 1 || searchValue.length === 0) {
            setFilteredProducts(productosCopia)
          } else {
            setFilteredProducts(productosCopia.filter(product => product.customerDocument.includes(searchValue)))
    
          }
        }
    
      }
      return (
        <div className='w-full px-6 mx-auto bg-gray-50 '>
          <div className=" -mx-3 drop-shadow-lg table-container">
    
            <div className="flex-none w-full h-full max-w-full px-3 table-container">
              <div className=" min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solnumber shadow-soft-xl rounded-2xl bg-clip-border ">
                <div className="p-6  mb-0 bg-white border-b-0 border-b-solnumber rounded-2xl h-3gl">
    
                  <div className=' overflow-x-auto sm:flex grnumber grnumber-cols-1 pb-3' >
                    <h6 className='pr-8'><strong>Facturas</strong></h6>
                    <div className="grnumber items-center w-8/12 grnumber-cols-1 grnumber-rows-2 sm:grnumber-cols-6 sm:flex">
                      <div className='pl-2'>
                        <span className="absolute z-50 text-sm leading-5.6  h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                          <i className="fas fa-search" aria-hnumberden="true"></i>
                        </span>
                        <input
                          className='pl-8 text-sm focus:shadow-soft-primary-outline ease-soft leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solnumber border-gray-300 bg-white py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-green-100 focus:outline-none focus:transition-shadow'
                          type="text"
                          placeholder="Numero o cedula"
                          value={searchValue}
                          onChange={handleSearch}
                        />
                      </div>
                      <div className='flex'>
                      <div className='sm:pl-5 pr-3'>
                        <button
                          className={`pl-3 pr-3 rounded-lg ${selectedButton === 'Numero' ? 'bg-green-100 text-white' : 'bg-gray-50'} shadow-inner`}
                          onClick={handleButtonClick}
                        >
                          <strong>
                            Numero
                          </strong>
                        </button>
                      </div>
                      <div className='pr-3'>
                        <button
                          className={`pr-3 pl-3 rounded-lg ${selectedButton === 'cedula' ? 'bg-green-100 text-white' : 'bg-gray-50'} shadow-inner`}
                          onClick={handleButtonClick}
                        >
                          <strong>
                            cedula
                          </strong>
                        </button>
                      </div>
                      </div> 
                    </div>
                  </div>
                  <div className="p-0 overflow-x-auto overflow-y-scroll h-2gl">
                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                      <thead className="align-bottom">
                        <tr>
                          <th className="px-6 py-3 font-bold text-left uppercase align-mnumberdle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solnumber tracking-none whitespace-nowrap text-slate-400 opacity-70">Número</th>
                          <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-mnumberdle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solnumber tracking-none whitespace-nowrap text-slate-400 opacity-70">Cedula</th>
                          <th className="px-6 py-3 font-bold text-center uppercase align-mnumberdle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solnumber tracking-none whitespace-nowrap text-slate-400 opacity-70">Cliente</th>
                          <th className="px-6 py-3 font-bold text-center uppercase align-mnumberdle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solnumber tracking-none whitespace-nowrap text-slate-400 opacity-70">Total</th>
                          <th className="px-6 py-3 font-semibold capitalize align-mnumberdle bg-transparent border-b border-gray-200 border-solnumber shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                        </tr>
                      </thead>
                      <tbody>
                      {!isLoading?( filteredProducts.map(product => (
                          <ElementsFacturas
                          products={product}
    
                          />
                          ))):(<Loader/>)}
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

export default FacturaTable