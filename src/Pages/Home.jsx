import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PiArrowBendDownLeftThin } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,});
  },[]);

  return (
    <div>
      <div className="relative min-h-screen">
        <img
          src="img/photo3.jpg"
          className=" lg:h-[100vh] md:h-[90vh] sm:h-[100vh] w-full object-cover"
        ></img>
        <div className="text-white mt-[7rem] absolute lg:top-17 md:top-14 sm:top-10 lg:left-48 md:left-20 sm:left-10 flex flex-col lg:gap-7 md:gap-7 sm:gap-5" data-aos="fade-up">
          <p className="underline underline-offset-8">
            WE'RE AGRISUPPLY CHAIN COMMUNITY
          </p>
          <p className="lg:text-[3.5rem] md:text-6xl sm:text-5xl lg:w-[60%] md:w-[80vh] sm:w-[62%]">
            Welcome to Agri-Connect EA community
          </p>
          <p className="lg:w-[55%] md:w-[70vh] sm:w-[80%]">
            Empowering farmers, bridging markets, and revolutionizing
            agriculture through seamless market connections. Join us in
            transforming the agricultural landscape of East Africa through
            innovation and collaboration
          </p>
          <div className="flex gap-8 relative">
            <Link to="/about">
              <button className="bg-yellow-400 rounded-2xl text-black p-3 px-5 hover:text-white hover:bg-green-900 transition duration-300 ease-in-out">
                DISCOVER MORE
              </button>
            </Link>
            <div className="mt-[-3rem] bottom-3 left-[12rem]">
              <PiArrowBendDownLeftThin className="text-yellow-400 text-9xl lg:block md:block sm:hidden" />
            </div>
          </div>
        </div>
      </div>
      <div className=" relative">
        <div className="absolute bottom-0 left-60"></div>
        <div className=" w-[6rem] h-[8rem] bg-[#0b5727] opacity-60 absolute rounded-r-xl top-32 left-0" data-aos="fade-right"></div>
        <div className="w-[5rem] h-[5rem] bg-yellow-400 opacity-90 absolute  rounded-2xl top-[36vh] left-12" data-aos="fade-left"></div>
        <div className="py-32 flex lg:flex-row md:flex-row sm:flex-col items-center justify-center gap-10">
          <div className="lg:w-[69vh] md:w-[44vh] sm:w-[44vh] flex flex-col lg:p-0 md:p-0 sm:p-3 gap-3" data-aos="fade-right">
            <p className="text-lg">Get to know our priority:</p>
            <p className="text-4xl text-green-900">Harvest Showcasing</p>
            <p className="text-lg text-justify sm:w-[60vh]">
              Cooperatives celebrating the food they grow, proudly show them off
              to everyone and throughout the day, they engage with the
              distributors and vendors for increasing MARKET ACCESS bridge the
              gap between farmers and buyers, promote agricultural development,
              and empower farmers through technology.
            </p>
            <p className="">
              <i>
                It is marvelous seeing farmers benefiting from what they have
                made{" "}
              </i>
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src="img/About.png"
              className="lg:w-[90vh] md:w-[66vh] sm:w-[70vh] rounded-lg"
            ></img>
          </div>
        </div>
      </div>

    {/* Missions */}

    <div className="bg-green-700 text-white h-100 flex lg:flex-row md:flex-col sm:flex-col items-center justify-evenly px-40 py-20 lg:pl-32 md:pl-0 sm:pl-10">
          <div className='flex flex-col gap-7 md:pl-0 lg:pl-0 sm:pl-32 mb-10'>
            <p className='text-2xl font-bold'>MISSION</p>
            <div>
              <p className=' lg:border-r-2 border-gray-400 lg:w-[60vh] md:w-[60vh] sm:w-[70vh] text-lg pr-5'>create a transparent, efficient, and inclusive agricultural marketplace that connects farmers, buyers,
                and other stakeholders, enabling fair and profitable transactions while promoting sustainability
                and economic growth in rural communities.
              </p>
            </div>

          </div>
          <div className='flex flex-col gap-7 sm:pl-16 mb-10'>
            <p className='text-2xl md:pl-0 sm:pl-7 font-bold'>VISION</p>
            <p className='lg:border-r-2 border-gray-400 lg:w-[60vh] md:w-[70vh] sm:w-[70vh] lg:pl-0 md:pl-0 sm:pl-8 text-lg pr-5'>
              revolutionize agricultural trade by leveraging technology to bridge the gap
              between producers and consumers, ensuring food security, empowering farmers, and fostering prosperity
              across the agricultural value chain.
            </p>
          </div>
        </div>
       {/* testimonials */}

       {/* Get in touch with us */}
       <div>
          <div className='flex lg:flex-row md:flex-col sm:flex-col justify-evenly py-28  bg-white'>
            <div className='lg:w-[44vh] md:w-[80vh] mb-10 sm:w-[44vh] flex flex-col lg:p-0 md:p-0 sm:p-3 gap-3  lg:ml-0 md:ml-20 sm:ml-7'>
              <p className=''>Contact now</p>
              <p className='text-5xl text-green-900 lg:w-[50vh]' data-aos="fade-right">Get in touch with us</p>
              <p className=''>our contact information reflects our commitment to providing excellent
                customer service and support to all users of our Agri-connectEA platform. Feel free to
                reach out to us with any questions or needs you may have.
              </p>
              <div className='flex gap-3' data-aos="fade-up">
                <div className='rounded-full bg-[#cfcfcb] flex items-center justify-center w-11 h-11 opacity-60 text-2xl' ><FaTwitter /></div>
                <div className='rounded-full bg-[#cfcfcb] flex items-center justify-center w-11 h-11 opacity-60 text-2xl' ><MdOutlineFacebook /></div>
                <div className='rounded-full bg-[#cfcfcb] flex items-center justify-center w-11 h-11 opacity-60 text-2xl' ><FaPinterestP /></div>
                <div className='rounded-full bg-[#cfcfcb] flex items-center justify-center w-11 h-11 opacity-60 text-2xl' ><FaInstagram /></div>
              </div>
            </div>
            <div className='flex flex-col gap-5 lg:ml-0 md:ml-20 sm:ml-7' data-aos="fade-up">
              <div className='flex lg:flex-row md:flex-col sm:flex-col gap-5'>
                <input type='text' placeholder='Names' className='bg-[#ebebea] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]'></input>
                <input type='email' placeholder='Email' className='bg-[#ebebea] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]'></input>
              </div>
              <div className='flex lg:flex-row md:flex-col sm:flex-col gap-5 '>
                <input type='phone' placeholder='Phone number' className='bg-[#ebebea] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]'></input>
                <input type='text' placeholder='Subject' className='bg-[#ebebea] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]'></input>
              </div>
              <div>
                <textarea placeholder='Write message' className='bg-[#ebebea] rounded-xl p-2 lg:w-[83vh] md:w-[80vh] sm:w-[40vh] h-[30vh]'></textarea>
              </div>
              <Link to='/contact' className=' bg-yellow-200 px-5 py-3 lg:w-[30vh] md:w-[27vh] sm:w-[27vh] text-xl rounded-xl text-black hover:text-white hover:bg-green-900'> Send message</Link>

            </div>
          </div>

        </div>
    </div>
  );
};

export default Home;
