import React from 'react'
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const PreFooter = () => {
  return (
    <>
      <div className=' flex lg:flex-row md:flex-row sm:flex-col lg:gap-0 md:gap-10 sm:gap-10 items-start lg:py-20 md:py-20 sm:p-10  justify-evenly bg-[#1A3C21] text-white'>
        <div className='flex flex-col'>
          <div>
            <img src='img/logo2.png' className='w-[15rem] h-[12vh]'></img>
            <p className='text-gray-400'>AgriSupply Chain Community</p>
          </div>
          <div className='border border-r-1 border-gray-500 lg:my-[3rem] md:my-6 sm:my-4'></div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <MdCall className='bg-yellow-400 text-black ' />
              <p>+250 788 888 880</p>
            </div>
            <div className='flex items-center gap-2'>
              <MdEmail className='text-yellow-400' />
              <p>hello@agriconnectEA.org</p>
            </div>
            <div className='flex items-center gap-2'>
              <IoLocationOutline className='text-yellow-400' />
              <p>KG 549 Street, ALU, Bumbogo</p>
            </div>
          </div>
        </div>

        {/* News */}

        <div className='flex flex-col gap-8'>
          <p className='text-2xl'>News</p>
          <div className='sm:flex lg:flex-col lg:gap-10'>
          <div className='flex lg:flex-row md:flex-col sm:flex-col lg:items-center md:items-start sm:items-start gap-5'>
            <img src='img/agrinw1.jpg' className='w-20 h-20 rounded-full' ></img>
            <div className='lg:w-96 md:w-[40vh] sm:w-[40vh] flex flex-col gap-3'>
              <p className=' text-yellow-400 text-sm'><b>8 May, 2024</b></p>
              <Link to='https://allafrica.com/stories/202405080048.html' className='text-lg hover:text-yellow-400'><p>How Will Government Finance the 2024-2025 Budget?</p></Link>
            </div>
          </div>
          <div className='flex lg:flex-row md:flex-col sm:flex-col lg:items-center md:items-start sm:items-start gap-5'>
            <img src='img/news2.jpeg' className='w-20 h-20 rounded-full' ></img>
            <div className='lg:w-96 md:w-[40vh] sm:w-[40vh]  flex flex-col gap-3'>
              <p className=' text-yellow-400 text-sm'><b>26 April, 2024</b></p>
              <Link to='https://fao.org/rwanda/news/detail-events/en/c/1681307/'><p className='text-lg hover:text-yellow-400'>Rwanda’s $502m agricultural investment opportunities ‘offer prosperity prospects’.</p></Link>
            </div>
          </div>
          </div>
        </div>

        {/* Explore */}

        <div className='flex flex-col gap-8'>
          <p className='text-2xl'>Explore</p>
          <div className='flex flex-col lg:gap-10 md:gap-8 sm:gap-4'>
            <Link to=''><p className='text-gray-400 hover:underline hover:decoration-yellow-400'>Our Services</p></Link>
            <Link to=''><p className='text-gray-400 hover:underline hover:decoration-yellow-400'>About us</p></Link>
            <Link to=''><p className='text-gray-400 hover:underline hover:decoration-yellow-400'>Get in touch</p></Link>
            <Link to=''><p className='text-gray-400 hover:underline hover:decoration-yellow-400'>Farmers</p></Link>
          </div>
        </div>

      </div>
    </>


  )
}

export default PreFooter