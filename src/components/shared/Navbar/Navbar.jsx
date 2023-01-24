import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='items-center block w-auto max-h-screen overflow-auto h-sidenav'>
        <ul className="flex flex-col pl-0 mb-0">
            <div className='flex'>
            <NavLink to="/" className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors">
            <i class="fa-solid fa-house-user"></i>
                <p>Home</p>
            </NavLink>
            </div>
            <div>
            <NavLink to="/store" className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors">
                <p>Store</p>
            </NavLink>
            </div>
            <div>
            <NavLink to="/products" className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors">
                <p>Products</p>
            </NavLink>
            </div>
            <div>
            <NavLink to="/services" className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors">
                <p>Services</p>
            </NavLink>
            </div>
            <div>
            <NavLink to="/doctors" className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors">
                <p>Doctors</p>
            </NavLink>
            </div>
            <div>
            <NavLink to="/promotions" className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors">
                <p>Promotions</p>
            </NavLink>
            </div>
            <div>
            <NavLink to="/orders" className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors">
                <p>Orders</p>
            </NavLink>
            </div>
        </ul>
    </div>
  )
}

export default Navbar