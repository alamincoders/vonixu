import Head from "next/head";
import React from "react";
import Blog from "../components/Blog";

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog - Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-24">
         
         <Blog/>

      </main>
    </>
  );
};

export default blog;
