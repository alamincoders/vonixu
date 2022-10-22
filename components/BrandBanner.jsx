import React from "react";

const BrandBanner = () => {
  return (
    <div className="bg-primary py-28 text-center">
      <div className="container">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white">Ready To Build Your Brand?</h2>
        <p className="text-xl lg:text-2xl uppercase font-semibold my-5 text-white">YOU ARE JUST ONE STEP AWAY TO EXPERIENCE THE PROGRESS.</p>
        <button class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
          <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-secondary opacity-0 group-hover:opacity-100"></span>
          <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> Let Us Build Your Business</span>
        </button>
      </div>
    </div>
  );
};

export default BrandBanner;
