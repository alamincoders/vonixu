import React from 'react';

const AboutUs = () => {
  return (
    <>
      <section className="container py-10">
        <h1 className="text-4xl font-bold text-center text-primary ">
          About Us
        </h1>
        <p className="text-center text-xl py-5 ">
          When we started 11 years ago, it was the Nahid Hasan and a small team.
          We were desperate, dedicated, and keen to learn new things to prove
          ourselves. It grew even bigger in the last couple of years that goes
          beyond 60 years of cumulative experience.
        </p>

        <div className="bg-secondary rounded-xl mt-14 p-2">
          <iframe
            className=" min-w-full block md:hidden lg:block  lg:min-w-[350px] xl:min-w-[1105px]  min-h-[200px] lg:min-h-[550px]  rounded-xl"
            src="https://www.youtube.com/embed/A_AC9yn2leA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> 
      </section>
        <div className="bg-primary py-24 -mt-28 text-center">
          <div className="container">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white">
            We Help Businesses Get More Rank, Traffic And Sale
            </h2>
          </div>
        </div>
    </>
  );
};

export default AboutUs;