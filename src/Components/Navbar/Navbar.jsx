import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import logo from "../Navbar/images/kfclogo.png";
import delivery from "../Navbar/images/dilivery.png";
import pickup from "../Navbar/images/pickup.png";
import { HiTrash } from "react-icons/hi2";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-12 py-[30px] bg-[#000000] max-md:px-4 max-md:py-[15px]">
        <div className="w-[450px] flex justify-around max-md:w-[100%] max-md:justify-between">
          <div className="flex justify-center items-center text-[white]">
            <RiMenu2Fill className=" text-3xl max-md:text-lg" />
          </div>
          <div className="">
            <img src={logo} alt="" className="max-md:w-12" />
          </div>
          <div className="w-[140px] flex justify-evenly items-center bg-[#1c1816] text-[white] rounded-lg max-md:w-[100px]">
            <img src={delivery} alt="" className="w-6" />
            <p className="uppercase text-sm font-[650] max-md:text-[12px]">Delivery</p>
          </div>
          <div className="w-[140px] flex justify-evenly items-center bg-[#1c1816] text-[white] rounded-lg max-md:w-[100px]">
            <img src={pickup} alt="" className="w-6" />
            <p className="uppercase text-sm font-[650] max-md:text-[12px]">Pickup</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-[100px] max-md:hidden">
          <div className="flex justify-center items-center text-[white]">
            <HiTrash className="text-2xl"/>
          </div>
          <div className="">
            <button className="bg-[#ea002a] text-[white] uppercase p-2 rounded font-bold">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
