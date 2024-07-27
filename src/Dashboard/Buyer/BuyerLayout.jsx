import React from "react";
import { Outlet } from "react-router-dom";
import BuyerSideBar from "./BuyerSideBar";

const BuyerLayout = (props) => {
  return (
    <div className="flex">
      <div className=" fixed">
        <BuyerSideBar />
      </div>
      <section className="w-[80rem]  pl-[45vh]">
        <Outlet />
        {props.children}
      </section>
    </div>
  );
};

export default BuyerLayout;
