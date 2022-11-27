
import React from "react";
import Button from "../shared/Button";

const SeoFormBanner = ({ title, p1, p2, p3}) => {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-semibold lg:text-4xl text-primary text-center pb-10  ">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 items-center ">
        <div>
          <p className=" text-[15px] text-[#000000] text-primary ">{p1}</p>
          <p className=" text-[15px] text-[#000000] text-primary my-3">{p2}</p>
          <p className=" text-[15px] text-[#000000] text-primary ">{p3}</p>
        </div>
        <div>
          <form className="grid grid-cols-1 lg:grid-cols-2  px-5" action="#">
            <input
              placeholder="Fast Name*"
              className=" py-2 bg-gray-50 p-3 focus:outline-blue-400 border border-gray-200 m-2"
              required
              type="text"
            />
            <input
              placeholder="Last Name*"
              className=" py-2 bg-gray-50 p-3 focus:outline-blue-400 border border-gray-200 m-2"
              required
              type="text"
            />
            <input
              placeholder="Phone Number*"
              className=" py-2 bg-gray-50 p-3 focus:outline-blue-400 border border-gray-200 m-2"
              required
              type="number"
            />
            <input
              placeholder="Email*"
              className=" py-2 bg-gray-50 p-3 focus:outline-blue-400 border border-gray-200 m-2"
              required
              type="email"
            />
            <input
              placeholder="Company Name*"
              className=" py-2 bg-gray-50 p-3 focus:outline-blue-400 border border-gray-200 m-2"
              required
              type="text"
            />
            <input
              placeholder="🔗 Website URL*"
              className=" py-2 bg-gray-50 p-3 focus:outline-blue-400 border border-gray-200 m-2"
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
    </div>
  );
};

export default SeoFormBanner;
