import Image from "next/image";
import React from "react";
import Button from "../shared/Button";
import ceo from "../../assets//ceo/ceo.png";

const Banner = () => {
  return (
    <>
      <section className=" bg-[#F2F5FF] py-10">
        <div className="container grid grid-col-1 lg:grid-cols-2 gap-y-8">
          <div className=" block  lg:hidden  w-5/6 rounded-tl-[40px] p-6 mx-auto">
            <Image src={ceo} alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-4 ">
            <h1 className=" text-[27px] font-bold text-[#575757] ">
              #1 Best SEO Expert In Bangladesh
            </h1>
            <h1 className="text-[50px] font-bold">Kamrul Hasan</h1>
            <h2 className=" text-[20px] my-[20px] font-bold">
              {" "}
              CEO, VISER X LIMITED Head of Ideas, SEOVISER
            </h2>
            <p className="text-[18px] my-[18px] ">
              Faisal Mustafa is one of the most reputed and #1 best SEO experts
              and consultants in Bangladesh. He has helped thousands of
              businesses to grow online. His motto is empowering digital
              presence. He is providing digital marketing services for more than
              ten (10) years now.
            </p>
            <table class="table-fixed">
              <tbody>
                <tr className="text-[14px]">
                  <td className="text-primary font-bold">Address</td>
                  <td className="font-semibold">
                    Vonixu, Plot 6, Road 2, Sector 11, Uttara, Dhaka -1230, BD.
                  </td>
                </tr>
                <tr className="text-[14px]">
                  <td className="text-primary font-bold">E-mail</td>
                  <td className="font-semibold">kamrul@vonixu.com</td>
                </tr>
                <tr className="text-[14px]">
                  <td className="text-primary font-bold">Phone</td>
                  <td className="font-semibold">+8801842088100</td>
                </tr>
              </tbody>
            </table>
            <Button title="Message" />
          </div>
          <div className="hidden  lg:block  w-5/6 rounded-tl-[40px] p-6 mx-auto">
            <Image src={ceo} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
