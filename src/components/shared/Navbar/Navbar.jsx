import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsGraphUp } from "react-icons/bs";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdStoreMallDirectory, MdProductionQuantityLimits, MdOutlineMedicalServices, MdLocalOffer } from "react-icons/md";

const Navbar = () => {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <div className='items-center block w-auto max-h-screen overflow-auto h-sidenav'>
            <ul className="flex flex-col pl-0 mb-0">
                <div>
                    <NavLink to="/" className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors" onClick={() => setSelectedTab('home')}>
                        <div className={` ${selectedTab === 'home' ?
                            'bg-gradient-to-tl from-green100 to-green-40 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                            'shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>
                            <BsGraphUp />
                        </div>
                        <p className=''>Home</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/store"
                        className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
                        onClick={() => setSelectedTab('store')}
                    >
                        <div className={` ${selectedTab === 'store' ?
                            'bg-gradient-to-tl from-green100 to-green-40 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                            'shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>
                            <MdStoreMallDirectory />
                        </div>
                        <p>Store</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/products"
                        className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
                        onClick={() => setSelectedTab('products')}
                    >
                        <div className={` ${selectedTab === 'products' ?
                            'bg-gradient-to-tl from-green100 to-green-40 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                            'shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>
                            <MdProductionQuantityLimits />
                        </div>
                        <p>Products</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/services"
                        className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
                        onClick={() => setSelectedTab('services')}
                    >
                        <div className={` ${selectedTab === 'services' ?
                            'bg-gradient-to-tl from-green100 to-green-40 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                            'shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>

                            <MdOutlineMedicalServices />
                        </div>
                        <p>Services</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/doctors"
                        className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
                        onClick={() => setSelectedTab('doctors')}>
                        <div className={` ${selectedTab === 'doctors' ?
                            'bg-gradient-to-tl from-green100 to-green-40 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                            'shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>

                            <AiFillMedicineBox />
                        </div>
                        <p>Doctors</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/promotions"
                        className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
                        onClick={() => setSelectedTab('promotions')}>
                        <div className={` ${selectedTab === 'promotions' ?
                            'bg-gradient-to-tl from-green100 to-green-40 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                            'shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>

                            <MdLocalOffer />
                        </div>
                        <p>Promotions</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/orders"
                        className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
                        onClick={() => setSelectedTab('orders')}
                    >
                        <div className={` ${selectedTab === 'orders' ?
                            'bg-gradient-to-tl from-green100 to-green-40 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5' :
                            'shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5'}`}>

                            <FaMoneyBillAlt />
                        </div>
                        <p>Orders</p>
                    </NavLink>
                </div>
            </ul>
        </div>
    )
}

export default Navbar