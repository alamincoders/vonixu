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

        <div className="w-[240px] h-1 bg-primary border-0 rounded-2xl "></div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 py-10">
          {PortfolioData.map((image) => (
            <div key={image.id}>
              <div className="cursor-pointer ">
                <Image
                  className="w-[70px] h-[70px]"
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