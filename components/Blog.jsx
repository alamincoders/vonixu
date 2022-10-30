import Image from 'next/image';
import React from 'react';
import { BLogsData } from '../data/data';

const Blog = () => {
  return (
    <>
      <section className="container py-10">
        <h1 className="text-4xl font-bold text-center ">
          <span className="text-primary">Inbound</span>{" "}
          <span className="text-secondary ">Marketing Blog</span>
        </h1>
        <p className="text-center text-xl py-5 ">
          Looking for inbound marketing tips and current news happening in the
          industry? The Bizcope inbound marketing and SEO blog aim to do just
          that, provide business owners and marketers insights into what works
          and what doesn’t.{" "}
        </p>

        <div className="grid  xl:grid-cols-3 pt-4 gap-8 ">
          {BLogsData.map((blog) => (
            <div key={blog.id}>
              <div className="relative block  text-center cursor-pointer bg-white rounded-br-lg rounded-tl-lg drop-shadow-md">
                <Image src={blog.image} alt="include" />
                <h3 className="text-xl text-primary py-5 px-3 text-start font-bold">
                  {blog.title}
                </h3>
                <div className="w-[352px] h-[0.5px] bg-[#f7f7f7] "></div>
                <div className="flex p-[24px] leading-0 items-center space-x-4">
                  
                    <Image
                      width={20}
                      height={20}
                      className=" rounded-full "
                      src={blog.profile}
                      alt="profile"
                    />
                  

                  
                    <p className=" text-xs font-medium text-gray-700">
                      {blog.name}
                    </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;