import Image from "next/image";
import React from "react";
import why_vonixu from "../assets/why_vonixu/why_vonixu.png";
import clutch from "../assets/brand/clucth.png";
import goodfirms from "../assets/brand/goodfirms.png";
import best from "../assets/brand/best.png";

const WhyVonixu = () => {
  return (
    <section className="container py-10">
      <div className=" grid grid-col-1 lg:grid-cols-2 ">
        <div className="w-5/6 bg-gray-50 rounded-tl-[40px] p-6 mx-auto">
          <Image src={why_vonixu} alt="" />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-[40px] font-bold">
            <span className="text-primary">Why</span>{" "}
            <span className="text-secondary ">Vonixu</span>
          </h1>
          <p className="text-[18px]">
            The answer is simple –{" "}
            <strong>Bizcope helps you achieve more sales and revenue</strong>{" "}
            from our Digital Marketing services. As we are in the industry for
            more than 11 years now (from 2010) we have grown high-level
            expertise in this industry.
          </p>
          <div className=" hidden md:flex lg:flex  gap-x-20  pb-8  ">
            <div className="w-[60px] h-[60px]">
              <Image className="w-full h-full" src={clutch} alt="clutch" />
            </div>
            <div className="w-[70px] h-[70px]">
              <Image className="w-full h-full" src={goodfirms} alt="clutch" />
            </div>
            <div className="w-[70px] h-[70px]">
              <Image className="w-full h-full" src={best} alt="clutch" />
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVonixu;
