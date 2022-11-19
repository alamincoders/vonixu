import Link from "next/link";
import React, { useState } from "react";
import { AboutLinks } from "./Links";

const About = ({ open, setOpen }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {AboutLinks.map((link, i) => (
        <div key={i}>
          <div className="pr-4 md:pr-1 lg:pr-0 text-left md:cursor-pointer group ">
            <h1
              className={` flex justify-start  space-x-2 items-center   group ${
                open ? "text-primary text-[20px] my-2 p-3 bg-[#022f6a1b]" : "text-primary"
              }`}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              <li className=" font-medium cursor-pointer">{link.name}</li>
              <span className="text-xl md:hidden inline">
                <ion-icon name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link?.submenu && (
              <div>
                <div className="absolute w-[150px] left-[53%] top-10 hidden duration-500 transition-opacity group-hover:md:block hover:md:block ">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-[18%] absolute 
                    mt-1 bg-gray-50  rotate-45"
                    ></div>
                  </div>
                  <div className="bg-gray-50 border-2 shadow-lg rounded-lg p-4">
                    <ul>
                      <li className="text-[15px] text-primary hover:text-[#fc8121] hover:translate-x-2 transition duration-300 text-gray-600 my-2.5">
                        <Link href="/agency" className="hover:text-primary">
                          Agency
                        </Link>
                      </li>
                      <li className="text-[15px] text-primary hover:text-[#fc8121] hover:translate-x-2 transition duration-300 text-gray-600 my-2.5">
                        <Link href="/ceo" className="hover:text-primary">
                          Our CEO
                        </Link>
                      </li>{" "}
                      <li className="text-[15px] text-primary hover:text-[#fc8121] hover:translate-x-2 transition duration-300 text-gray-600 my-2.5">
                        <Link href="/ourTeam" className="hover:text-primary">
                          Our Team
                        </Link>
                      </li>
                      <li className="text-[15px] text-primary hover:text-[#fc8121] hover:translate-x-2 transition duration-300 text-gray-600 my-2.5">
                        <Link href="/ourProcess" className="hover:text-primary">
                          Our Process
                        </Link>
                      </li>{" "}
                      <li className="text-[15px] text-primary hover:text-[#fc8121] hover:translate-x-2 transition duration-300 text-gray-600 my-2.5">
                        <Link href="/FAQs" className="hover:text-primary">
                          FAQs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            <ul className="text-[20px] p-3 ">
              <li className="text-[15px] text-primary hover:text-[#fc8121] hover:translate-x-2 transition duration-300 text-gray-600 my-2.5">
                <Link href="/agency" className="hover:text-primary">
                  Agency
                </Link>
              </li>
              <li className="text-[15px] text-primary hover:text-[#fc8121] hover:translate-x-2 transition duration-300 text-gray-600 my-2.5">
                <Link href="/ceo" className="hover:text-primary">
                  Our CEO
                </Link>
              </li>{" "}
              <li className="text-[15px] text-primary hover:text-[#fc8121] hover:translate-x-2 transition duration-300 text-gray-600 my-2.5">
                <Link href="/ourTeam" className="hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li className="text-[15px] text-primary hover:text-[#fc8121] hover:translate-x-2 transition duration-300 text-gray-600 my-2.5">
                <Link href="/ourProcess" className="hover:text-primary">
                  Our Process
                </Link>
              </li>{" "}
              <li className="text-[15px] text-primary hover:text-[#fc8121] hover:translate-x-2 transition duration-300 text-gray-600 my-2.5">
                <Link href="/FAQs" className="hover:text-primary">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default About;
