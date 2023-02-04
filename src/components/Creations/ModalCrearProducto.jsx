import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { CategoryData } from '../../services/actions/StoreData';
import { uploadProductFile } from '../../firebaseConfig';

const ModalCrearProducto = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(CategoryData());
    }, [dispatch]);

    const category=useSelector(state=>state.category.data)
    const [isOpen, setIsOpen] = useState(false);
    const [foto,setphoto]=useState(null);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        stock: "",
        price1: "",
        price2: "",
        photo: null,
        brand: "",
        weight: "",
        category: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        stock: "",
        price1: "",
        price2: "",
        photo: "",
        brand: "",
        weight: "",
        category: ""
    });

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const validateForm = () => {
        let newErrors = { ...errors };
        Object.keys(formData).forEach(key => {
            if (!formData[key]) {
                newErrors = { ...newErrors, [key]: "Este campo es requerido" };
            }
        });
        setErrors(newErrors);
        return Object.values(newErrors).every(error => error === "");
    };

    const handleSubmit = async event => {
        event.preventDefault();

        const result= await uploadProductFile(foto);
        console.log(result)
        /*if (validateForm()) {
        }*/
    };
    return (
        <div className='mx-auto my-10 z-50 '>
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
                <h1 className='text-center pb-2'><strong>Ingreso de Productos</strong></h1>
                <div className='flex'>
                    <div className='pr-10'>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Nombre
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.name}</div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Cantidad
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.stock}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='pr-10'>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            PVP
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="number"
                            name="price1"
                            value={formData.price1}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.price1}</div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            PVD
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="number"
                            name="price2"
                            value={formData.price2}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.price2}</div>
                    </div>
                </div>
                <label className="block text-gray-700 font-medium mb-2 mt-4">
                    Foto
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    type="file"
                    name="photo"
                    onChange={e=>setphoto(e.target.files[0])}
                />
                <div className="text-red-500">{errors.photo}</div>
                <div className='flex'>
                    <div className='pr-10'>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Marca
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="text"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.brand}</div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Peso
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.weight}</div>
                    </div>
                </div>
                <label className="block text-gray-700 font-medium mb-2 mt-4">
                    Categoría
                </label>
                <select
                    className="w-full border border-gray-400 bg-white p-2 rounded-md"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="" disabled>Seleccione una categoría</option>
                    {category.map((item) => (
                        <option key={item.id} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <div className="text-red-500">{errors.category}</div>
                <div className='flex'>
                    <div className='pr-10'>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Expiración
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="text"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.brand}</div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Tamaño
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.weight}</div>
                    </div>
                </div>
                <label className="block text-gray-700 font-medium mb-2 mt-4">
                    Descripción
                </label>
                <textarea
                    className="w-full resize-none border border-gray-400 p-2 rounded-md"
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

export default ModalCrearProducto