/* eslint-disable @next/next/no-img-element */

const Testimonials = () => {
  return (
    <section className="container mt-10 py-10">
      <h1 className="text-4xl font-bold">
        <span className="text-primary">Testimonials From Our</span> <span className="text-secondary ">Clients</span>
      </h1>

      <div className="w-[240px] h-1 bg-primary border-0 rounded-2xl "></div>

      <section className="text-gray-600 body-font">
        <div className="pt-14 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="cursor-pointer hover:shadow-md hover:shadow-red-100 duration-300 py-5 px-8 bg-gray-50 rounded-md">
              <div className="h-full text-center ">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/305x305"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui...
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 my-4"></span>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-5">
                    <img
                      alt="testimonial"
                      className="w-10 h-10 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://dummyimage.com/300x300"
                    />
                    <div className="text-left">
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                      <p className="text-gray-500">Senior Product Designer</p>
                    </div>
                  </div>
                  <div>⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow-md hover:shadow-red-100 duration-300 py-5 px-8 bg-gray-50 rounded-md">
              <div className="h-full text-center ">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/305x305"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui...
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 my-4"></span>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-5">
                    <img
                      alt="testimonial"
                      className="w-10 h-10 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://dummyimage.com/300x300"
                    />
                    <div className="text-left">
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                      <p className="text-gray-500">UI Develeoper</p>
                    </div>
                  </div>
                  <div>⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow-md hover:shadow-red-100 duration-300 py-5 px-8 bg-gray-50 rounded-md">
              <div className="h-full text-center ">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/305x305"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui...
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 my-4"></span>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-5">
                    <img
                      alt="testimonial"
                      className="w-10 h-10 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://dummyimage.com/300x300"
                    />
                    <div className="text-left">
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                      <p className="text-gray-500">CTO</p>
                    </div>
                  </div>
                  <div>⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
