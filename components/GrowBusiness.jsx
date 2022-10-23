import Image from "next/image";
import graph from "../assets/graph/graph.png";

const GrowBusiness = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container  grid grid-col-1 lg:grid-cols-2 ">
        <div className="flex flex-col justify-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold flex flex-col space-y-2">
              <span className="text-primary">Grow Your Business With</span> <span className="text-secondary ">The Best Online Marketing</span>
              <span className="text-secondary "> Company</span>
            </h1>
            <div className="w-20 h-1 bg-secondary border-0 rounded-2xl "></div>
          </div>
          <p className="text-[18px] py-5">
            Through our proven Digital Marketing services we can help you get more traffic, help you convert those traffic into customers, and
            customers into advocates of your brand. Today Bizcope is a leading SEO service provider company in Bangladesh because of the results we
            provide our clients day-in and day-out.
          </p>
          <div>
            <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Discover More</span>
            </button>
          </div>
        </div>
        <div className="w-5/6  rounded-tr-3xl p-3 mx-auto">
          <Image src={graph} alt="graph" />
        </div>
      </div>
    </section>
  );
};

export default GrowBusiness;
