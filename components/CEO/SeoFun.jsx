import Image from 'next/image';
import React from 'react';
import seo2 from '../../assets/ceo/seo2.png'

const SeoFun = () => {
  return (
    <>
      <section className="container py-10">
        <div className=" grid grid-col-1 lg:grid-cols-2 gap-y-8">
          <div className="w-5/6 mx-auto">
            <Image src={seo2} alt="" />
          </div>
          <div className="flex flex-col justify-center ">
            <h1 className=" text-[42px] font-bold">SEO Is Fun!!!</h1>
            <p className="text-[15px] my-[15px] ">
              Faisal Mustafa is an experienced best SEO expert in Bangladesh
              with more than 10 years of experience in the digital marketing
              industry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoFun;