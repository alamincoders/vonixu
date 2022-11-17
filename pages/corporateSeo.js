import Head from "next/head";
import React from "react";
import CorporateSEO from "../components/SEO/CorporateSEO";

const corporateSeo = () => {
  return (
    <>
      <Head>
        <title>Corporate SEO - Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-24">
        <CorporateSEO />
      </main>
    </>
  );
};

export default corporateSeo;