import Image from "next/image";
// import seo from "../../assets/services/whatseo.png";

const WhatSEO = ({ img, tittle, p1, p2, p3 }) => {
  return (
    <>
      <section className="container py-10">
        <div className=" grid grid-col-1 lg:grid-cols-2 ">
          <div className=" mx-auto">
            <Image src={img} alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-4 ">
            <h1 className="text-4xl text-primary font-bold">{tittle}</h1>
            <p className="text-[15px]">{p1}</p>
            <p className="text-[15px]">{p2}</p>
            <p className="text-[15px]">{p3}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatSEO;
