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
            <h1 className="text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-bold text-primary uppercase  ">
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
              <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary rounded-xl group">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-secondary rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-secondary  group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
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
