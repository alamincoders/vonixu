import Link from "next/link";
import React, { useState } from "react";
import Links from "./Links";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {Links.map((link, i) => (
        <div key={i}>
          <div className="pr-4 md:pr-1 lg:pr-0 text-left md:cursor-pointer group">
            <h1
              className=" flex justify-start text-white space-x-2 items-center  group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              <li className="text-[16px] font-medium text-white  cursor-pointer">{link.name}</li>
              <span className="text-xl md:hidden inline">
                <ion-icon name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute w-full -left-[0.3%] top-10 hidden opacity-0 hover:opacity-100 hover:translate-y-0 -translate-y-full md:block hover:md:block transition duration-500 ">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-[35%] absolute 
                    mt-1 bg-gray-50  rotate-45"
                    ></div>
                  </div>
                  <div className="bg-gray-50 border-2 shadow-lg rounded-lg p-5 grid grid-cols-6 gap-6">
                    {link.sublinks.map((mysublinks, i) => (
                      <div key={i}>
                        <h1 className="text-md font-semibold">{mysublinks.Head}</h1>
                        {mysublinks.sublink.map((slink, i) => (
                          <li key={i} className="text-[14px] text-gray-600 my-2.5">
                            <Link href={slink.link} className="hover:text-primary">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
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
            {link.sublinks.map((slinks, i) => (
              <div key={i}>
                <div>
                  <h1
                    onClick={() => (subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading(""))}
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-start space-x-2 items-center"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon name={`${subHeading === slinks.Head ? "chevron-up" : "chevron-down"}`}></ion-icon>
                    </span>
                  </h1>
                  <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                    {slinks.sublink.map((slink, i) => (
                      <li key={i} className="py-3 pl-14">
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
