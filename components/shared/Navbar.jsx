import Image from "next/image";
import React from "react";
import logo from "../../assets/logo/web/png.png";

const Navbar = () => {
  return (
    <div className="bg-white border-b-2 border-gray-100  fixed w-full top-0 z-[999]">
      <div className="container flex justify-between items-center relative py-1">
        <div className="">
          <Image src={logo} alt="logo" />
        </div>
        <div className="inline-flex space-x-16">
        <ul className="flex space-x-8">
          <li className="text-[16px]">Home</li>
          <li className="text-[16px]">Home</li>
          <li className="text-[16px]">Home</li>
          <li className="text-[16px]">Home</li>
          <li className="text-[16px]">Home</li>
        </ul>
          <button className=""> Get A Proposal </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
