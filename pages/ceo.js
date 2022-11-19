import Head from "next/head";
import React from "react";
import Banner from "../components/CEO/banner";
import Entrepreneur from "../components/CEO/Entrepreneur";
import Established from "../components/CEO/Established";
import Experience from "../components/CEO/Experience";
import FoundedSeoViser from "../components/CEO/FoundedSeoViser";
import FreelancingCareer from "../components/CEO/FreelancingCareer";
import SeoExpert from "../components/CEO/SeoExpert";
import SeoFun from "../components/CEO/SeoFun";
import StartedVonixu from "../components/CEO/StartedVonixu";
import FreeSession from "../components/FreeSession";


const ceo = () => {
  return (
    <>
      <Head>
        <title>CEO - Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-24">
        <Banner/>
        <SeoFun/>
        <Experience/>
        <Entrepreneur/>
        <SeoExpert/> 
        <FreelancingCareer/>
        <Established/>
        <StartedVonixu/>
        <FoundedSeoViser/>
        <FreeSession/>
      </main>
    </>
  );
};

export default ceo;
