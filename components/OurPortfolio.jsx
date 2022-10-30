import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortfolioData } from "../data/data";
import Button from "./shared/Button";

const OurPortfolio = () => {
  return (
    <>
      <section className="container py-10">
        <h1 className="text-4xl font-bold">
          <span className="text-primary">Our</span> <span className="text-secondary ">Portfolio</span>
        </h1>

        <div className="w-[240px] h-1 bg-primary border-0 rounded-2xl "></div>

        <p className="text-md py-5 ">
          We work for customer satisfaction and happiness! We have done it over and over again. Look through our many web design and development
          projects and feel the vibe in you. Our hard work and expertise drove us into the best web design company in Bangladesh and worldwide. We
          just don’t just want to tell, we want to show you too.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 py-10">
          {PortfolioData.slice(0, 3).map((image) => (
            <div key={image.id}>
              <div className="cursor-pointer ">
                <Image className="w-[70px] h-[70px]" src={image.image} alt="include" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/webPortfolio" passHref>
            <a rel="noopener noreferrer">
              <Button title="View Portfolio" />
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default OurPortfolio;
