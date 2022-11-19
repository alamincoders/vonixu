import Image from 'next/image';
import React from 'react';
import outTeam from '../../assets/ourTeam/allTeam.jpg'

const MeetOurTeam = () => {
  return (
    <>
      <section className="container py-10">
        <h1 className="text-[32px] text-center font-semibold text-primary ">
          Meet Our Team
        </h1>
        <p className="text-[15px] mt-5 mb-14 text-center text-[#a1b5a7] ">
          Save thousands to millions of bucks by using single tool for different{" "}
          <br />
          amazing and outstanding and usefull great and useful admin
        </p>
        <Image className='rounded-lg w-full' src={outTeam} alt="" />
        <p className="text-[15px] mt-6 text-[#a1b5a7]">
          First, a disclaimer – the entire process of writing a blog post often
          takes more than a couple of hours, even if you can type eighty words
          per minute and your writing skills are sharp. From the seed of the
          idea to finally hitting “Publish,” you might spend several days or
          maybe even a week “writing” a blog post, but it’s important to spend
          those vital hours planning your post and even thinking about Your
          Post(yes, thinking counts as working if you’re a blogger) before you
          actually write it.
        </p>
      </section>
    </>
  );
};

export default MeetOurTeam;