import React from "react";

const Button = ({ title }) => {
  return (
    <button className="rounded-md mt-5 px-5 py-3 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-[#022f6a] hover:to-[#fc80217c] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#fc8121] transition-all ease-out duration-500 ">
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-80 ease"></span> 
      <span className="relative">{title}</span>
    </button>
  );
};
 
export default Button;
