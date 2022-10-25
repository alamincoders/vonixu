import Image from 'next/image';
import React from 'react';
import Button from './shared/Button';
import webConversation from '../assets/services/webconversation.svg'

const WebConversation = () => {
  return (
    <section className="container py-10">
      <div className=" grid grid-col-1 lg:grid-cols-2 gap-y-8">
        <div className="flex flex-col justify-center space-y-6 ">
          <h1 className="text-[40px] font-bold">
            <span className="text-primary">Web Development for</span>{" "}
            <span className="text-secondary ">Conversions</span>
          </h1>
          <p className="text-[15px]">
            What’s the main purpose of your website? Turning the visitors into
            customers, right? In web design and development,{" "}
            <strong>we call it conversion.</strong>
          </p>
          <p className="text-[15px]">
            You see, very few web design and development companies in Bangladesh
            understand this. A badly designed website will cause you to waste
            your time and money. The better the website is, the more visitors
            are converted into customers. So build your website with an
            award-winning web design and development company that can deliver
            the result!
          </p>
          <Button title="Build a Website" />
        </div>
        <div className="w-5/6 bg-gray-50 rounded-tl-[40px] p-6 mx-auto">
          <Image src={webConversation} alt="" />
        </div>
      </div>
    </section>
  );
};

export default WebConversation;