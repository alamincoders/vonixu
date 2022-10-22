import React from "react";

const BrandBanner = () => {
  return (
    <div className="bg-default-color py-28 text-center">
      <div className="container">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white">
          Ready To Build Your Brand?
        </h2>
        <p className="text-xl lg:text-2xl uppercase font-semibold my-5 text-white">
          YOU ARE JUST ONE STEP AWAY TO EXPERIENCE THE PROGRESS.
        </p>
        <button className="bg-white text-default-color text-sm lg:text-xl px-8 py-3.5 border-0 rounded-sm font-medium  hover:bg-[#022f6a] hover:text-white duration-200 transition ease-in-out ">
          Let Us Build Your Business
        </button>
      </div>
    </div>
  );
};

export default BrandBanner;
