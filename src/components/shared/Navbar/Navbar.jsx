import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsGraphUp } from "react-icons/bs";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdStoreMallDirectory, MdProductionQuantityLimits, MdOutlineMedicalServices, MdLocalOffer } from "react-icons/md";

const Navbar = () => {
    const [selectedTab, setSelectedTab] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    let botonclass=''
    let navclass=''

        if(isOpen){
            botonclass='mx-48 translate-x-0'
            navclass='left-0 translate-x-0 h-4/5'
        }
        else{
            navclass='-translate-x-full '
            botonclass='mx-0 -translate-x-50'
        }
    return (
<div className='flex'>

        <div className={`z-40 lg:h-4/5 w-52 fixed inset-y-0 my-4 lg:bg-white lg:w-52 ${navclass} flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-100 lg:left-0 lg:translate-x-0`}>
            <div className='flex'>
                <div>
                    <img src="./images/logo-template.png" className='inline w-40 transition-all duration-200 h-full mx-5 ' />
                </div>

                </div>
                <hr class="h-px mt-1 w-40 mx-5 bg-transparent bg-gradient-to-r from-transparent via-black/100 to-transparent" />

                <div className='max-w-72 inset-y-0 my-4 ml-1 mr-0  flex-wrap items-center justify-between overflow-y-auto rounded-2xl bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent'>
                    <div className='pb-5 '>
                        <ul className="flex flex-col pl-0  mb-0">
                        <NavLink to="/" className=
                            {` ${selectedTab === 'home' ?
                                'py-3 shadow-xl text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap rounded-lg bg-white p-4 font-semibold text-slate-700 transition-colors' :
                                'py-3 text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap px-4 transition-colors'}`}
                            onClick={() => setSelectedTab('home')}>
                            <div className={` ${selectedTab === 'home' ?
                                'w-8 h-8 bg-gradient-to-tl from-green-100 to-green-20 shadow-lg mr-2 flex items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                                'w-8 h-8 shadow-lg mr-2 flex items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>
                                <BsGraphUp className='w-9 h-9' />
                            </div>
                            <p className='ml-1 duration-300 opacity-100 pointer-events-none ease-soft'>Home</p>
                        </NavLink>
                    <div>
                        <NavLink to="/store"
                            className=
                            {` ${selectedTab === 'store' ?
                                'py-3 shadow-xl text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors' :
                                'py-3 text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap px-4 transition-colors'}`}
                            onClick={() => setSelectedTab('store')}
                        >
                            <div className={` ${selectedTab === 'store' ?
                                'bg-gradient-to-tl from-green-100 to-green-20 shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                                'shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>
                                <MdStoreMallDirectory className='w-9 h-9' />
                            </div>
                            <p className='ml-1 duration-300 opacity-100 pointer-events-none ease-soft '>Store</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/products"
                            className=
                            {` ${selectedTab === 'products' ?
                                'py-3 shadow-xl text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors' :
                                'py-3 text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap px-4 transition-colors'}`}
                            onClick={() => setSelectedTab('products')}
                        >
                            <div className={` ${selectedTab === 'products' ?
                                'bg-gradient-to-tl from-green-100 to-green-20 shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                                'shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>
                                <MdProductionQuantityLimits className='w-9 h-9' />
                            </div>
                            <p className='ml-1 duration-300 opacity-100 pointer-events-none ease-soft '>Products</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/services"
                            className=
                            {` ${selectedTab === 'services' ?
                                'py-3 shadow-xl text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors' :
                                'py-3 text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap px-4 transition-colors'}`}
                            onClick={() => setSelectedTab('services')}
                        >
                            <div className={` ${selectedTab === 'services' ?
                                'bg-gradient-to-tl from-green-100 to-green-20 shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                                'shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>

                                <MdOutlineMedicalServices className='w-9 h-9' />
                            </div>
                            <p className='ml-1 duration-300 opacity-100 pointer-events-none ease-soft '>Services</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/doctors"
                            className=
                            {` ${selectedTab === 'doctors' ?
                                'py-3 shadow-xl text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors' :
                                'py-3 text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap px-4 transition-colors'}`}
                            onClick={() => setSelectedTab('doctors')}>
                            <div className={` ${selectedTab === 'doctors' ?
                                'bg-gradient-to-tl from-green-100 to-green-20 shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                                'shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>

                                <AiFillMedicineBox className='w-9 h-9' />
                            </div>
                            <p className='ml-1 duration-300 opacity-100 pointer-events-none ease-soft '>Doctors</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/promotions"
                            className=
                            {` ${selectedTab === 'promotions' ?
                                'py-3 shadow-xl text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors' :
                                'py-3 text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap px-4 transition-colors'}`}
                            onClick={() => setSelectedTab('promotions')}>
                            <div className={` ${selectedTab === 'promotions' ?
                                'bg-gradient-to-tl from-green-100 to-green-20 shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                                'shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>

                                <MdLocalOffer className='w-9 h-9' />
                            </div>
                            <p className='ml-1 duration-300 opacity-100 pointer-events-none ease-soft '>Promotions</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/orders"
                            className=
                            {` ${selectedTab === 'orders' ?
                                'py-3 shadow-xl text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors' :
                                'py-3 text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap px-4 transition-colors'}`}
                            onClick={() => setSelectedTab('orders')}
                        >
                            <div className={` ${selectedTab === 'orders' ?
                                'bg-gradient-to-tl from-green-100 to-green-20 shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                                'shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>

                                <FaMoneyBillAlt className='w-9 h-9' />
                            </div>
                            <p className='ml-1 duration-300 opacity-100 pointer-events-none ease-soft'>Orders</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/contact"
                            className=
                            {` ${selectedTab === 'contact' ?
                                'py-3 shadow-xl text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors' :
                                'py-3 text-sm ease-nav-brand my-0 mx-3 flex items-center whitespace-nowrap px-4 transition-colors'}`}
                            onClick={() => setSelectedTab('contact')}
                        >
                            <div className={` ${selectedTab === 'contact' ?
                                'bg-gradient-to-tl from-green-100 to-green-20 shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                                'shadow-lg mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>

                                <RiTeamFill className='w-9 h-9' />
                            </div>
                            <p className='ml-1 duration-300 opacity-100 pointer-events-none ease-soft'>Contact Us</p>
                        </NavLink>
                    </div>
                </ul>
            </div>
        </div>
        </div>
        
        <div className={`z-40 fixed lg:mx-48 lg:hidden transition-transform duration-500 ${botonclass}`} onClick={()=>{if(isOpen){setIsOpen(false)}else{setIsOpen(true)}}}>
                    <button class="relative group">
                        <div class={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md ${isOpen ? 'ring-4' : ''}`}>
                            <div class={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${isOpen ? 'rotate-180 -translate-x-1' : ''}`}>
                                <div class={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${isOpen ? 'rotate-[25deg] w-2/3' : ''}`}></div>
                                <div class={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? 'translate-x-10' : ''}`}></div>
                                <div class={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${isOpen ? 'w-2/3 -rotate-[25deg]' : ''}`}></div>
                            </div>
                        </div>
                    </button>
                </div>
        </div>
    )
}

export default Navbar