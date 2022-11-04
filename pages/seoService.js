import Head from "next/head";
import React from "react";
import AboutService from "../components/AboutService";
import AboutUs from "../components/AboutUs";
import AboutVonixu from "../components/AboutVonixu";
import BrandBanner from "../components/BrandBanner";
import ContactMe from "../components/ContactMe";
import OurValues from "../components/OurValues";
import OverPercent from "../components/OverPercent";
import SEOBenefits from "../components/SEOBenefits";
import TeamMember from "../components/TeamMember";
import Testimonials from "../components/Testimonials";
import WhatSEO from "../components/WhatSEO";

const seoService = () => {
  return (
    <>
      <Head>
        <title>Seo Service - Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-24">
        <OverPercent />
        <WhatSEO/>
        <SEOBenefits/>
      </main>
    </>
  );
};

export default seoService;
