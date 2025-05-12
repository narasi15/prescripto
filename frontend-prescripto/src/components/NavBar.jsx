import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import "tailwindcss";

const NavBar = () => {

const navigate = useNavigate()
const [showMenu, setShowMenu] = useState(false)
const [token, setToken ] = useState(true)

  return (
    <div className="max-w-7xl mx-auto px-4">
  <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">

    {/* Logo */}
    <img onClick={()=>navigate('/')} className='w-44 cursor-pointer h-10' src={assets.logo} alt="Logo"/>

    {/* Nav Links */}
    <ul className="flex gap-8 text-gray-700">
      <NavLink to="/" className={'hover:underline transition-all duration-200'}>HOME</NavLink>
      <NavLink to="/doctors" className={'hover:underline transition-all duration-200'}>ALL DOCTORS</NavLink>
      <NavLink to="/about" className={'hover:underline transition-all duration-200'}>ABOUT</NavLink>
      <NavLink to="/contact" className={'hover:underline transition-all duration-200'}>CONTACT</NavLink>
    </ul>

    {/* Button */}
    <div>
        {
            token ? 
            <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt=""/>
                <img className='w-2.5' src={assets.dropdown_icon} alt=""/>
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>

            </div>:
                <button onClick={()=>navigate('/login')} className="bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block">
                Create Account
            </button>

        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt=""/>
        {/* -------- Mobile Menu --------- */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt=""/>
            <img className='w-7' onClick={() =>setShowMenu(false)} src={assets.cross_icon} alt=""/>
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
          </ul>

        </div>
    </div>
    

  </div>
</div>


  )
}

export default NavBar;

