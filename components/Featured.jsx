import Image from "next/image";
import { FeaturedData } from "../data/data";
import softexpo from '../assets/featured/softexpo.png'
import channelEye from '../assets/featured/channelEye.png'
import kalerkonto from '../assets/featured/kalerkonto.png'
import machranga from '../assets/featured/machranga.png'
import protom_alo from '../assets/featured/protom alo.png'
import independent from '../assets/featured/independent.png'
import cityFM  from '../assets/featured/cityFM.png'


const Featured = () => {
  return (
    <section className=" bg-gray-50 my-10  ">
      <div className="   py-10 container  ">
        <h1 className="text-[30px] ">
          <span className="text-primary">Featured</span>{" "}
          <span className="text-secondary font-bold ">In</span>
        </h1>

        <div className="  flex items-center gap-x-14 mt-6">
          <div>
            <Image src={softexpo} alt="" />
          </div>
          <div>
            <Image src={channelEye} alt="" />
          </div>
          <div className="hidden  md:hidden lg:block ">
            <Image src={kalerkonto} alt="" />
          </div>
          <div className="hidden  md:hidden lg:block ">
            <Image src={machranga} alt="" />
          </div>
          <div className="hidden  md:hidden lg:block ">
            <Image src={protom_alo} alt="" />
          </div>
          <div>
            <Image src={independent} alt="" />
          </div>
          <div>
            <Image src={cityFM} alt="" />
          </div>
        </div>

        {/* <div>
          {FeaturedData.map((featured, index) => {
            return (
              <div key={index}>
                <Image src={featured} alt="featured" />
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default Featured;
