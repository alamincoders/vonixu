import Head from "next/head";
import LocalSeo from "../components/SEO/LocalSeo";

const localSeo = () => {
  return (
    <>
      <Head>
        <title>Local Seo - Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-24">
        <LocalSeo />
      </main>
    </>
  );
};

export default localSeo;
