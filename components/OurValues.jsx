import React from 'react';

const OurValues = () => {
  return (
    <section className="container py-10 ">
      <h1 className="text-4xl font-bold">
        <span className="text-primary">Our</span>{" "}
        <span className="text-secondary ">Values</span>
      </h1>{" "}
      <div className="w-[108px] h-1 bg-primary border-0 rounded-2xl "></div>
      <p className="text-[20px] mt-10 font-sans  ">
        Our behaviors are driven by a philosophy and set of core values. Every
        decision we make, every strategy we use, every partnership we entertain
        is based on these core values.
      </p>
      <div className="space-y-10 mt-10 grid md:grid-cols-2 ">
        <details className="group border-l-[12px] border-cyan-500 bg-gray-50 p-6 rounded-b-lg rounded-t-lg ">
          <summary className="flex cursor-pointer items-center justify-between ">
            <h2 className="text-lg font-medium text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
        <details className="group border-l-[12px] border-cyan-500 bg-gray-50 p-6 rounded-b-lg rounded-t-lg ">
          <summary className="flex cursor-pointer items-center justify-between ">
            <h2 className="text-lg font-medium text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
        <details className="group border-l-[12px] border-cyan-500 bg-gray-50 p-6 rounded-b-lg rounded-t-lg ">
          <summary className="flex cursor-pointer items-center justify-between ">
            <h2 className="text-lg font-medium text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
        <details className="group border-l-[12px] border-cyan-500 bg-gray-50 p-6 rounded-b-lg rounded-t-lg ">
          <summary className="flex cursor-pointer items-center justify-between ">
            <h2 className="text-lg font-medium text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
      </div>
    </section>
  );
};

export default OurValues;