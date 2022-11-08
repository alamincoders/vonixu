import React from "react";
import Button from "../shared/Button";

const SEOApproach = ({
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
  p1,
  p2,
  p3
}) => {
  return (
    <>
      <section className="container py-10">
        <div className=" grid grid-col-1 gap-x-40 lg:grid-cols-2 gap-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl text-primary font-semibold">
              {/* Our Affordable Local SEO Services Approach */}
              {title1}
            </h1>
            <p className="text-[15px]">
              {/* Manta has been supporting local businesses for over 20 years by increasing their website and foot traffic and generating growth. Whether
              you own an individual business, multiple locations in the region, or are a national franchise, we can help! */}
              {p1}
            </p>
            <p className="text-[15px]">
              {/* A successful campaign should optimize for three main local search ranking factors: <strong>Relevance, Distance, and Proximity.</strong>{" "}
              Consistency and implementing these strategies listed above are crucial if you want to rank well and increase your local reach. */}
              {p2}
            </p>
            <p className="text-[15px]">
              {/* Manta’s <span className=" underline ">online marketing solutions</span> can help you achieve this! We believe in leveling the playing
              field for small businesses. Get connected today with one of our local SEO experts for more details and answers to your questions. */}
              {p3}
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4 ">
            <h1 className="text-2xl text-primary font-semibold">
              {/* Manta’s affordable local SEO services include: */}
              {title2}
            </h1>
            <div className="flex items-center">
              <svg
                class="w-5 h-5 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              <h6 className="text-[15px]">
                {/* Local business citation and directory development (including Google Business Profile) */}
                {title3}
              </h6>
            </div>
            <div className="flex items-center">
              <svg
                class="w-5 h-5 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              <h6 className="text-[15px]">
                {/* Location and “near me” keyword strategy */}
                {title4}
              </h6>
            </div>
            <div className="flex items-center">
              <svg
                class="w-5 h-5 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              <h6 className="text-[15px]">
                {/* Content creation and repurposing */}
                {title5}
              </h6>
            </div>
            <div className="flex items-center">
              <svg
                class="w-5 h-5 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              <h6 className="text-[15px]">
                {/* Onsite and technical optimizations */}
                {title6}
              </h6>
            </div>
            <div className="flex items-center">
              <svg
                class="w-5 h-5 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              <h6 className="text-[15px]">
                {/* Authority link building */}
                {title7}
              </h6>
            </div>
            <div className="flex items-center">
              <svg
                class="w-5 h-5 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              <h6 className="text-[15px]">
                {/* Monitoring data and progress using Google Analytics and Google
                Search Console */}
                {title8}
              </h6>
            </div>
            <Button title="Get Started" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOApproach;
