import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import './Header.css';
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,});
  },[]);

  return (
    <>
      <div className='shadow-design flex items-center justify-between text-lg text-black py-[2vh] fixed z-10 w-full bg-white px-[1.6rem] lg:px-[4rem]'>
        <div data-aos="fade-down">
          <img src='img/logo.png' className='lg:w-[14rem] md:w-[12rem] sm:w-[11rem]' alt='Logo' />
        </div>
        <div className='hidden md:flex lg:gap-10 md:gap-4 sm:gap-0' data-aos="fade-down">
          <Link to='/' className='cursor-pointer transition duration-300 ease-in-out font-medium underline-animation active'> Home</Link>
          <Link to='/about' className='cursor-pointer transition duration-300 ease-in-out font-medium underline-animation'> About</Link>
          <Link to='/allfarmers' className='cursor-pointer transition duration-300 ease-in-out font-medium underline-animation'> Services</Link>
          <Link to='/services' className='cursor-pointer transition duration-300 ease-in-out font-medium underline-animation'> Members</Link>
          <Link to='/news' className='cursor-pointer transition duration-300 ease-in-out font-medium underline-animation'> News</Link>
          <Link to='/contact' className='cursor-pointer transition duration-300 ease-in-out font-medium underline-animation'> Contact</Link>
          
        </div>
        <div className='pl-3 hidden md:flex lg:flex' data-aos="fade-down">
            <Link to='/login' className='bg-green-900 px-5 py-2 rounded-md text-white hover:text-black hover:bg-yellow-200 transition duration-300 ease-in-out'>Sign In</Link>
        </div>
        <div className='md:hidden flex' data-aos="fade-left">
          <button onClick={toggleMenu} className='text-4xl focus:outline-none'>
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>
      <div className={`fixed top-[10.6vh] right-0 z-10 md:hidden sm:w-[60%] h-[78%] bg-[#eff2ef] transition-transform duration-700 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='text-xl flex flex-col items-center gap-4 py-4'>
          <Link to='/' className='py-2 cursor-pointer transition duration-300 ease-in-out underline-animation' onClick={closeMenu}>Home</Link>
          <Link to='/about' className='py-2 cursor-pointer transition duration-300 ease-in-out underline-animation' onClick={closeMenu}>About</Link>
          <Link to='/allfarmers' className='py-2 cursor-pointer transition duration-300 ease-in-out underline-animation' onClick={closeMenu}>Services</Link>
          <Link to='/services' className='py-2 cursor-pointer transition duration-300 ease-in-out underline-animation' onClick={closeMenu}>Members</Link>
          <Link to='/contact' className='py-2 cursor-pointer transition duration-300 ease-in-out underline-animation' onClick={closeMenu}>Contact</Link>
          <Link to='/login' className='py-2 bg-green-900 px-5 rounded-md text-white hover:text-black hover:bg-yellow-200 transition duration-300 ease-in-out' onClick={closeMenu}>Sign In</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
