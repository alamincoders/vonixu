import Head from "next/head";
import React from "react";
import ECommerceWebsite from "../components/WebDesign&Development/ECommerceWebsite";

const eCommerceWebsite = () => {
  return (
    <>
      <Head>
        <title>eCommerceWebsite - Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-24">
        <ECommerceWebsite />
      </main>
    </>
  );
};

export default eCommerceWebsite;
