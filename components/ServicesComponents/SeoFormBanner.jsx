import Image from "next/image";
import React from "react";
import bImg from "../../assets/services/local.webp";
import Banner from "../ServicesComponents/Banner";
import ServiceFAQ from "../ServicesComponents/ServiceFAQ";
import Button from "../shared/Button";

const SeoFormBanner = ({ title, p, img }) => {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-semibold text-4xl text-primary mb-5">
            {/* Affordable Local SEO */}
            {title}
          </h2>
          <p className="text-primary mb-5">
            {/* Manta has ranked millions of local businesses in the top 10 of Google for over 20 years with our affordable local SEO services. We help
            businesses get found by a large local audience to increase both leads and sales. Learn how our local SEO services can help you find new
            customers today! */}
            {p}
          </p>
          <div>
            <form className="grid grid-cols-1 lg:grid-cols-2  px-5" action="#">
              <input
                placeholder="Fast Name*"
                className=" py-2 bg-gray-50 p-3 cursor-pointer focus:outline-blue-400 border border-gray-200 m-2"
                required
                type="text"
              />
              <input
                placeholder="Last Name*"
                className=" py-2 bg-gray-50 p-3 cursor-pointer focus:outline-blue-400 border border-gray-200 m-2"
                required
                type="text"
              />
              <input
                placeholder="Phone Number*"
                className=" py-2 bg-gray-50 p-3 cursor-pointer focus:outline-blue-400 border border-gray-200 m-2"
                required
                type="number"
              />
              <input
                placeholder="Email*"
                className=" py-2 bg-gray-50 p-3 cursor-pointer focus:outline-blue-400 border border-gray-200 m-2"
                required
                type="email"
              />
              <input
                placeholder="Company Name*"
                className=" py-2 bg-gray-50 p-3 cursor-pointer focus:outline-blue-400 border border-gray-200 m-2"
                required
                type="text"
              />
              <input
                placeholder="🔗 Website URL*"
                className=" py-2 bg-gray-50 p-3 cursor-pointer focus:outline-blue-400 border border-gray-200 m-2"
                required
                type="text"
              />
              <select
                className="text-gray-400 py-2 bg-gray-50 p-3 cursor-pointer focus:outline-blue-400 border border-gray-200 m-2"
                required
                name="Monthly Marketing Budget*"
                id=""
              >
                <option value="Monthly Marketing Budget*">
                  Monthly Marketing Budget*
                </option>
                <option value="$0 - $500">$0 - $500</option>
                <option value="$500 - $1000">$500 - $1000</option>
                <option value="$1000 - $2500">$1000 - $2500</option>
                <option value="$2500 - $5000">$2500 - $5000</option>
                <option value="$5000 - $10000">$5000 - $10000</option>
              </select>{" "}
              <select
                className="text-gray-400 py-2 bg-gray-50 p-3 cursor-pointer focus:outline-blue-400 border border-gray-200 m-2"
                required
                name="Monthly Marketing Budget*"
                id=""
              >
                <option value="Problem you need to solve?*">
                  Problem you need to solve?*
                </option>
                <option value="$0 - $500">$0 - $500</option>
                <option value="Improve Website Traffic">
                  Improve Website Traffic
                </option>
                <option value="More sales through your website">
                  More sales through your website
                </option>
                <option value="Stronger presence on google">
                  Stronger presence on google
                </option>
                <option value="Others">Others</option>
              </select>
              <Button title="Start Today" />
            </form>
          </div>
        </div>
        <div className=" mt-5 lg:mt-0 flex flex-col justify-center">
          <Image className="rounded" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SeoFormBanner;
