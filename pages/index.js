import Banner from "../components/Banner";
import BrandBanner from "../components/BrandBanner";
import ContactMe from "../components/ContactMe";
import Featured from "../components/Featured";
import GrowBusiness from "../components/GrowBusiness";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
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
        <Testimonials/>
        <ContactMe/>
      </main>
    </div>
  );
}
