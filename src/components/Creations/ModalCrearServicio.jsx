import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { EspecialidadData, ServiceData } from '../../services/actions/StoreData';
import { uploadServicesFile } from '../../firebaseConfig';
import { postServicesApi } from '../../services/actions/StorePost';

const ModalCrearServicio = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [photo,setPhoto]=useState(null)
    const [error,setError]=useState(false)

    useEffect(() => {
        dispatch(EspecialidadData());
      }, [dispatch]);
      const especialidad=useSelector(state=>state.especialidad.data)

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        speciality:""
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        price: "",
        speciality:""
    });
    const [fotoError,setFotoError]=useState("")

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const validateForm = () => {
        console.log(formData.description)
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
        console.log(  Object.values(newErrors))
        return Object.values(newErrors).every(error => error === "");
    };

    const handleSubmit= async event => {
        event.preventDefault();
        validateForm()
        console.log(photo)
        if(photo == null){
            setFotoError("Necesita una imagen")
        }
        else{
            setFotoError("")
            console.log(formData.description)

            if ( validateForm()) {
                const result= await uploadServicesFile(photo);
                const data={
                    name: formData.name,
                    description: formData.description,
                    price: formData.price,
                    image:result,
                    speciality:formData.speciality
                }
                dispatch(postServicesApi(formData.speciality,data))
                dispatch(ServiceData());
                setPhoto(null)
                setFormData({
                    name: "",
                    description: "",
                    price: "",
                    speciality:""
                })
                // Enviar datos del formulario a la API
            }
        }

    };
    return (
        <div className='mx-auto my-10 w-2/5 z-50'>
            <div className="inset-0 transition-opacity rounded-2xl">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <form className="bg-white p-6 rounded-2xl drop-shadow-2xl h-3gl overflow-y-auto" onSubmit={handleSubmit}>

                <NavLink to="/services">
                    <button className="absolute top-0 right-0 p-4 text-black bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </NavLink>
                <h1 className='text-center pb-2'><strong>Ingreso de Servicios</strong></h1>
                <div className='flex'>
                    <div className='pr-10'>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Nombre de servicio:
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
                            Precio
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.price}</div>
                    </div>
                </div>
                <label className="block text-gray-700 font-medium mb-2 mt-4">
                    Foto
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    type="file"
                    name="photo"
                    value={photo}
                    onChange={e=>setPhoto(e.target.files[0])}
                />
                <div className="text-red-500">{fotoError}</div>
                <div className=''>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Especialidad:
                        </label>
                        <select
                            className="w-full border border-gray-400 bg-white p-2 rounded-md"
                            name="speciality"
                            value={formData.speciality}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Seleccione una especialidad</option>
                            {especialidad.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <div className="text-red-500">{errors.speciality}</div>
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

export default ModalCrearServicio