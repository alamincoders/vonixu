import Image from "next/image";
import seo from "../../assets/services/whatseo.png";

const WhatSEO = () => {
  return (
    <>
      <section className="container py-10">
        <div className=" grid grid-col-1 lg:grid-cols-2 gap-y-8">
          <div className="w-5/6 bg-gray-50 rounded-tl-[40px] p-6 mx-auto">
            <Image src={seo} alt="" />
          </div> 
          <div className="flex flex-col justify-center space-y-4 ">
            <h1 className="text-4xl text-primary font-bold">
              What is Affordable Local SEO?
            </h1>
            <p className="text-[15px]">
              Local SEO, also referred to as local search, is a marketing
              strategy aimed to get your website seen in the top 10 organic
              positions on Google when customers near you search for your
              products online.
            </p>
            <p className="text-[15px]">
              Like traditional SEO, it focuses on increasing search engine
              rankings, but focuses on local keywords. There are two places to
              do this—Local Map Pack and Google SERPs (search engine results
              page).
            </p>
            <p className="text-[15px]">
              Local SEO is essential for achieving strong brand awareness in
              local communities. It can help businesses find potential customers
              and increase their book of business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatSEO;
