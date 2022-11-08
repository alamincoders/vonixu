import Head from "next/head";
import React from "react";
import SEOforSmallBusiness from "../components/SEO/SEOforSmallBusiness";

const seoForSmallBusiness = () => {
  return (
    <>
      <Head>
        <title>Seofor Small Business - Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-24">
        <SEOforSmallBusiness />
      </main>
    </>
  );
};

export default seoForSmallBusiness;
