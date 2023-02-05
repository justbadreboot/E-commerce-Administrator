import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { uploadProductFile } from '../../firebaseConfig';

const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const id=props.producto.id
    const categorias=props.categorias
    console.log(props.producto.category)
    const [name, setName] = useState(props.producto.name);
    const [foto,setFoto]=useState(false);
    const [image, setImage] = useState(props.producto.image);
    const [weight, setWeight] = useState(props.producto.weight);
    const [category, setCategory] = useState(props.producto.category.name);
    const [stock, setStock] = useState(props.producto.stock);
    const [description, setDescription] = useState(props.producto.description);
    const [brand, setBrand] = useState(props.producto.brand);
    const [price1, setPrice1] = useState(props.producto.pvp);
    const [price2, setPrice2] = useState(props.producto.pvd);

    const dispatch = useDispatch();
    const handleEdit = () => {
        setEditing(true);
    };

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

    const handlePhoto=(e)=>{
        setImage(e.target.files[0])
        setFoto(true)
    }

    const handleSave =async event => {
        setEditing(false);
        console.log(category)
        let enviada=categorias.filter(product => product.name.includes(category))
        let categoriaTemp=enviada[0]
        const data={
            description: description,
            image:"",
            stock:stock,
            pvd: price2,
            pvp:price1,
            brand: brand,
            weight: weight,
            name:name,
            category: categoriaTemp,
            expiration:props.producto.expiration,
            size:props.producto.size
        }
        console.log(data)

        if(foto===true){
            const result= await uploadProductFile(image);
            data.image=`${result}`
        }
        else{
            data.image=image
        }
        axios.put(`https://product-production-cf12.up.railway.app/api/product/${id}`, {
            data
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.error(err);
          });
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
                    <div className='mx-auto my-auto'>
                        <div className="relative pb-5 bg-white  rounded-lg pt-5">
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
                                        <img src={`${image}`} className='w-2/3' />
                                        <label className={`flex items-center justify-center cursor-pointer w-2/3 ${editImage}`}>
                                            <i className="fa-solid fa-pen-to-square text-gray-500 text-xl"></i>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                disabled={!editing}
                                                onChange={handlePhoto}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="flex w-3/4 mx-auto my-auto">

                                    <div className="w-1/3">
                                        <label className="block font-medium text-gray-700">Peso:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-1/3 ${borderclass}`}
                                            value={weight}
                                            disabled={!editing}
                                            onChange={(e) => setWeight(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block font-medium text-gray-700">Categoría:</label>
                                        <select
                                            className={`form-select w-2/3 ${borderclass}`}
                                            value={category}
                                            disabled={!editing}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            {categorias.map(option => (
                                                <option key={option.id} value={option.name}>{option.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block font-medium text-gray-700">Stock:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-1/3 ${borderclass}`}
                                            value={stock}
                                            disabled={!editing}
                                            onChange={(e) => setStock(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex w-3/4 mx-auto">
                                    <div className="w-1/3">
                                        <label className="block font-medium text-gray-700">Marca:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-2/3 ${borderclass}`}
                                            value={brand}
                                            disabled={!editing}
                                            onChange={(e) => setBrand(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block font-medium text-gray-700">PVP:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-2/3 ${borderclass}`}
                                            value={price1}
                                            disabled={!editing}
                                            onChange={(e) => setPrice1(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block font-medium text-gray-700">PVD:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-1/3 ${borderclass}`}
                                            value={price2}
                                            disabled={!editing}
                                            onChange={(e) => setPrice2(e.target.value)}
                                        />
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

export default Modal