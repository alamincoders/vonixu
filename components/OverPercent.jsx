import React from 'react';

const OverPercent = () => {
  return (
    <>
      <section className="bg-primary py-16 text-center">
        <div className=" grid md:grid-cols-3 justify-center space-x-10 container  space-y-5 md:space-y-0 items-center  ">
          <div className="text-center text-white">
            <h1 className="text-3xl font-semibold">Over 50%</h1>
            <p className="text-[15px] mt-3 ">
              of local SEO searches turn into an actual in-store visit within 24
              hours
            </p>
          </div>
          <div className='text-white' >
            <h1 className="text-3xl font-semibold">82%</h1>
            <p className="text-[15px] mt-3 ">
              of people use their phones to conduct near me searches
            </p>
          </div>
          <div className='text-white' >
            <h1 className="text-3xl font-semibold">97%</h1>
            <p className="text-[15px] mt-3 ">
              of individuals searched online to find a local business
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverPercent;