import Image from 'next/image';
import capture from '../assets/services/Capture.png'
import attractPeople from '../assets/services/AttractPeople.png'
import increase from '../assets/services/Increase.png'

const SEOBenefits = () => {
  return (
    <>
      <section className="py-16 text-center container ">
        <div className=" grid md:grid-cols-3 justify-center space-x-10  space-y-5 md:space-y-0 items-center  ">
          <div className="text-center ">
            <Image src={capture} alt="" />
            <h1 className="text-xl mb-3 mt-5 text-primary   font-semibold">
              Capture Low Hanging Fruit
            </h1>
            <p className="text-[15px] ">
              Local SEO keywords typically have lower competition compared to
              keywords with a national scope. Local SEO can capture quick wins
              driving customers to your local business.
            </p>
          </div>
          <div className=" text-center">
            <Image src={attractPeople} alt="" />
            <h1 className="text-xl mb-3 mt-5 text-primary   font-semibold">
              Attract Targeted Customers
            </h1>
            <p className="text-[15px] ">
              To capture targeted customers, you need high-intent keywords.
              Local search can help bring in relevant leads and sales both
              in-store and online.
            </p>
          </div>
          <div className=" text-center">
            <Image src={increase} alt="" />
            <h1 className="text-xl mb-3 mt-5 text-primary   font-semibold">
              Increase Brand Recognition
            </h1>
            <p className="text-[15px] ">
              Local search optimization focuses on increasing brand awareness
              and reputation through directory and citation building, positive
              online review, and much more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOBenefits;