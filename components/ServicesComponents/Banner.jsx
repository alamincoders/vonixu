import React from 'react';

const Banner = ({title}) => {
  return (
    <>
      <section>
        <div class="w-full bg-cover bg-center h-[400px] bg-[url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)]">
          <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50 ">
            <div class="text-center">
              <h1 class="text-white text-[22px] font-semibold  md:text-[56px]">
               {title}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;