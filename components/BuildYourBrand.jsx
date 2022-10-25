import Image from 'next/image';
import telephone from "../assets/logo/talephone.png";

const BuildYourBrand = () => {
  return (
    <section className="bg-primary py-16 text-center">
 
        <div className=" grid md:grid-cols-3 justify-center  space-y-5 md:space-y-0 items-center  ">
          <div>
            <Image src={telephone} alt="" />
          </div>
          <div>
            <h6 className='text-white ' >
              {" "}
              <i>Ready to build your brand</i>{" "}
            </h6>
            <h2 className='text-white font-semibold text-[28px] ' > YOU ARE JUST ONE STEP AWAY</h2>
          </div>
          <div className='text-white' > 
            <h6 className=' font-mono text-[15px] ' >Call Us Nowarrow</h6>
            <h3 className='text-[20px] font-semibold ' >+880123-456789</h3>
            <h5 className='mb-5' >or</h5>
            <button className='bg-white text-primary font-semibold px-3 py-2 rounded-lg hover:bg-[#5835b96e] transition duration-400  hover:text-white ' >Get Started</button>
          </div>
        </div>
   
    </section>
  );
};

export default BuildYourBrand;