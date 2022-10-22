import Image from "next/image";
import clutch from '../assets/brand/clucth.png'
import google from '../assets/brand/google.png'
import goodfirms from '../assets/brand/goodfirms.png'

const Banner = () => {
  return (
    <>
      <section className="container py-10">
        <div className="flex flex-col md:flex-row lg:flex-row   justify-between items-center ">
          <div>
            <h1 className="text-[40px] pb-10 ">
              Data Driven Best <br /> Digital Marketing Solution
            </h1>
            <div className=" hidden md:block lg:block  ">
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
          <div>
            <div className=" hidden md:flex lg:flex  gap-x-20 justify-center pb-8  ">
              <Image width={70} height={70} src={clutch} alt="clutch" />
              <Image width={70} height={70} src={google} alt="google" />
              <Image width={70} height={70} src={goodfirms} alt="goodfirms" />
            </div>
            <div>
              <iframe
                className=" w-full h-[200px] "
                src="https://www.youtube.com/embed/A_AC9yn2leA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className=" block md:hidden lg:hidden  ">
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
