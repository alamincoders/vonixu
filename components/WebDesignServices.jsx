import Image from 'next/image';
import webDesign from "../assets/services/webdesignservices.svg";

const WebDesignServices = () => {
  return (
    <section className="container py-10">
      <div className=" grid grid-col-1 lg:grid-cols-2 gap-y-8">
        <div className="w-5/6 bg-gray-50 rounded-tl-[40px] p-6 mx-auto">
          <Image src={webDesign} alt="" />
        </div>
        <div className="flex flex-col justify-center space-y-6 ">
          <h1 className="text-[40px] font-bold">
            <span className="text-primary">Web Design And Development </span>{" "}
            <span className="text-secondary ">Services</span>
          </h1>
          <p className="text-[15px] mb-3 ">
            As a leading website design company in Bangladesh, we ensure
            top-notch web development services for your business needs. With
            decades of experience in the field of website design and
            development, we can help you build a website that appeals your
            audience and converts them into leads.
          </p>
          <p className="text-[15px]">
            As a web development company, we are catering to everybody: from
            personal website to corporate or e-commerce website. Make sure you
            are working with the best web design company in Bangladesh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDesignServices;