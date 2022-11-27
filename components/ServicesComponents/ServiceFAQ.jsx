import React from "react";

const ServiceFAQ = ({
que1,
que2,
que3,
que4,
que5,
que6,
que7,
que8,
que9,
que10,
que11,
que12,
ans1,
ans2,
ans3,
ans4,
ans5,
ans6,
ans7,
ans8,
ans9,
ans10,
ans11,
ans12
}) => {
  return (
    <>
      <section class="container py-16">
        <h1 class="text-2xl font-semibold lg:text-4xl text-primary text-center ">
          Frequently asked questions
        </h1>

        <div class="grid grid-cols-1 gap-8 mt-8 lg:mt-16  md:grid-cols-2">
          <div>
            <h1 class="text-xl font-semibold ">{que1}</h1>

            <p class="mt-2 text-sm">{ans1}</p>
          </div>

          <div>
            <h1 class="text-xl font-semibold ">{que2}</h1>

            <p class="mt-2 text-sm">{ans2}</p>
          </div>

          <div>
            <h1 class="text-xl font-semibold ">{que3}</h1>

            <p class="mt-2 text-sm">{ans3}</p>
          </div>

          <div>
            <h1 class="text-xl font-semibold ">{que4}</h1>

            <p class="mt-2 text-sm">{ans4}</p>
          </div>

          <div>
            <h1 class="text-xl font-semibold ">{que5}</h1>

            <p class="mt-2 text-sm">{ans5}</p>
          </div>

          <div>
            <h1 class="text-xl font-semibold ">{que6}</h1>

            <p class="mt-2 text-sm">{ans6}</p>
          </div>
          <div>
            <h1 class="text-xl font-semibold ">{que7}</h1>

            <p class="mt-2 text-sm">{ans7}</p>
          </div>

          <div>
            <h1 class="text-xl font-semibold ">{que8}</h1>

            <p class="mt-2 text-sm">{ans8}</p>
          </div>

          <div>
            <h1 class="text-xl font-semibold ">{que9}</h1>

            <p class="mt-2 text-sm">{ans9}</p>
          </div>

          <div>
            <h1 class="text-xl font-semibold ">{que10}</h1>

            <p class="mt-2 text-sm">{ans10}</p>
          </div>

          <div>
            <h1 class="text-xl font-semibold ">{que11}</h1>

            <p class="mt-2 text-sm">{ans11}</p>
          </div>

          <div>
            <h1 class="text-xl font-semibold ">{que12}</h1>

            <p class="mt-2 text-sm">{ans12}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceFAQ;
