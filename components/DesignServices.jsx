import Image from 'next/image';
import seo2 from '../assets/ceo/seo2.png'

const DesignServices = () => {
  return (
    <section className="container py-10">
      <div className=" grid grid-col-1 lg:grid-cols-2 gap-y-8">
        <div className="w-5/6 bg-gray-50 rounded-tl-[40px] p-6 mx-auto">
          <Image src={seo2} alt="" />
        </div>
        <div className="flex flex-col justify-center space-y-6 ">
          <h1 className="text-[40px] font-bold">SEO Is Fun!!!</h1>
          <p className="text-[15px] ">
            Faisal Mustafa is an experienced best SEO expert in Bangladesh with
            more than 10 years of experience in the digital marketing industry
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignServices;