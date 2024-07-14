import React from 'react';
import { MdOutlineCopyright } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";


const Footer = () => {

  return (
    <div className="flex lg:flex-row sm:flex sm:justify-between lg:px-10 sm:px-7 
    lg:gap-0 md:gap-0 sm:gap-4 items-center lg:justify-between md:justify-between 
    bg-[#6f974e] p-8 text-white">
      <div>
        <p className="flex items-center gap-2">
          <MdOutlineCopyright /> Copyrights 2024 by Agri-Connect EA
        </p>
      </div>
      <div className="flex gap-6">
        <RiTwitterXLine />
        <IoLogoFacebook className="text-white" />
        <GrInstagram />
      </div>
    </div>
  );
};

export default Footer;
