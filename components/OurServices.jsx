import { OurServicesData } from "../data/data";
import Button from "./shared/Button";

const OurServices = () => {
  return (
    <div className="bg-gray-50 pt-10">
      <section className="container py-10">
        <h1 className="text-4xl font-bold uppercase">
          <span className="text-primary">Our</span> <span className="text-secondary ">Services</span>
        </h1>
        <div className="w-16 h-1 bg-primary border-0 rounded-2xl "></div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 py-10">
          {OurServicesData.map((services) => (
            <div key={services.id}>
              <div className="relative block border-t-4 cursor-pointer hover:bg-gray-100 hover:rounded-lg duration-300 transition ease-in-out border-violet-600 rounded-tl-lg p-8 shadow-md ">
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="testimonial"
                  className="w-20 h-20 mx-auto block mb-8 object-cover object-center rounded-full  border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/300x300"
                />
                <h3 className="text-[20px] text-primary font-bold">{services.name}</h3>
                <p className="mt-4 text-sm font-medium text-gray-500">{services.description}</p>

                <Button title="Get Started" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
