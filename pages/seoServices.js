import Head from "next/head";
import React from "react";
import SeoService from "../components/SEO/SeoService";

const seoServices = () => {
  return (
    <>
      <Head>
        <title>seoServices - Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-24">
        <SeoService />
      </main>
    </>
  );
};

export default seoServices;
