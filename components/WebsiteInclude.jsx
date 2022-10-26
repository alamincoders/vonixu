import Image from 'next/image';
import React from 'react';
import { WebsiteIncludesData } from '../data/data';

const WebsiteInclude = () => {
  return (
    <section className="container py-10">
      <h1 className="text-4xl font-bold">
        <span className="text-primary">What Our</span>{" "}
        <span className="text-secondary ">Websites Include​</span>
      </h1>
      <div className="w-[240px] h-1 bg-primary border-0 rounded-2xl "></div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 py-10">
        {WebsiteIncludesData.map((include) => (
          <div key={include.id}>
            <div className="relative h-full block text-center cursor-pointer hover:bg-gray-200 hover:rounded-lg duration-300 transition ease-in-out border-violet-600 rounded-tl-lg p-8 shadow-md ">
              <Image className='w-[50px] h-[50px]' src={include.image} alt="include" />
              <h3 className="text-xl text-primary font-bold">{include.name}</h3>
              <p className="mt-4 text-[16px] font-medium text-gray-700">
                {include.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebsiteInclude;