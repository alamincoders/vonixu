import Banner from "../components/Banner";
import BrandBanner from "../components/BrandBanner";
import Featured from "../components/Featured";
import GrowBusiness from "../components/GrowBusiness";
import OurServices from "../components/OurServices";
import WhyVonixu from "../components/WhyVonixu";

export default function Home() {
  return (
    <div>
      <main className="relative pt-20">
        {/* all components */}
        <Banner />
        <Featured />
        <WhyVonixu />
        <GrowBusiness />
        <BrandBanner />
        <OurServices/>
      </main>
    </div>
  );
}
