import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/logo/web/png.png";

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);
  return (
    <div className="bg-white border-b-2 border-gray-50/70 border-gray-100  fixed w-full top-0 z-[999]">
      <div className="container flex justify-between items-center py-1 relative">
        <div className="">
          <Image src={logo} alt="logo" />
        </div>

        <div className="space-x-16 justify-center items-center  hidden md:hidden lg:flex">
          <ul className="space-x-8 flex ">
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
        {/*  */}
        {mobileActive && (
          <div className="space-x-16 justify-center flex flex-col w-full  absolute top-20 py-5 left-0 bg-[#fc8121] ">
            <ul onClick={() => setMobileActive()} className="flex  flex-col w-full space-y-4 text-center">
              <li className="text-[18px] font-medium text-primary cursor-pointer border-b-2 border-gray-50/70 mx-2 uppercase pb-4 md:mx-44">About</li>
              <li className="text-[18px] font-medium text-primary cursor-pointer border-b-2 border-gray-50/70 mx-2 uppercase pb-4 md:mx-44">
                Services
              </li>
              <li className="text-[18px] font-medium text-primary cursor-pointer border-b-2 border-gray-50/70 mx-2 uppercase pb-4 md:mx-44">Blog</li>
              <li className="text-[18px] font-medium text-primary cursor-pointer border-b-2 border-gray-50/70 mx-2 uppercase pb-4 md:mx-44">
                Carrier
              </li>
              <li className="text-[18px] font-medium text-primary cursor-pointer border-b-2 border-gray-50/70 mx-2 uppercase pb-4 md:mx-44">
                Contact
              </li>
              <button class="relative mx-2 md:mx-44 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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
            </ul>
          </div>
        )}
        <div className="inline-block md:inline-block lg:hidden">
          {mobileActive ? (
            <svg
              onClick={() => setMobileActive()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-secondary font-medium"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              onClick={() => setMobileActive(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-secondary font-medium"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
