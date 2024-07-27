import React from "react";
import { RiInformation2Line } from "react-icons/ri";
import { PiWechatLogo } from "react-icons/pi";
import { MdOutlineContactSupport } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";
import { PiChartLineUpBold } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div>
        <div className="relative">
          <img
            src="/img/AboutUs.png"
            className="h-[50vh] w-full object-cover"
          ></img>
          <div className="absolute lg:top-48 md:top-44 sm:top-44 lg:left-[85vh] md:left-[38vh] sm:left-[8vh] text-white">
            <p className="text-5xl">
              <b>Our Services</b>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-20 items-center justify-center lg:px-40 md:px-20 sm:px-5 py-20">
          <div className="flex flex-col items-center">
            <p>what we offer</p>
            <p className="lg:text-4xl md:text-4xl sm:text-3xl">
              Discover <span className="text-[#6d8c54]"> our services </span>
            </p>
          </div>
          <div className="flex items-start justify-center flex-wrap gap-10">
            <div className="flex flex-col items-center shadow-md shadow-slate-400 p-5 h-[40vh] gap-4 lg:w-[46vh] md:w-[40vh] sm:w-[46vh] justify-center">
              <RiInformation2Line className="text-3xl" />
              <p className="lg:text-2xl md:text-4xl sm:text-2xl">
                Harvest showcasing
              </p>
              <p className="lg:text-[16px] md:text-[18px] sm:text-[16px]">
                Publication of agri-food. We help cooperatives connect
                authentically and draw customers' attention.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center shadow-md shadow-slate-400 p-5 h-[40vh] gap-4 lg:w-[46vh] md:w-[40vh] sm:w-[46vh] justify-center">
              <PiWechatLogo className="text-3xl" />
              <p className="lg:text-2xl md:text-4xl sm:text-2xl">Chat box</p>
              <p className="lg:text-[16px] md:text-[18px] sm:text-[16px]">
                Discussions and contacts (B2B, B2C, B2G, SMS-email, email-SMS)
              </p>
            </div>
            <div className="flex flex-col items-center shadow-md shadow-slate-400 p-5 h-[40vh] gap-4 lg:w-[46vh] md:w-[40vh] sm:w-[46vh] justify-center">
              <MdOutlineContactSupport className="text-3xl" />
              <p className="lg:text-2xl md:text-4xl sm:text-2xl">
                Reginal agricultural
              </p>
              <p className="lg:text-[16px] md:text-[18px] sm:text-[16px]">
                Agricultural advice and support (investment, specifications,
                development and planning of seasons, harvest){" "}
              </p>
            </div>

            <div className="flex flex-col items-center shadow-md shadow-slate-400 p-5 gap-4 h-[40vh] lg:w-[46vh] md:w-[40vh] sm:w-[46vh] justify-center">
              <PiChartLineUpBold className="text-3xl" />
              <p className="lg:text-2xl md:text-4xl sm:text-2xl">
                Farmer Dashboard
              </p>
              <p className="lg:text-[16px] md:text-[18px] sm:text-[16px]">
                Sale of Agricultural Harvest Data and Statistics{" "}
              </p>
            </div>
            <div className="flex flex-col items-center shadow-md shadow-slate-400 p-5 gap-4 h-[40vh] lg:w-[46vh] md:w-[40vh] sm:w-[46vh] justify-center">
              <RiAdvertisementLine className="text-3xl" />
              <p className="lg:text-2xl md:text-4xl sm:text-2xl">Advertising</p>
              <p className="lg:text-[16px] md:text-[18px] sm:text-[16px]">
                Targeted advertising and marketing (digital and operational),
                opportunities and news
              </p>
            </div>
            <div className="flex flex-col items-center shadow-md shadow-slate-400 p-5 gap-4 h-[40vh] lg:w-[46vh] md:w-[40vh] sm:w-[46vh] justify-center">
              <FaRegNewspaper className="text-3xl" />
              <p className="lg:text-2xl md:text-4xl sm:text-2xl">News</p>
              <p className="lg:text-[16px] md:text-[18px] sm:text-[16px]">
                Agricultural newspaper and magazines{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
