import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { NavLink } from 'react-router-dom';
import { postSpecialityApi } from '../../services/actions/StorePost';

const ModalAñadirEspecialidad = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
    });

    const [errors, setErrors] = useState({
        name: "",
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
                try {
                    dispatch(postSpecialityApi(formData))
                    setFormData({
                        name: "",
                    })
                }
                catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        icon: 'error',
                        text: "Porfavor, intenta de nuevo en unos momentos"
                    });
                }
            }

    };
    return (
        <div className='mx-auto w-1/4 my-20 z-50 '>
            <div className="inset-0 transition-opacity rounded-2xl">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <form className="bg-white p-6 rounded-2xl drop-shadow-2xl overflow-y-auto" onSubmit={handleSubmit}>

                <NavLink to="/doctors">
                    <button className="absolute top-0 right-0 p-4 text-black bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </NavLink>
                <h1 className='text-center pb-2'><strong>Ingreso de Especialidades</strong></h1>
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
                    
                </div>

                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4" >
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default ModalAñadirEspecialidad