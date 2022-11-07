import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useState } from "react";
import logo from "../../../assets/logo/web/png.png";
import Button from "../Button";
import About from "./About";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <nav className="bg-white py-2 border-gray-50/70 border-gray-100  fixed w-full top-0 z-[999]">
      <div className=" container flex justify-between items-center relative">
        <div className="z-50 md:w-auto w-full flex justify-between items-center cursor-pointer">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <Script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></Script>
          <div className="text-3xl md:hidden text-secondary " onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <div className="md:flex hidden  items-center gap-8">
          <ul className="inline-flex  space-x-5">
            <Link href="/">
              <li className="text-[16px]  font-medium text-primary cursor-pointer">Home</li>
            </Link>
          </ul>

          <NavLinks />

          <ul className="inline-flex space-x-5">
            <Link href="/portfolio">
              <li className="text-[16px]  font-medium text-primary cursor-pointer">Portfolio</li>
            </Link>
            <Link href="/blog">
              <li className="text-[16px]  font-medium text-primary cursor-pointer">Blog</li>
            </Link>
          </ul>
          <About />
          <ul className="inline-flex">
            <Link href="/contact">
              <li className="text-[16px] font-medium text-primary cursor-pointer">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="md:block hidden">
          <button
            onClick={() => setShowModal(true)}
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Get A Proposal</span>
          </button>
          <>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative">
                    <div className="grid grid-cols-2  w-[680px]">
                      <div className="bg-white py-32 px-5 rounded-l">
                        <h3 className="text-3xl text-primary font-semibold ">Get Started Today!</h3>
                        <p className="my-5 text-[14px] text-gray-600">
                          We work 24/7 round the clock to satisfy our clients and help them to satisfy their clients. If you want to know how can we
                          help your business just fill the form and click on Start Now button! One of our team members will call you shortly.
                        </p>
                        <ul>
                          <li className="hover:underline">
                            <a className="flex items-center justify-center gap-1.5" href="www.gmail.com">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>

                              <span className="text-primary">john@doe.com</span>
                            </a>
                          </li>

                          <li className=" hover:underline">
                            <a className="flex items-center justify-center gap-1.5" href="www.phone.com">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>

                              <span className="text-primary">0123456789</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-200 py-32 px-5 rounded-r">
                        <form action="#">
                          <input type="text" placeholder="Name" className="my-3 bg-white border-none w-full px-3 py-2 rounded" />{" "}
                          <input type="email" placeholder="Email" className="my-3 bg-white border-none w-full px-3 py-2 rounded" />{" "}
                          <input type="text" placeholder="🔗 Website" className="my-3 bg-white border-none w-full px-3 py-2 rounded" />
                          <label>
                            <input type="radio" name="indoor-outdoor" />
                            <span className="ml-1">Digital Marketing</span>
                          </label>{" "}
                          <label>
                            <input type="radio" name="indoor-outdoor" />
                            <span className="ml-1">Web Design</span>
                          </label>{" "}
                          <br />
                          <label>
                            <input type="radio" name="indoor-outdoor" />
                            <span className="ml-1">SEO</span>
                          </label>{" "}
                          <label>
                            <input type="radio" name="indoor-outdoor" />
                            <span className="ml-1">SMM</span>
                          </label>{" "}
                          <label>
                            <input type="radio" name="indoor-outdoor" />
                            <span className="ml-1">Web Development</span>
                          </label>
                        </form>
                        <Button title="Start Now" />
                      </div>
                    </div>
                    <div className="absolute top-10 right-10 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-700"
                        onClick={() => setShowModal(false)}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div onClick={() => setShowModal(false)} className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>
        </div>
        {/* Mobile nav */}
        <div
          className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 
        duration-500 ${open ? "left-0" : "right-[-100%] "} `}
        >
          <ul className="pr-4" onClick={() => setOpen(false)}>
            <Link href="/">
              <li className="text-[20px] my-2 p-3 bg-[#022f6a1b] font-medium text-primary cursor-pointer">Home</li>
            </Link>
          </ul>
          <NavLinks className="px-4" setOpen={setOpen} open={open} />
          <ul className="pr-4" onClick={() => setOpen(false)}>
            <Link href="/blog">
              <li className="text-[20px] my-2 p-3 bg-[#022f6a1b] font-medium text-primary cursor-pointer">Blog</li>
            </Link>
            <Link href="/portfolio">
              <li className="text-[20px] my-2 p-3 bg-[#022f6a1b] font-medium text-primary cursor-pointer">Portfolio</li>
            </Link>
            <Link href="/contact">
              <li className="text-[20px] my-2 p-3 bg-[#022f6a1b] font-medium text-primary cursor-pointer">Contact Us </li>
            </Link>
          </ul>
          <About setOpen={setOpen} open={open} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
