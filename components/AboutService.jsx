import Image from "next/image";
import digitalMarketign from "../assets/services/digitalmarketing.jpg";
import SEO from "../assets/services/seio.png";
import webDesign from "../assets/services/webdesing.jpg";
import Button from "./shared/Button";

const AboutService = () => {
  return (
    <>
      <div className="relative container py-20 bg-gray-50 rounded-2xl  ">
        <div className="flex flex-col-reverse md:flex-row lg:flex-row text-center lg:text-start lg:justify-between  space-x-0 md:space-x-4  lg:space-x-8  items-center  px-5 lg:px-20">
          <div className="mt-5">
            <h1 className="text-3xl lg:text-[62px] leading-[60px] text-primary font-semibold">Digital Marketing</h1>
            <p className="text-[17px] mt-10">
              We provide a complete digital marketing <br /> solution for all sorts of business.
            </p>
            <Button title="Discover More" />
          </div>
          <div className="shadow-[0_30px_40px_-20px_rgba(5,5,0,0.5)] bg-white p-3 rounded-md w-full  max-w-[525px] h-full max-h-[250] mt-8 md:mt-0 lg:mt-0">
            <Image src={digitalMarketign} className="rounded-md" alt="" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row text-center lg:text-start lg:justify-start mt-2 lg:mt-20  space-x-0 md:space-x-4  lg:space-x-32  items-center  px-5 lg:px-20">
          <div className="shadow-[0_30px_40px_-20px_rgba(5,5,0,0.5)] bg-white p-3 rounded-md w-full  max-w-[525px] h-full max-h-[250] mt-8 md:mt-0 lg:mt-0">
            <Image src={SEO} className="rounded-md" alt="" />
          </div>
          <div className="mt-5">
            <h1 className="text-3xl lg:text-[62px] text-primary font-semibold">SEO</h1>
            <p className="text-[17px] mt-10">
              Try our tailored SEO packages to <br /> rank better in the SERP.
            </p>
            <Button title="Discover More" />
          </div>
        </div>

        <div className="flex mt-2 lg:mt-20 flex-col-reverse md:flex-row lg:flex-row text-center lg:text-start lg:justify-between  space-x-0 md:space-x-4  lg:space-x-8  items-center  px-5 lg:px-20">
          <div className="mt-5">
            <h1 className="text-3xl lg:text-[62px] text-primary font-semibold">Web Design</h1>
            <p className="text-[17px] mt-10">
              Be competent in visually and grab the <br /> attention. We design your dream on the web.
            </p>
            <Button title="Discover More" />
          </div>
          <div className="shadow-[0_30px_40px_-20px_rgba(5,5,0,0.5)] bg-white p-3 rounded-md w-full  max-w-[525px] h-full max-h-[250] mt-8 md:mt-0 lg:mt-0">
            <Image src={webDesign} className="rounded-md" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutService;
