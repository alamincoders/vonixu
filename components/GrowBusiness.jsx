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
          <button className="hover:bg-white w-2/6 hover:text-[#022f6a] text-sm lg:text-xl px-8 py-3.5 border-0 rounded-lg hover:shadow-2xl hover:shadow-red-200 ring-1  font-medium  bg-[#022f6a] text-white duration-300 transition ease-in-out ">
            Discover more
          </button>
        </div>
        <div className="w-5/6  rounded-tr-3xl p-3 mx-auto">
          <Image src={graph} alt="graph" />
        </div>
      </div>
    </section>
  );
};

export default GrowBusiness;
