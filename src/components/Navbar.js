import React from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='pl-12 flex space-x-8 items-center py-4'>
      <img className="w-[50px] md:w-[80px]" src={logo} alt=""/>
      <Link to="/" className={`text-blue-400 font-bold text-xl md:text-3xl `}>Movies</Link>
      <Link to='/favourites' className='"text-blue-400 text-white font-bold text-xl md:text-3xl'>Favorites</Link>
    </div>
  )
}

export default Navbar
