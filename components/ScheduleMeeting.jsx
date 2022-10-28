import React from 'react';

const ScheduleMeeting = () => {
  return (
    <>
      <section className="bg-primary py-28 text-center">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white">
            Find Out How We Can Increase Your Profit
          </h2>
          <p className="text-md lg:text-xl uppercase font-semibold my-5 text-white text-center ">
            Schedule a meeting to discuss how Bizcope can help you to double,
            triple or quadruple your sales and revenue. So, tell us what you
            want – simply fill in the form below and we’ll be in touch with you
            shortly 😎 Phone: +8801636787936
          </p>

          <div class="flex items-center justify-center p-12 bg-white ">
            <div class="mx-auto w-full ">
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="fName"
                        class="text-start mb-[2px] ml-[5px] block  font-medium text-primary"
                      >
                        * First Name
                      </label>
                      <input
                        type="name"
                        name="fName"
                        id="fName"
                        placeholder="Example: Saif Hasan"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-[7px] px-3  font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="lName"
                        class=" text-start mb-1 ml-[5px] block  font-medium text-primary"
                      >
                        * Last Name
                      </label>
                      <input
                        type="name"
                        name="lName"
                        id="lName"
                        placeholder="Example: Chowdhury"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-[7px] px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="fName"
                        class=" text-start mb-[2px] ml-[5px] block  font-medium text-primary"
                      >
                        * Email
                      </label>
                      <input
                        type="email"
                        name="fEmail"
                        id="fEmail"
                        placeholder="Example: saifhasan@gmail.com "
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-[7px] px-3  font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="lName"
                        class=" text-start mb-1 block ml-[5px] font-medium text-primary"
                      >
                        * Phone Number
                      </label>
                      <input
                        type="number"
                        name="lNumber"
                        id="lNumber"
                        placeholder="123456789 "
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-[7px] px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="date"
                        class=" text-start mb-[2px] ml-[5px] block  font-medium text-primary"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="Example: 15/08/2022 "
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="time"
                        class=" text-start mb-[2px] ml-[5px] block  font-medium text-primary"
                      >
                        Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        id="time"
                        placeholder="Example: 9:00 pm "
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div class="w-full ">
                  <div class="mb-5">
                    <label
                      for="fName"
                      class=" text-start mb-[2px] ml-[5px] block  font-medium text-primary"
                    >
                      Website Address
                    </label>
                    <input
                      type="name"
                      name="fName"
                      id="fName"
                      placeholder=" Example: www.mywebsite.com "
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-[7px] px-3  font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>

                <div class="mb-5">
                  <label
                    for="fName"
                    class=" text-start mb-[2px] ml-[5px] block  font-medium text-primary"
                  >
                    *Interested In?
                  </label>
                  <div class="gird flex items-center space-x-3">
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="radioButton1"
                        class="h-3 w-3"
                      />
                      <label
                        for="radioButton1"
                        class="pl-1 text-[14px] font-medium text-primary"
                      >
                        SEO
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="radioButton2"
                        class="h-3 w-3"
                      />
                      <label
                        for="radioButton2"
                        class="pl-1 text-[14px] font-medium text-primary"
                      >
                        Web Design
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="radioButton1"
                        class="h-3 w-3"
                      />
                      <label
                        for="radioButton1"
                        class="pl-1 text-[14px] font-medium text-primary"
                      >
                        eCommerce Website Development
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="radioButton2"
                        class="h-3 w-3"
                      />
                      <label
                        for="radioButton2"
                        class="pl-1 text-[14px] font-medium text-primary"
                      >
                        Digital Marketing
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="radioButton1"
                        class="h-3 w-3"
                      />
                      <label
                        for="radioButton1"
                        class="pl-1 text-[14px] font-medium text-primary"
                      >
                        SMM
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="radioButton2"
                        class="h-3 w-3"
                      />
                      <label
                        for="radioButton2"
                        class="pl-1 text-[14px] font-medium text-primary"
                      >
                        Content Writing
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="radioButton1"
                        class="h-3 w-3"
                      />
                      <label
                        for="radioButton1"
                        class="pl-1 text-[14px] font-medium text-primary"
                      >
                        Graphics Design
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="radioButton2"
                        class="h-3 w-3"
                      />
                      <label
                        for="radioButton2"
                        class="pl-1 text-[14px] font-medium text-primary"
                      >
                        Others
                      </label>
                    </div>
                  </div>
                </div>

                <div className="relative mb-4">
                  <label
                    for="me3sag3"
                    className="text-start mb-[2px] ml-[5px] block  font-medium text-primary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>

                <div>
                  <button class="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleMeeting;