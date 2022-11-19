import Image from 'next/image';
import React from 'react';
import digital_agency from '../../assets/agency/digital_marketing_agency.png'

const AFullService = () => {
  return (
    <>
      <section className="container py-10">
        <div className="grid grid-col-1 lg:grid-cols-2 items-center justify-between">
          <div className=" block  lg:hidden   mx-auto">
            <Image src={digital_agency} alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-[36px] text-primary font-bold">
              A full service digital marketing agency
            </h1>

            <p className="text-[15px] mt-[18px] font-light ">
              Faisal Mustafa is one of the most reputed and #1 best SEO experts
              and consultants in Bangladesh. He has helped thousands of
              businesses to grow online. His motto is empowering digital
              presence. He is providing digital marketing services for more than
              ten (10) years now.
            </p>
          </div>
          <div className="hidden  lg:block mx-auto">
            <Image src={digital_agency} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AFullService;