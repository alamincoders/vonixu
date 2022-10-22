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
        <div className="flex space-x-16 justify-center items-center">
          <ul className="flex space-x-8">
            <li className="text-[18px] font-medium text-primary cursor-pointer">About</li>
            <li className="text-[18px] font-medium text-primary cursor-pointer">Services</li>
            <li className="text-[18px] font-medium text-primary cursor-pointer">Blog</li>
            <li className="text-[18px] font-medium text-primary cursor-pointer">Carrier</li>
            <li className="text-[18px] font-medium text-primary cursor-pointer">Contact</li>
          </ul>
          <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Get A Proposal</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
