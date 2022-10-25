import React from "react";

const Button = ({ title }) => {
  return (
    <button className="relative mt-5 px-5 py-2.5 font-medium text-white group text-[13px] lg:text-[16px]">
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-secondary group-hover:bg-purple-700 group-hover:skew-x-12"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-primary group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
      <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
      <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
      <span className="relative">{title}</span>
    </button>
  );
};

export default Button;
