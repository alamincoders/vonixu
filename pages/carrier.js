import Head from "next/head";
import React from "react";
import WebConversation from "../components/WebConversation";
import WebDesignServices from "../components/webDesignServices";

const Carrier = () => {
  return (
    <>
      <Head>
        <title>Carrier - Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-24"> 
        <WebConversation/>  
        <WebDesignServices/>
       </main>
    </>
  );
};

export default Carrier;
