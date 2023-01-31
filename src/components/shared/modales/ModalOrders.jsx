import React,{useState} from 'react'

const ModalOrders = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(props.producto.Id);
    const [image, setImage] = useState(props.producto.EstadoPago);
    const [weight, setWeight] = useState(props.producto.EstadoPago);
    const [category, setCategory] = useState(props.producto.Fecha);
    const [stock, setStock] = useState(props.producto.Precio);
    const [description, setDescription] = useState(props.producto.descripcion);
    const [brand, setBrand] = useState(props.producto.EstadoOrden);
    const [price1, setPrice1] = useState(props.producto.EstadoEnvio);
    const [price2, setPrice2] = useState(props.producto.EstadoPago);
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

    const handleSave = () => {
        setEditing(false);
        //onSave({ image, weight, category, stock, description, brand, price1, price2 });
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
                                <div className="w-2/3 mx-auto pb-5">
                                    <div className='mx-auto w-1/3'>
                                        <input
                                            type="text"
                                            className={`form-input w-4/5 mx-auto justify-center font-bold ${borderclass}`}
                                            value={name}
                                            disabled={!editing}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex w-3/4 mx-auto my-auto">

                                    <div className="w-1/3">
                                        <label className="block font-medium text-gray-700">Estado de Pago:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-1/3 ${borderclass}`}
                                            value={weight}
                                            disabled={!editing}
                                            onChange={(e) => setWeight(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block font-medium text-gray-700">Fecha:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-2/3 ${borderclass}`}
                                            value={category}
                                            disabled={!editing}
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block font-medium text-gray-700">Total:</label>
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
                                        <label className="block font-medium text-gray-700">Estado de Orden:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-2/3 ${borderclass}`}
                                            value={brand}
                                            disabled={!editing}
                                            onChange={(e) => setBrand(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block font-medium text-gray-700">Estado de Envío:</label>
                                        <input
                                            type="text"
                                            className={`form-input w-2/3 ${borderclass}`}
                                            value={price1}
                                            disabled={!editing}
                                            onChange={(e) => setPrice1(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block font-medium text-gray-700">Precio 2:</label>
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
                                        <label className="block font-medium text-gray-700">Productos:</label>
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

export default ModalOrders