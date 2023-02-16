import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { CategoryData, PromotionData } from '../../services/actions/StoreData';
import { postProductApi } from '../../services/actions/StorePost';
import Swal from "sweetalert2";
import { ProductsData } from '../../services/actions/StoreData';
import { uploadPromotionFile } from '../../firebaseConfig';
import { postPromotionApi } from '../../services/actions/StorePost';

const ModalAñadirPromocion = () => {
    const optionPromotions = [{id:1,name:"2x1"}, {id:2,name:"3x2"}];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProductsData());
      }, [dispatch]);
  
      const products1=useSelector(state=>state.products.data)
      const productDes = products1.filter(product => product.porcentajeDescuento !== 0)
      const productDes1 = productDes.filter(product => product.porcentajeDescuento ===null)
      const prod=productDes1.filter(product => product.promotion !==0)
      const prod1=prod.filter(product => product.promotion !==null)
      const [producto, setProducto]=useState({
        id: 0,
        name: "",
        description: "",
        stock: 0,
        pvp: 0,
        pvd: 0,
        image: "",
        brand: "",
        weight: 0,
        size: 0,
        porcentajeDescuento: 0,
        expiration: "",
        rating: null,
        promotion: 0,
        category: {
          id: 0,
          name: "",
          description: "",
          image: ""
        }
      })



      const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [foto,setphoto]=useState(null);
    const [promocion,setPromocion]=useState({
        name:"",
        id:"",
    })

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        endDate: "",
        startDate: "",
        promotionTypes:"",
        product:""
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        endDate: "",
        startDate: "",
        promotionTypes: "",
    });

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        setPromocion(optionPromotions.find((objeto)=>objeto.name===formData.promotionTypes))
        setProducto(prod1.find((objeto)=>objeto.id=== parseInt(formData.product)))
    };

    const validateForm = () => {
        let newErrors = { ...errors };
        Object.keys(formData).forEach(key => {
            if (!formData[key]) {
                newErrors = { ...newErrors, [key]: "Este campo es requerido" };
            }
            else{
                newErrors={ ...newErrors,[key]:""}
            }
        });
        setErrors(newErrors);

        return Object.values(newErrors).every(error => error === "");

    };

    const handleSubmit = async event => {
        event.preventDefault();
        if (validateForm()) {
            if(foto!=null){

                const result= await uploadPromotionFile(foto);
                const data = {
                    name: formData.name,
                    description: formData.description,
                    image: `${result}`,
                    startDate: formData.startDate,
                    endDate: formData.endDate,
                    promotionTypes: promocion,
                    product:producto
                }
                dispatch(postPromotionApi(data))
                dispatch(PromotionData())
                setError("")
            }
            else{
                setError("Debe tener una foto")
            }

        }
    };
    return (
        <div className='mx-auto w-1/3 my-10 z-50 '>
            <div className="inset-0 transition-opacity rounded-2xl">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <form className="bg-white p-6 rounded-2xl drop-shadow-2xl h-3gl overflow-y-auto" onSubmit={handleSubmit}>

                <NavLink to="/products">
                    <button className="absolute top-0 right-0 p-4 text-black bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </NavLink>
                <h1 className='text-center pb-2'><strong>Ingreso de Promociones</strong></h1>
                    <div className=''>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Nombre
                        </label>
                        <input
                            className="w-full border bg-white border-gray-400 p-2 rounded-md"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.name}</div>
                    </div>
                
                <label className="block text-gray-700 font-medium mb-2 mt-4">
                    Foto
                </label>
                <input
                    className="w-full border bg-white border-gray-400 p-2 rounded-md"
                    type="file"
                    name="photo"
                    onChange={e=>setphoto(e.target.files[0])}
                />
                <div className="text-red-500">{error}</div>
                
                <label className="block text-gray-700 font-medium mb-2 mt-4">
                    Tipo de Promoción
                </label>
                <select
                    className="w-full border border-gray-400 bg-white p-2 rounded-md"
                    name="promotionTypes"
                    value={formData.promotionTypes}
                    onChange={handleChange}
                >
                    <option value="" disabled>Seleccione una categoría</option>
                    {optionPromotions.map((item) => (
                        <option key={item.id} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <div className="text-red-500">{errors.promotionTypes}</div>
                <label className="block text-gray-700 font-medium mb-2 mt-4">
                    Producto
                </label>
                <select
                    className="w-full border border-gray-400 bg-white p-2 rounded-md"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                >
                    <option value="" disabled>Seleccione una categoría</option>
                    {prod1.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <div className="text-red-500">{errors.promotionTypes}</div>
                <div className='flex'>
                    <div className='pr-10'>
                        <label className="block bg-white text-gray-700 font-medium mb-2 mt-4">
                            Fecha de incio
                        </label>
                        <input
                            className="w-full border bg-white border-gray-400 p-2 rounded-md"
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.startDate}</div>
                    </div>
                    <div className='pr-10'>
                        <label className="block bg-white text-gray-700 font-medium mb-2 mt-4">
                            Fecha de finalisación
                        </label>
                        <input
                            className="w-full border bg-white border-gray-400 p-2 rounded-md"
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.endDate}</div>
                    </div>
                   
                </div>
                <label className="block text-gray-700 font-medium mb-2 mt-4">
                    Descripción
                </label>
                <textarea
                    className="w-full resize-none border bg-white border-gray-400 p-2 rounded-md"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                />
                <div className="text-red-500">{errors.description}</div>

                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4" >
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default ModalAñadirPromocion