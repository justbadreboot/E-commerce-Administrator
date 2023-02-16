import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CategoryData } from '../../services/actions/StoreData';
import { uploadProductFile } from '../../firebaseConfig';
import { Connect } from 'react-redux';
import { postDataToApi } from '../../services/actions/StorePost';
import * as Yup from "yup";
import Swal from "sweetalert2";

const ModalAñadirCategoria = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(CategoryData());
    }, [dispatch]);

    const [isOpen, setIsOpen] = useState(false);
    const [foto,setphoto]=useState(null);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
    });
    const [error, setError] = useState("");
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
            if (foto != null) {
                const result = await uploadProductFile(foto);
                const data = {
                    name: formData.name,
                    description: formData.description,
                    image: `${result}`
                }

                try {
                    dispatch(postDataToApi(data))
                    setError("")
                }
                catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        icon: 'error',
                        text: "Porfavor, intenta de nuevo en unos momentos"
                    });
                }
            }
            else {
                setError("Debe tener una foto")
            }


        }
    };
    return (
        <div className='mx-auto my-10 w-2/6 z-50 '>
            <div className="inset-0 transition-opacity rounded-2xl">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <form className="bg-white p-6 rounded-2xl drop-shadow-2xl h-3gl overflow-y-auto" onSubmit={handleSubmit}>

                <NavLink to="/categories">
                    <button className="absolute top-0 right-0 p-4 text-black bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </NavLink>
                <h1 className='text-center pb-2'><strong>Ingreso de Categorias</strong></h1>
                    <div className=''>
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
                    
                
                <label className="block text-gray-700 font-medium mb-2 mt-4">
                    Foto
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    type="file"
                    name="photo"
                    onChange={e=>setphoto(e.target.files[0])}
                />
                <div className="text-red-500">{error}</div>
               
                
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

export default ModalAñadirCategoria