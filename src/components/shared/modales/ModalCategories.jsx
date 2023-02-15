import React,{useState} from 'react'
import { uploadProductFile } from '../../../firebaseConfig';
import axios from 'axios';

const ModalCategories = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(props.producto.name);
    const [id, setId]=useState(props.producto.id)
    const [foto,setFoto]=useState(false)
    const [imagen, setImage] = useState(props.producto.image);
    const [weight, setWeight] = useState(props.producto.peso);
    const [category, setCategory] = useState(props.producto.categoria);
    const [stock, setStock] = useState(props.producto.stock);
    const [description, setDescription] = useState(props.producto.description);
    const [brand, setBrand] = useState(props.producto.marca);
    const [price1, setPrice1] = useState(props.producto.precio1);
    const [price2, setPrice2] = useState(props.producto.precio2);
    const handleEdit = () => {
        setEditing(true);
    };
    const handlePhoto=(e)=>{
        setImage(e.target.files[0])
        setFoto(true)
    }
    let borderclass=''
    let editImage=''

    if(editing){
        borderclass='border border-black'
        editImage=''
    }
    else{
        borderclass=''
        editImage='hidden'
    }

    const handleSave = async event => {
        setEditing(false);
        let image
        if(foto===true){
            const result= await uploadProductFile(imagen);
            image=result
        }
        else{
            image=imagen
        }
        setImage(image)
        const token = localStorage.getItem('token');
        const api = axios.create({
          baseURL: 'https://api-gateway-production-d841.up.railway.app/api',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        api.put(`/admin/category/${id}`, {
            description,
            image,
            name
        })
        .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.error(err);
          });
        //onSave({ imagen, weight, category, stock, description, brand, price1, price2 });
    };
    return (
        <div>
            <button className="font-semibold leading-tight text-xs text-slate-400" onClick={() => setIsOpen(true)}>
                Detalles
            </button>
            {isOpen && (
                <div className="fixed bottom-0 inset-x-0  pb-6 sm:inset-3 sm:p-0 sm:flex z-50">
                    <div className="inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75 rounded-lg"></div>
                    </div>
                    <div className='mx-auto w-3/5 my-auto'>
                        <div className="relative pb-5 bg-white  mx-auto my-auto  rounded-lg pt-5">
                            <button className="absolute top-0 right-0 p-1 text-black bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100" onClick={() => setIsOpen(false)}>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div className="max-auto">
                                <div className="w-2/3 mx-auto">
                                    <div className='mx-auto w-1/3'>
                                        <input
                                            type="text"
                                            className={`form-input w-4/5 mx-auto justify-center font-bold ${borderclass}`}
                                            value={name}
                                            disabled={!editing}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-1/3 mx-auto">
                                        <img src={`${imagen}`} className='w-2/3' />
                                        <label className={`flex items-center justify-center cursor-pointer w-2/3 ${editImage}`}>
                                            <i className="fa-solid fa-pen-to-square text-gray-500 text-xl"></i>
                                            <input
                                                type="file"
                                                accept="imagen/*"
                                                className="hidden"
                                                disabled={!editing}
                                                onChange={handlePhoto}
                                            />
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="w-9/12 mx-auto">

                                    <div className="w-4/5">
                                        <label className="block font-medium text-gray-700">Descripción:</label>
                                        <textarea
                                            type="text"
                                            className={`form-input w-11/12 resize-none ${borderclass}`}
                                            value={description}
                                            disabled={!editing}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className=" flex justify-end mx-5">
                                    {editing ? (
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                                            onClick={handleSave}
                                        >
                                            Guardar
                                        </button>
                                    ) : (
                                        <button
                                            className="bg-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-500"
                                            onClick={handleEdit}
                                        >
                                            Editar
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ModalCategories