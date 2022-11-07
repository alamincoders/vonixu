import React from 'react';

const OverPercent = ({title1,title2,title3, p1, p2, p3}) => {
  return (
    <>
      <section className="bg-primary py-16 text-center">
        <div className=" grid md:grid-cols-3 justify-center space-x-10 container  space-y-5 md:space-y-0 items-center  ">
          <div className="text-center text-white">
            <h1 className="text-3xl font-semibold">
              {/* Over 50% */}
              {title1}
            </h1>
            <p className="text-[15px] mt-3 ">
              {/* of local SEO searches turn into an actual in-store visit within 24
              hours */}
              {p1}
            </p>
          </div>
          <div className='text-white text-center ' >
            <h1 className="text-3xl font-semibold">
              {/* 82% */}
              {title2}
            </h1>
            <p className="text-[15px] mt-3 ">
              {/* of people use their phones to conduct near me searches */}
              {p2}
            </p>
          </div> 
          <div className='text-white text-center ' >
            <h1 className="text-3xl font-semibold">
              {/* 97% */}
              {title3}
              </h1>
            <p className="text-[15px] mt-3 ">
              {/* of individuals searched online to find a local business */}
              {p3}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverPercent;