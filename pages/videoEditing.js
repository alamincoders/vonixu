import Head from "next/head";
import React from "react";
import VideoEditing from "../components/VideoEditing/VideoEditing";

const videoEditing = () => {
  return (
    <>
      <Head>
        <title>videoEditing - Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-24">
        <VideoEditing />
      </main>
    </>
  );
};

export default videoEditing;