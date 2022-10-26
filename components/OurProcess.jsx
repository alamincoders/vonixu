import Image from 'next/image';
import React from 'react';
import { OurProcessData } from '../data/data';

const OurProcess = () => {
  return (
    <section className="bg-[#4c63e736] py-16">
      <div className="container py-8">
        <h1 className="text-4xl font-bold">
          <span className="text-primary">Our Process Of</span>{" "}
          <span className="text-secondary ">Web Design</span>
        </h1>

        <p className="text-[17px] my-5">
          It’s simple! You don’t have to sweat. In just a few steps and we can
          get started with your web design and development project.
        </p>

        <div className="grid  xl:grid-cols-2 pt-4 gap-8 ">
          {OurProcessData.map((process) => (
            <div key={process.id}>
              <div className="relative block text-center cursor-pointer bg-white rounded-br-lg rounded-tl-lg p-8  h-full drop-shadow-md">
                <Image
                  className="w-[50px] h-[50px]"
                  src={process.image}
                  alt="include"
                />
                <h3 className="text-2xl text-primary font-bold">
                  {process.name}
                </h3>
                <p className="mt-4 text-[16px] font-medium text-gray-700">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;