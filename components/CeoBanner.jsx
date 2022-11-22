import Image from "next/image";
import React from "react";
import ceo from "../assets/ceo-logo2.png";

const CeoBanner = () => {
  return (
    <>
      <section className="container py-10">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center md:items-center lg:items-center">
          <div className="space-y-2 relative ">
            <h1 className="text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-bold text-primary uppercase pb-3 lg:pb-5 xl:pb-10 ">
              <p className="text-[14px] font-bold leading-[1px] text-secondary">CEO at Vonixu</p>
              Kamrul Islam
              <span className="text-secondary">
                <br /> SEO Professional
              </span>{" "}
              <br />
              <span className="text-3xl "> Entrepreneur & Digital Marketer</span>
              <div className="w-20 h-1 bg-secondary border-0 rounded-2xl mt-3"></div>
            </h1>
            <div className="bg_shadow hidden md:block lg:block"></div>

            <div className=" hidden md:block lg:block  ">
              <p className=" text-[20px] mb-5">
                With a decade of experience in the Digital industry, <br /> we proved that the combination of strategic thinking <br /> and expertise
                will create a fascinating digital <br /> experience.
              </p>
              {/* <Button title="Talk With Our Award-Winning SEO Agency" /> */}
            </div>
          </div>
          <div>
            <div className="w-full h-full cursor-pointer">
              <Image src={ceo} alt="" />
            </div>
            <div className=" block md:hidden lg:hidden  mt-5 md:mt-2 lg:mt-0">
              <p className=" text-[20px] ">
                With a decade of experience in the Digital industry, <br /> we proved that the combination of strategic thinking <br /> and expertise
                will create a fascinating digital <br /> experience.
              </p>
              {/* <Button title="Talk With Our Award-Winning SEO Agency" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CeoBanner;
