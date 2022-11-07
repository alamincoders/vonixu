import Head from "next/head";
import React from "react";
import DigitalMarketingService from "../components/DigitalMarketing/DigitalMarketingService";


const digitalMarketingService = () => {
  return (
    <>
      <Head>
        <title>digitalMarketingService - Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-24">
        <DigitalMarketingService />
      </main>
    </>
  );
};

export default digitalMarketingService;
