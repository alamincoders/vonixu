import { WhatMakeUsData } from '../data/data';

const WhatMakeUs = () => {
  return (
    <section className='bg-gray-50' >
      <div className="container py-10">
        <h1 className="text-4xl font-bold">
          <span className="text-primary">What Make Us</span>{" "}
          <span className="text-secondary ">
            The Best Web Design Company In Bangladesh?​
          </span>
        </h1>

        <div className="w-[108px] h-1 bg-primary border-0 mt-4 rounded-2xl "></div>

        <p className="text-xl mt-4">
          Bizcope is the #1 Bangladeshi web design company based in Dhaka with
          11+ years of experience in the digital industry.… but that’s not all.
          Here is why you should work with us ↴
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 py-10">
          {WhatMakeUsData.map((meetUs) => (
            <div key={meetUs.id}>
              <div className="relative block cursor-pointer bg-white rounded-br-lg rounded-tl-lg p-8  h-full drop-shadow-md">
                <h3 className="text-2xl text-primary font-bold">
                  {meetUs.name}
                </h3>
                <p className="mt-4 text-[16px] font-medium text-gray-700">
                  {meetUs.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakeUs;