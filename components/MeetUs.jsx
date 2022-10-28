import React from 'react';
import { MeetUsData } from '../data/data';

const MeetUs = () => {
  return (
    <>
      <div className="container py-10">
        <h1 className="text-4xl font-bold">
          <span className="text-primary">This Happens When You</span>{" "}
          <span className="text-secondary ">Meet Us​</span>
        </h1>

        <div className="w-[108px] h-1 bg-primary border-0 rounded-2xl "></div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 py-10">
          {MeetUsData.map((meetUs) => (
            <div key={meetUs.id}>
              <div className="relative block cursor-pointer hover:bg-gray-200 hover:rounded-lg duration-300 transition ease-in-out border-violet-600 rounded-tl-lg p-8 shadow-md ">
                <h3 className="text-2xl text-primary font-bold">
                  {meetUs.name}
                </h3>
                <p className="mt-4 text-[16px] font-medium text-gray-700">
                  {meetUs.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetUs;