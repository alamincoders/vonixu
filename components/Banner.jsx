import Image from "next/image";
import best from "../assets/brand/best.png";
import clutch from "../assets/brand/clucth.png";
import goodfirms from "../assets/brand/goodfirms.png";

const Banner = () => {
  return (
    <>
      <section className="container py-10">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center md:items-center lg:items-end">
          <div className="space-y-2 ">
            <h1 className="text-[35px] pb-10 font-bold text-primary uppercase  ">
              Data Driven{" "}
              <span className="text-secondary">
                Best <br /> Digital Marketing
              </span>{" "}
              Solution
              <div className="w-20 h-1 bg-secondary border-0 rounded-2xl mt-3"></div>
            </h1>
            <div className=" hidden md:block lg:block  ">
              <p className=" text-[20px] mb-5">
                With a decade of experience in the Digital industry, <br /> we proved that the combination of strategic thinking <br /> and expertise
                will create a fascinating digital <br /> experience.
              </p>
              <button className="hover:bg-white  hover:text-[#022f6a] text-sm lg:text-xl px-8 py-3.5 border-0 rounded-lg hover:shadow-2xl hover:shadow-red-200 ring-1  font-medium  bg-[#022f6a] text-white duration-300 transition ease-in-out ">
                Talk With Our Award-Winning SEO Agency
              </button>
            </div>
          </div>
          <div>
            <div className=" hidden md:flex lg:flex  gap-x-20 justify-center  mb-2 ">
              <div className="w-[60px] h-[60px]">
                <Image className="w-full h-full" src={clutch} alt="clutch" />
              </div>
              <div className="w-[70px] h-[70px]">
                <Image className="w-full h-full" src={goodfirms} alt="clutch" />
              </div>
              <div className="w-[70px] h-[70px]">
                <Image className="w-full h-full" src={best} alt="clutch" />
              </div>
            </div>
            <div className="bg-secondary rounded-xl  p-2">
              <iframe
                className=" min-w-full lg:min-w-[500px] min-h-[200px] lg:min-h-[370px]  rounded-xl"
                src="https://www.youtube.com/embed/A_AC9yn2leA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className=" block md:hidden lg:hidden  ">
              <p className=" text-[20px] ">
                With a decade of experience in the Digital industry, <br /> we proved that the combination of strategic thinking <br /> and expertise
                will create a fascinating digital <br /> experience.
              </p>
              <button className="bg-primary px-[20px] py-[13px] rounded-md text-white font-semibold mt-10 hover:bg-[#0c2341] duration-200 ease-in-out  ">
                Talk With Our Award-Winning SEO Agency
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
