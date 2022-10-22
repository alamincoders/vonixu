import Image from 'next/image';
import graph from '../assets/graph/graph.png'

const GrowBusiness = () => {
  return (
    <section className="container py-10">
      <div className=" flex justify-between items-center ">
        <div>
          <h1 className="text-[40px] font-bold">
            <span className="text-primary">Grow Your Business With</span>{" "}
            <span className="text-secondary ">
              The Best Online Marketing Company
            </span>
          </h1>
          <p className="text-[18px]">
            Through our proven Digital Marketing services we can help you get
            more traffic, help you convert those traffic into customers, and
            customers into advocates of your brand. Today Bizcope is a leading
            SEO service provider company in Bangladesh because of the results we
            provide our clients day-in and day-out.
          </p>
        </div>
        <div>
          <Image src={graph} alt="graph" />
        </div>
      </div>
    </section>
  );
};

export default GrowBusiness;