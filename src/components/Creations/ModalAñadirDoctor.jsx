import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { EspecialidadData } from '../../services/actions/StoreData';
import { useSelector, useDispatch } from 'react-redux';
import { postDoctorApi } from '../../services/actions/StorePost';
import { uploadDoctorFile } from '../../firebaseConfig';

function validateNumber(value) {
    if (!/^\d+$/.test(value)) {
      return 'Solo números';
    }
    else{
        return "";
    }
  }

const ModalAñadirDoctor = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [photo,setPhoto] = useState(null)

    useEffect(() => {
        dispatch(EspecialidadData());
      }, [dispatch]);
      const especialidad=useSelector(state=>state.especialidad.data)


    const [formData, setFormData] = useState({
        name: "",
        lastName:"",
        phone: "",
        email: "",
        address: "",
        document: "",
        speciality: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        lastName:"",
        phone: "",
        email: "",
        address: "",
        speciality: ""
    });
    const [errorf,setErrorf]=useState("")

    function numeroChange(event){
        const { name, value } = event.target;
        const newFormData = { ...formData, [name]: value };
        setFormData(newFormData);
    
        const newErrors = { ...errors, [name]: validateNumber(value) };
        setErrors(newErrors);
    }

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
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
        if(photo == null){
            setErrors({
                image:"Necesita una foto"
            })
        }
        else{
            if (validateForm()) {
                const result= await uploadDoctorFile(photo);
                const data={
                    name: formData.name,
                    lastName:formData.lastName,
                    phone: formData.phone,
                    email: formData.email,
                    image: result,
                    address: formData.address,
                    document: formData.document,
                }
                dispatch(postDoctorApi(formData.speciality,data))
                setErrorf("")
                // Enviar datos del formulario a la API
            }
        }

    };
    return (
        <div className='mx-auto w-2/6  my-10 z-50'>
            <div className="inset-0 transition-opacity rounded-2xl">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <form className="bg-white p-6 rounded-2xl mx-auto my-auto drop-shadow-2xl h-3gl overflow-y-auto" onSubmit={handleSubmit}>

                <NavLink to="/doctors">
                    <button className="absolute top-0 right-0 p-4 text-black bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </NavLink>
                <h1 className='text-center pb-2'><strong>Ingreso de Doctores</strong></h1>
                <div className='flex'>
                    <div className='pr-8'>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Nombre:
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
                    <div className=''>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Apellido:
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.lastName}</div>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className='pr-10'>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Telefono:
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={numeroChange}
                        />
                        <div className="text-red-500">{errors.phone}</div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            correo:
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.email}</div>
                    </div>
                </div>
                <label className="block text-gray-700 font-medium mb-2 mt-4">
                    Foto
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    type="file"
                    name="image"
                    onChange={e=>setPhoto(e.target.files[0])}
                />
                <div className="text-red-500">{errorf}
                <div className=''>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Dirección:
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <div className="text-red-500">{errors.address}</div>
                    </div>
                
                </div>
                <div className='flex'>
                <div className='pr-10'>
                        <label className="block text-gray-700 font-medium mb-2 mt-4">
                            Cedula:
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md"
                            type="text"
                            name="document"
                            value={formData.document}
                            onChange={numeroChange}
                        />
                        <div className="text-red-500">{errors.document}</div>
                    </div>

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
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4" >
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default ModalAñadirDoctor