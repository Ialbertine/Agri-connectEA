import React from "react";
import { Link } from "react-router-dom";
import { IoMdStats } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { PiTreeView } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { RiLogoutCircleLine } from "react-icons/ri";

function SideBar() {
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
        <div className="flex flex-col gap-5 w-[30vh]">
          <div className="w-40 h-20">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/dashboard/admin"
              className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
            >
              <IoMdStats />
              <button>Dashboard</button>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/dashboard/admin/farmers"
              className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
            >
              <GrGroup />
              <button>Farmers</button>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/dashboard/admin/operations"
              className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
            >
              <PiTreeView />
              <button>Operations</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-5">
            <Link
              to="/dashboard/admin/setting"
              className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
            >
              <SlSettings />
              <button>Settings</button>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/login"
              className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
            >
              <RiLogoutCircleLine />
              <button onClick={handleLogout}>Log Out</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
