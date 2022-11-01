import Image from 'next/image';
import webDesignProcess from '../assets/portfolio/Web-Design-Process.png'
import Button from './shared/Button';

const PortfolioBanner = () => {
  return (
    <>
      <section className='bg-primary' >
        <div className="ml-10 mr-24 ">
          <div className=" grid grid-col-1 lg:grid-cols-2 space-x-10">
            <div className=" p-2 -mt-16 bg-white mx-auto">
              <Image src={webDesignProcess} alt="" />
            </div>
            <div className="flex flex-col justify-center space-y-6 ">
              <h1 className="text-[40px] text-secondary font-bold">Portfolio</h1>
              <p className="text-[18px] my-5 text-white ">
                Bizcope is an award winning web design and development company.
                Our web design work is recognized as the top website designs of
                all time. Our web design portfolio shows our recent website
                sesign samples to our prospective customers.
              </p>
              <Button title="More Information" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioBanner;