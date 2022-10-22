import Head from "next/head";
import BrandBanner from "../components/BrandBanner";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vonixu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header>
        <Navbar />
      </header>

      <main className="container relative pt-20">
        {/* all components */}
        <BrandBanner />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
