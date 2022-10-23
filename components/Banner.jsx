import Image from "next/image";
import best from "../assets/brand/best.png";
import clutch from "../assets/brand/clucth.png";
import goodfirms from "../assets/brand/goodfirms.png";

const Banner = () => {
  return (
    <>
      <section className="container py-10">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center md:items-center lg:items-end">
          <div className="space-y-2 relative ">
            <h1 className="text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-bold text-primary uppercase pb-3 lg:pb-5 xl:pb-10 ">
              Data Driven{" "}
              <span className="text-secondary">
                Best <br /> Digital Marketing
              </span>{" "}
              Solution
              <div className="w-20 h-1 bg-secondary border-0 rounded-2xl mt-3"></div>
            </h1>
            <div className="bg_shadow hidden md:block lg:block"></div>
            <div className=" hidden md:block lg:block  ">
              <p className=" text-[20px] mb-5">
                With a decade of experience in the Digital industry, <br /> we
                proved that the combination of strategic thinking <br /> and
                expertise will create a fascinating digital <br /> experience.
              </p>
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
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  {" "}
                  Talk With Our Award-Winning SEO Agency
                </span>
              </button>
            </div>
          </div>
          <div>
            <div className=" hidden md:hidden lg:flex  gap-x-20 justify-center  mb-2 ">
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
            <div className="bg-secondary rounded-xl mt-14 p-2">
              <iframe
                className=" min-w-full block md:hidden lg:block  lg:min-w-[350px] xl:min-w-[500px]  min-h-[200px] lg:min-h-[370px]  rounded-xl"
                src="https://www.youtube.com/embed/A_AC9yn2leA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className=" block md:hidden lg:hidden  mt-5 md:mt-2 lg:mt-0">
              <p className=" text-[20px] ">
                With a decade of experience in the Digital industry, <br /> we
                proved that the combination of strategic thinking <br /> and
                expertise will create a fascinating digital <br /> experience.
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
