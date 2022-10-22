import Image from "next/image";
import React from "react";
import why_vonixu from "../assets/why_vonixu/why_vonixu.png";
import clutch from "../assets/brand/clucth.png";
import google from "../assets/brand/google.png";
import goodfirms from "../assets/brand/goodfirms.png";

const WhyVonixu = () => {
  return (
    <section className="container py-10">
      <div className=" flex justify-between items-center ">
        <div >
          <Image src={why_vonixu} alt="" />
        </div>
        <div>
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
          <div className=" hidden md:flex lg:flex  gap-x-20 justify-center pb-8  ">
            <Image width={70} height={70} src={clutch} alt="clutch" />
            <Image width={70} height={70} src={google} alt="google" />
            <Image width={70} height={70} src={goodfirms} alt="goodfirms" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVonixu;
