import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useState } from "react";
import logo from "../../../assets/logo/web/png.png";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-100 py-2 border-gray-50/70 border-gray-100  fixed w-full top-0 z-[999]">
      <div className=" container flex justify-between items-center relative">
        <div className="z-50 md:w-auto w-full flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <Script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></Script>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <div className="md:flex hidden uppercase items-center gap-8">
          <ul className="inline-flex space-x-5">
            <Link href="/">
              <li className="text-[16px] font-medium text-primary cursor-pointer">Home</li>
            </Link>
            <Link href="/about">
              <li className="text-[16px] font-medium text-primary cursor-pointer">About</li>
            </Link>
          </ul>
          <NavLinks />
          <ul className="inline-flex space-x-5">
            <Link href="/blog">
              <li className="text-[16px] font-medium text-primary cursor-pointer">Blog</li>
            </Link>
            <Link href="/carrier">
              <li className="text-[16px] font-medium text-primary cursor-pointer">Carrier</li>
            </Link>
            <Link href="/contact">
              <li className="text-[16px] font-medium text-primary cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="md:block hidden">
          <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Get A Proposal</span>
          </button>
        </div>
        {/* Mobile nav */}
        <div
          className={`md:hidden bg-white fixed w-full uppercase top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] "} `}
        >
          <ul>
            <Link href="/">
              <li className="text-[16px] font-medium text-primary cursor-pointer">Home</li>
            </Link>
            <Link href="/about">
              <li className="text-[16px] font-medium text-primary cursor-pointer">About</li>
            </Link>
          </ul>
          <NavLinks />
          <ul>
            <Link href="/blog">
              <li className="text-[16px] font-medium text-primary cursor-pointer">Blog</li>
            </Link>
            <Link href="/carrier">
              <li className="text-[16px] font-medium text-primary cursor-pointer">Carrier</li>
            </Link>
            <Link href="/contact">
              <li className="text-[16px] font-medium text-primary cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
