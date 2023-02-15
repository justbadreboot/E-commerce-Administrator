import React,{useState} from 'react'
import axios from 'axios';
import { uploadDoctorFile } from '../../../firebaseConfig';

const ModalDoctors = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(props.producto.name);
    const [imageTemp, setImage] = useState(props.producto.image);
    const [imagen, setImagen]=useState(null)
    const [document, setDocument] = useState(props.producto.document);
    const [id, setId]=useState(props.producto.id)
    const [lastName,setLastName]=useState(props.producto.lastName)
    const [email, setEmail] = useState(props.producto.email);
    const [stock, setStock] = useState(props.producto.stock);
    const [description, setDescription] = useState(props.producto.descripcion);
    const [phone, setPhone] = useState(props.producto.phone);
    const [address, setAddress] = useState(props.producto.address);
    const [price2, setPrice2] = useState(props.producto.precio2);
    const [foto, setFoto]=useState(false)
    const handleEdit = () => {
        setEditing(true);
    };
    const handlePhoto=(e)=>{
        console.log(e.target.files[0])
        setImage(e.target.files[0])
        setFoto(true)
        console.log(imageTemp)
        console.log(foto)
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

    const handleSave =async event => {
        setEditing(false);
        console.log(foto)
        let image=''
        if(foto===true){
            const result= await uploadDoctorFile(imageTemp);
            image=result

        }
        setImage(image)

        axios.put(`https://service-production-bb52.up.railway.app/api/admin/specialty/${props.producto.specialty.id}/doctor`, {
            image,
            id,
            name,
            email,
            address,
            document,
            lastName,
            phone
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.error(err);
          });
        //onSave({ imageTemp, document, email, stock, description, phone, address, price2 });
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
                    <div className='mx-auto w-2/3 my-auto'>
                        <div className="relative pb-5 bg-white  rounded-lg pt-5">
                            <button className="absolute top-0 right-0 p-1 text-black bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100" onClick={() => setIsOpen(false)}>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div className="max-auto">
                                <div className="w-2/3 mx-auto">
                                    <div className='mx-auto w-2/3'>
                                        <div className='mx-10'>
                                        <input
                                            type="text"
                                            className={`form-input w-5/6 mx-auto justify-center font-bold ${borderclass}`}
                                            value={name}
                                            disabled={!editing}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        </div>
                                    </div>
                                    <div className="w-1/3 mx-auto">
                                        <img src={`${imageTemp}`} className='w-2/3' />
                                        <label className={`flex items-center justify-center cursor-pointer w-2/3 ${editImage}`}>
                                            <i className="fa-solid fa-pen-to-square text-gray-500 text-xl"></i>
                                            <input
                                                type="file"
                                                accept="imageTemp/*"
                                                className="hidden"
                                                disabled={!editing}
                                                onChange={handlePhoto}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="flex w-4/5 mx-auto my-auto">

                                    <div className="w-2/3">
                                        <label className="block font-medium text-gray-700">Cedula:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-3/4 ${borderclass}`}
                                            value={document}
                                            disabled={!editing}
                                            onChange={(e) => setDocument(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-2/3">
                                        <label className="block font-medium text-gray-700">Correo:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-4/5 ${borderclass}`}
                                            value={email}
                                            disabled={!editing}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex w-4/5 mx-auto">
                                    <div className="w-2/3">
                                        <label className="block font-medium text-gray-700">Telefono:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-2/3 ${borderclass}`}
                                            value={phone}
                                            disabled={!editing}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-2/3">
                                        <label className="block font-medium text-gray-700">Dirección:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-2/3 ${borderclass}`}
                                            value={address}
                                            disabled={!editing}
                                            onChange={(e) => setAddress(e.target.value)}
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

export default ModalDoctors