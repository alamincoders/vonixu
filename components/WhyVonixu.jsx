import Image from "next/image";
import React from "react";
import why_vonixu from "../assets/why_vonixu/why_vonixu.png";

const WhyVonixu = () => {
  return (
    <section className="container py-10" >
      <div>
        <div>
          <Image src={why_vonixu} alt="" />
        </div> 
        <div>
          <h1>
            <span>Why</span> <span>Vonixu</span>{" "}
          </h1>
          <p>
            The answer is simple –{" "}
            <strong>Bizcope helps you achieve more sales and revenue</strong>{" "}
            from our Digital Marketing services. As we are in the industry for
            more than 11 years now (from 2010) we have grown high-level
            expertise in this industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyVonixu;
