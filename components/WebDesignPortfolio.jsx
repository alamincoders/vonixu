import Image from 'next/image';
import React from 'react';
import { PortfolioData } from '../data/data';

const WebDesignPortfolio = () => {
  return (
    <>
      <section className="container py-10">
        <h1 className="text-4xl font-bold">
          <span className="text-primary">Our</span>{" "}
          <span className="text-secondary ">Portfolio</span>
        </h1>

        <div className="w-[65px] h-1 bg-primary border-0 rounded-2xl "></div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 py-10">
          {PortfolioData.map((image) => (
            <div key={image.id}>
              <div className="cursor-pointer overflow-hidden w-[320px] h-[320px] mx-auto">
                <Image
                  className="w-full h-full duration-400 transition-all hover:scale-110 "
                  src={image.image}
                  alt="include"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WebDesignPortfolio;