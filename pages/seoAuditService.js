import Head from "next/head";
import React from "react";
import SeoAuditService from "../components/SEO/SeoAuditService";

const seoAuditService = () => {
  return (
    <>
      <Head>
        <title>SEO Audit Service - Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-24">
        <SeoAuditService />
      </main>
    </>
  );
};

export default seoAuditService;
