import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import Nprogress from "nprogress";
import Layout from "../components/Layout";
import "../styles/globals.css";
import whatsApp from '../assets/whatsApp.png'

function MyApp({ Component, pageProps }) {
  Nprogress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    Nprogress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    Nprogress.done();
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <main>
        <div className=" whatsApp ">
          <a href="https://wa.me/01619816171" target="_blank" rel="noreferrer">
            <Image width={60} height={60} src={whatsApp} alt="whatsApp" />
          </a>
        </div>
      </main>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
  
}

export default MyApp;
