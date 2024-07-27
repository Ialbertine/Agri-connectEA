import React from "react";
import { Link } from "react-router-dom";
import { IoMdStats } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiFolderUploadLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdContactSupport } from "react-icons/md";

function BuyerSideBar() {

 const handleLogout = () => {
   const confirmLogout = window.confirm("Are you sure you want to log out?");
   if (confirmLogout) {
     localStorage.removeItem("token");
     window.location.href = "/";
   }
 };
  return (
    <>
      <div className=" flex flex-col justify-between text-2xl text-green-900 border-r-2 shadow-xl px-5 py-10 h-[100vh]">
        <div className="flex flex-col gap-5 w-[36vh]">
          <div className="w-40 h-20">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/dashboard/buyer"
              className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
            >
              <IoMdStats />
              <button>Dashboard</button>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/dashboard/buyer/allorders"
              className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
            >
              <MdOutlineAddShoppingCart />
              <button>Orders History</button>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/dashboard/buyer/news"
              className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
            >
              <RiFolderUploadLine />
              <button>News letter</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-5">
            <Link
              to="/dashboard/buyer/profile"
              className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
            >
              <CgProfile />
              <button>Profile</button>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/dashboard/buyer/support"
              className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
            >
              <MdContactSupport />
              <button>Help & support</button>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/"
              onClick={handleLogout}
              className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
            >
              <RiLogoutCircleLine />
              <button>Log Out</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyerSideBar;
