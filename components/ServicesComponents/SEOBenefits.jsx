import Image from "next/image";
import capture from "../../assets/services/Capture.png";
import attractPeople from "../../assets/services/AttractPeople.png";
import increase from "../../assets/services/Increase.png";

const SEOBenefits = ({ title1, title2, title3, title4, p1, p2, p3 }) => {
  return (
    <>
      <section className="py-16 text-center container ">
        <h1 className="text-2xl font-semibold lg:text-4xl text-primary text-center pb-16">
          {title1}
        </h1>
        <div className=" grid md:grid-cols-3 justify-center space-x-10  space-y-5 md:space-y-0 items-center  ">
          <div className="text-center ">
            <Image
              className="bg-[#c4c4c434]  rounded-full "
              src={capture}
              alt=""
            />

            <h1 className="text-xl mb-3 mt-5 text-primary   font-semibold">
              {title2}
            </h1>
            <p className="text-[15px] ">{p1}</p>
          </div>
          <div className=" text-center">
            <Image
              className="bg-[#c4c4c434]  rounded-full "
              src={attractPeople}
              alt=""
            />

            <h1 className="text-xl mb-3 mt-5 text-primary   font-semibold">
              {title3}
            </h1>
            <p className="text-[15px] ">{p2}</p>
          </div>
          <div className=" text-center">
            <Image
              className="bg-[#c4c4c434]  rounded-full "
              src={increase}
              alt=""
            />

            <h1 className="text-xl mb-3 mt-5 text-primary   font-semibold">
              {title4}
            </h1>
            <p className="text-[15px] ">{p3}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOBenefits;
