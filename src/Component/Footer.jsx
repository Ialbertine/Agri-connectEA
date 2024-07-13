import React from 'react'
import { MdOutlineCopyright } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <>
    <div className='flex lg:flex-row md:flex-row sm:flex-col-reverse lg:gap-0 md:gap-0 sm:gap-4 items-center lg:justify-between md:justify-between sm:justify-center bg-[#6d8c54] lg:px-40 md:px-20 sm:px-0 p-8 text-white'>
      <div className=''>
        <p className='flex items-center gap-2'><MdOutlineCopyright/> Copyrights 2024 by AgrisokoConnect</p>
      </div>
      <div className='flex gap-6'>
        <RiTwitterXLine />
        <IoLogoFacebook className='text-white' />
        <GrInstagram />
      </div>
    </div>
    </>
  )
}

export default Footer