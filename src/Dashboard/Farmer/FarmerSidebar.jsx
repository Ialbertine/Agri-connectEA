import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdStats } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiFolderUploadLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { PiPlantFill } from "react-icons/pi";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from 'react';

function FarmerSideBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const showMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
          localStorage.removeItem("token");
          window.location.href = "/";
        }
    };
  
    return (
        <>

            <div className='hidden md:flex flex-col justify-between text-2xl text-green-900 border-r-2 shadow-xl px-5 py-10 h-[100vh]'>
                <div className='flex flex-col gap-5 w-[36vh]'>
                    <div className='w-40 h-20'>
                        <img src="../logo.png" alt="logo" />
                    </div>
                    <div className='flex items-center gap-5'>

                        <Link to='/dashboard/farmer' className=' flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'><IoMdStats /><button>Dashboard</button></Link>
                    </div>
                    <div className='flex items-center gap-5'>

                        <Link to='/dashboard/farmer/orders' className=' flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'><MdOutlineAddShoppingCart /><button>Received Orders</button></Link>
                    </div>
                    <div className='flex items-center gap-5'>

                        <Link to='/dashboard/farmer/uploadproduct' className=' flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'><RiFolderUploadLine /><button>Upload my Harvest</button></Link>
                    </div>
                    <div className='flex items-center gap-5'>

                        <Link to='/dashboard/farmer/stock' className=' flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'><PiPlantFill /><button>Stock</button></Link>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-5'>
                        <Link to='/dashboard/farmer/profile' className=' flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'><CgProfile /><button>Profile</button></Link>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Link to='/login' className=' flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'><RiLogoutCircleLine /><button onClick={handleLogout}>Log Out</button></Link>
                    </div>
                </div>
            </div>

            <div className='md:hidden flex'>
                <button onClick={showMenu} className='text-3xl focus:outline-none'>
                    {isMenuOpen ? <IoClose /> : <IoMenu />}
                </button>
            </div>

            <div className={`fixeed duration-700 ease-in-out flex flex-col justify-between text-2xl text-green-900 border-r-2 shadow-xl px-5 py-10 h-[100vh] ${isMenuOpen ? 'translate-x-0' : '-translate-x-80'} `}>
                <div className='flex flex-col gap-5 w-[36vh]'>
                    <div className='w-40 h-20'>
                        <img src="../logo.png" alt="logo" />
                    </div>
                    <div className='flex items-center gap-5'>

                        <Link to='/dashboard/farmer' className=' flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'><IoMdStats /><button onClick={closeMenu}>Dashboard</button></Link>
                    </div>
                    <div className='flex items-center gap-5'>

                        <Link to='/dashboard/farmer/orders' className=' flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'><MdOutlineAddShoppingCart /><button onClick={closeMenu}>Received Orders</button></Link>
                    </div>
                    <div className='flex items-center gap-5'>

                        <Link to='/dashboard/farmer/uploadproduct' className=' flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'><RiFolderUploadLine /><button onClick={closeMenu}>Upload my Harvest</button></Link>
                    </div>
                    <div className='flex items-center gap-5'>

                        <Link to='/dashboard/farmer/stock' className=' flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'><PiPlantFill /><button onClick={closeMenu}>Stock</button></Link>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Link to='/dashboard/farmer/profile' className=' flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'><CgProfile /><button onClick={closeMenu}>Profile</button></Link>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Link to='/login' className=' flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'><RiLogoutCircleLine /><button onClick={closeMenu}>Log Out</button></Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FarmerSideBar