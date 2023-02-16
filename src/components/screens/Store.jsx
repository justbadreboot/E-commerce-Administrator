import React, { useState, useEffect } from 'react';
import Empleados from '../Empleados';
import { useDispatch, useSelector } from 'react-redux';
import { StoreData } from '../../services/actions/StoreData';
import Loader from '../../Loader';
import axios from 'axios';
import {uploadFile} from '../../firebaseConfig'


const Store = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StoreData());
  }, [dispatch]);


  const storeData=useSelector(state => state.store.data)

  const [editing, setEditing] = useState(false);
  const [editstore, setEditstore] = useState(false);
  const [mission, setMission] = useState(storeData[0].mission);
  const [vision, setVision] = useState(storeData[0].vision);
  const [description, setDescription]=useState(storeData[0].description)
  const [name, setName]=useState(storeData[0].name)
  const [phone, setPhone]=useState(storeData[0].phone)
  const [email, setEmail]=useState(storeData[0].email)
  const [address, setAddress]=useState(storeData[0].address)

  useEffect(() => {
    setMission(storeData[0].mission)
    setVision(storeData[0].vision)
    setDescription(storeData[0].description)
    setName(storeData[0].name)
    setPhone(storeData[0].phone)
    setEmail(storeData[0].email)
    setAddress(storeData[0].address)
  }, [storeData]);

  const handleEdit = () => {
    setEditing(false);
    setEditstore(false)
      axios.put('https://landing-production-11fd.up.railway.app/api/admin/landing/{id}?id=1', {
        mission,
        vision,
        description,
        name,
        phone,
        email,
        address
      })
      .then(res => {
            dispatch(StoreData());
      })
      .catch(err => {
      });
  };

  
  return (

    <div className='lg:w-4/5 lg:ml-60 w-11/12 mx-10 h-screen bg-gray-50'>
    <div className=" pb-10 h-screen block w-full transition-all duration-200 bg-gray-50 ">
      <div className=''>
        <div className='flex items-center justify-center pt-7 text-green-100 text-3xl'>
          <strong>Información de la tienda</strong>
        </div>
        <div className="w-full p-6 mx-auto flex bg-gray-50 z-0">
          <div className="flex  mx-auto">
            <div className="w-full max-w-full px-3 xl:w-6/12 p-2 drop-shadow-lg">
              <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex flex-wrap -mx-0 pt-4 pb-1">
                  <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                    <h6 className="mb-0 text-slate-700"><strong>Objetivos de tienda</strong></h6>
                  </div>
                  <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                    <a href="javascript:;" onClick={() => editstore?(alert("Termine de editar la información de la tienda")):
                     setEditing(!editing)}>
                      <i className="leading-normal fas fa-pen-to-square text-xl text-slate-400" ></i>
                    </a>
                  </div>
                </div>
                <div className="flex-auto p-4">
                  <h6 className="font-bold leading-tight uppercase text-xs text-slate-500">Misión</h6>
                  <div>
                    {editing ? (
                      <textarea
                        className="border w-full bg-white p-2 rounded-lg resize-none"
                        rows="5"
                        value={mission}
                        onChange={e => setMission(e.target.value)}
                      />
                    ) : (
                      <div>{mission}</div>
                    )}
                  </div>
                  <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">Visión</h6>
                  <div>
                    {editing ? (
                      <textarea
                        className="border w-full bg-white p-2 rounded-lg resize-none"
                        rows="5"
                        value={vision}
                        onChange={e => setVision(e.target.value)}
                      />
                    ) : (
                      <div>{vision}</div>
                    )}
                  </div>
                  {editing && (
                    <button
                      className="bg-blue-500 text-white p-2 rounded-lg mt-4"
                      onClick={() => handleEdit()}
                    >
                      Guardar
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-6/12 p-2 drop-shadow-lg ">
              <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                      <h6 className="mb-0 text-slate-700"><strong>Información de tienda</strong></h6>
                    </div>
                    <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                      <a href="javascript:;" data-target="tooltip_trigger" data-placement="top" onClick={
                        ()=> editing?(alert("Termine de editar los objetivos de la tienda")):
                        setEditstore(!editstore)}>
                        <i className="leading-normal fas fa-pen-to-square text-xl text-slate-400"></i>
                      </a>
                      <div data-target="tooltip" className="hidden px-2 py-1 text-center text-white bg-black rounded-lg text-sm" role="tooltip">
                        Edit Profile
                        <div className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-auto p-4 pt-4">
                  <h6 className="font-bold leading-tight uppercase text-xs text-slate-500">Descripción</h6>

                  <p className="leading-normal text-l pt-2">
                    
                  {editstore ? (
                      <textarea
                        className="border w-full bg-white p-2 rounded-lg resize-none"
                        rows="4"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                      />
                    ) : (
                      <div>{description}</div>
                    )}
                  </p>
                  <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
                  <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                    <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"><strong className="text-slate-700">Nombre:</strong> &nbsp; 
                    {editstore ? (
                      <input
                        className="border p-2 bg-white rounded-lg resize-none"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    ) : (
                      <label>{name}</label>
                    )}
                    </li>
                    <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong className="text-slate-700">Telefono:</strong> &nbsp;
                    {editstore ? (
                      <input
                        className="border  p-2 bg-white rounded-lg resize-none"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                      />
                    ) : (
                      <label>{phone}</label>
                    )}
                     </li>
                    <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong className="text-slate-700">Correo:</strong> &nbsp;
                    {editstore ? (
                      <input
                        className="border  p-2 bg-white rounded-lg resize-none"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    ) : (
                      <label>{email}</label>
                    )}
                     </li>
                    <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong className="text-slate-700">Dirección:</strong> &nbsp;
                    {editstore ? (
                      <input
                        className="border  p-2 bg-white rounded-lg resize-none"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                      />
                    ) : (
                      <label>{address}</label>
                    )}
                     </li>
                     
                    <li className="relative block px-4 py-2 pb-0 pl-0 bg-white border-0 border-t-0 rounded-b-lg text-inherit">
                    </li>
                  </ul>
                  {editstore && (
                    <button
                      className="bg-blue-500 text-white p-2 rounded-lg mt-4"
                      onClick={() => handleEdit()}
                    >
                      Guardar
                    </button>
                  )}
                </div>

              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Store; 