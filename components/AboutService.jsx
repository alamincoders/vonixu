import Image from 'next/image';
import digitalMarketign from "../assets/services/digitalmarketing.jpg";
import SEO from "../assets/services/seio.png";
import webDesign from "../assets/services/webdesing.jpg";

const AboutService = () => {
  return (
    <>
      <div className=" container py-10 bg-[#F8F8F8] ">
        <div className=" md:flex-none lg:flex text-center lg:text-start lg:justify-between items-center px-20 ">
          <div>
            <h1 className="text-2xl text-primary font-semibold">
              Digital Marketing
            </h1>
            <p className="text-[17px] mt-4 ">
              We provide a complete digital marketing <br /> solution for all
              sorts of business.
            </p>
          </div>
          <div className=" shadow-[0_30px_40px_-20px_rgba(5,5,0,0.5)] border-[#fff] border-[17px]  w-[525px] h-[250]  ">
            <Image src={digitalMarketign} alt="" />
          </div>
        </div>

        <div className=" md:flex-none lg:flex text-center lg:text-start lg:justify-between items-center px-32 md:mt-14 lg:-mt-20 ">
          <div className=" shadow-[0_30px_40px_-20px_rgba(5,5,0,0.5)] border-[#fff] border-[17px]  w-[525px] h-[250]  ">
            <Image src={SEO} alt="" />
          </div>
          <div>
            <h1 className="text-2xl text-primary font-semibold">SEO</h1>
            <p className="text-[17px] mt-4 ">
              Try our tailored SEO packages to <br /> rank better in the SERP.
            </p>
          </div>
        </div>
        <div className=" md:flex-none lg:flex text-center lg:text-start lg:justify-between items-center px-36 mt-14 lg:-mt-14 ">
          <div>
            <h1 className="text-2xl text-primary font-semibold">Web Design</h1>
            <p className="text-[17px] mt-4 ">
              Be competent in visually and grab the <br /> attention. We design
              your dream on the web.
            </p>
          </div>
          <div className=" shadow-[0_30px_40px_-20px_rgba(5,5,0,0.5)] border-[#fff] border-[20px]  w-[525px] h-[250]  ">
            <Image src={webDesign} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutService;