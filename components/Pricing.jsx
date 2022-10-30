import React from "react";

const Pricing = () => {
  return (
    <section className="container py-10 ">
      <h1 className="text-4xl font-bold">
        <span className="text-primary">Web Services</span> <span className="text-secondary ">Pricing​</span>
      </h1>
      <div className="w-[108px] h-1 bg-primary border-0 rounded-2xl "></div>

      <div className=" pt-10 ">
        <div className="">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 sm:gap-8">
            <div className="border-0 rounded-none shadow-none card sm:rounded-lg md:border">
              <div className="flex flex-col justify-between p-6 border-b border-gray-200">
                <p className="mb-1 text-lg font-semibold text-yellow-600">Take Flight</p>
                <p className="pb-0 my-2 font-mono text-4xl font-extrabold text-gray-900">$25</p>
                <p className="text-sm text-gray-500">Organization / month</p>
                <a
                  href="#"
                  className="w-full bg-[rgba(170,122,32,0.84)] mt-6 py-3 text-white font-semibold rounded-md duration-200 hover:bg-[rgba(175,120,18,0.97)] text-center "
                >
                  Get started for free &rarr;
                </a>
              </div>
              <ul className="flex flex-col flex-grow p-6 space-y-3">
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700"> Unlimited feedback </span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span
                    className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer"
                    x-data="tooltip()"
                    x-spread="tooltip"
                    x-position="top"
                    title="The person who manages the feedback for the product."
                  >
                    One manager
                  </span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span
                    className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer"
                    x-data="tooltip()"
                    x-spread="tooltip"
                    x-position="top"
                    title="User is the person who submits the feedback. We are not counting the people who are upvoting features."
                  >
                    1000 submitters
                  </span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700">Unlimited Private Boards</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span
                    className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer"
                    x-data="tooltip()"
                    x-spread="tooltip"
                    x-position="top"
                    title="User is the person who submits the feedback. We are not counting the people who are upvoting features."
                  >
                    Custom domains support
                  </span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span
                    className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer"
                    x-data="tooltip()"
                    x-spread="tooltip"
                    x-position="top"
                    title="Support for German, French, Polish and more."
                  >
                    Multi-language Support
                  </span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span
                    className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer"
                    x-data="tooltip()"
                    x-spread="tooltip"
                    x-position="top"
                    title="Manage your customer feedback at the comfort of your phone. On iOS and Android."
                  >
                    Free iOS and Android apps
                  </span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700">3 Integrations</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700">New features every 14 days</span>
                </li>
              </ul>
            </div>
            <div className="border-0 rounded-none shadow-none card sm:rounded-lg md:border">
              <div className="flex flex-col justify-between p-6 border-b border-gray-200">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="mb-1 text-lg font-semibold text-purple-700">Fly High</p>
                    <span className="badge bg-primary-light text-primary">Most popular</span>
                  </div>
                  <p className="my-2 font-mono text-4xl font-extrabold text-gray-900">$50</p>
                  <p className="text-sm text-gray-500">Organization / month</p>
                </div>
                <a
                  href="#"
                  className="w-full text-center bg-[rgb(87,85,179)] mt-6 py-3 text-white font-semibold rounded-md duration-200 hover:bg-[rgba(3,38,114,0.84)] "
                >
                  Get started for free &rarr;
                </a>
              </div>
              <ul className="flex flex-col flex-grow p-6 space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-none w-4 h-4 mt-1 mr-2 text-purple-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-purple-700">Everything in Take Flight</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-purple-700">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Unlimited feedback
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-purple-700">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span
                    className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer"
                    x-data="tooltip()"
                    x-spread="tooltip"
                    x-position="top"
                    title="The person who manages the feedback for the product."
                  >
                    10 manager
                  </span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-purple-700">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span
                    className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer"
                    x-data="tooltip()"
                    x-spread="tooltip"
                    x-position="top"
                    title="User is the person who submits the feedback. We are not counting the people who are upvoting features."
                  >
                    7500 submitters
                  </span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-purple-700">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Unlimited Integrations</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-purple-700">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Humane support
                </li>
              </ul>
            </div>
            <div className="border-0 rounded-none shadow-none card sm:rounded-lg md:border">
              <div className="flex flex-col justify-between p-6 border-b border-gray-200">
                <div>
                  <p className="mb-1 text-lg font-semibold text-pink-600">Enterprise</p>
                  <p className="my-2 text-4xl font-bold text-gray-900">Custom</p>
                  <p className="text-sm text-gray-500">Organization / month</p>
                </div>
                <a
                  href="#"
                  className="w-full text-center bg-[rgb(148,44,113)] mt-6 py-3 text-white font-semibold rounded-md duration-200 hover:bg-[rgb(104,6,71)] "
                >
                  Initiate a chat &rarr;
                </a>
              </div>
              <ul className="flex flex-col flex-grow p-6 space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-none w-4 h-4 mt-1 mr-2 text-pink-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-pink-600">Everything in Fly High</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-pink-700">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Unlimited feedback
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-pink-700">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span
                    className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer"
                    x-data="tooltip()"
                    x-spread="tooltip"
                    x-position="top"
                    title="The person who manages the feedback for the product."
                  >
                    Unlimited manager
                  </span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-pink-700">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span
                    className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer"
                    x-data="tooltip()"
                    x-spread="tooltip"
                    x-position="top"
                    title="User is the person who submits the feedback. We are not counting the people who are upvoting features."
                  >
                    Unlimited submitters
                  </span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-pink-700">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span className="text-gray-700">Unlimited Integrations</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-pink-700">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span
                    className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer"
                    x-data="tooltip()"
                    x-spread="tooltip"
                    x-position="top"
                    title="Access to developers to build custom features and changes for your enterprise."
                  >
                    Feature on-request
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
