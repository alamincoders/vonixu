import React from "react";
import OverPercent from "../ServicesComponents/OverPercent";
import SeoFormBanner from "../ServicesComponents/SeoFormBanner";
import WhatSEO from "../ServicesComponents/WhatSEO";
import Testimonials from "../ServicesComponents/Testimonials";
import SEOBenefits from "../ServicesComponents/SEOBenefits";
import SEOApproach from "../ServicesComponents/SEOApproach";
import seo from "../../assets/services/whatseo.png";
import TestimonialsImg from "../../assets/services/testimonial-ironoak.webp";
import bImg from "../../assets/services/local.webp";

const ProductReviewWritingService = () => {
  return (
    <>
      <SeoFormBanner
        title="Affordable Local SEO"
        p="Manta has ranked millions of local businesses in the top 10 of Google for over 20 years with our affordable local SEO services. We help businesses get found by a large local audience to increase both leads and sales. Learn how our local  SEO services can help you find new customers today!"
        img={bImg}
      />
      <OverPercent
        title1="Over 50%"
        p1="of local SEO searches turn into an actual in-store visit within 24 hours"
        title2="82%"
        p2="of people use their phones to conduct near me searches"
        title3="97%"
        p3="of individuals searched online to find a local business"
      />
      <WhatSEO
        img={seo}
        title="What is Affordable Local SEO?"
        p1="Local SEO, also referred to as local search, is a marketing strategy aimed to get your website seen in the top 10 organic positions on Google  when customers near you search for your products online."
        p2=" Like traditional SEO, it focuses on increasing search engine rankings, but focuses on local keywords. There are two places to do this—Local Map Pack and Google SERPs (search engine results page)."
        p3=" Local SEO is essential for achieving strong brand awareness in local communities. It can help businesses find potential customers and increase their book of business."
      />

      <SEOBenefits
        title1="Affordable Local SEO Services Benefits "
        title2="Capture Low Hanging Fruit"
        title3="Attract Targeted Customers"
        title4=" Increase Brand Recognition"
        p1="Local SEO keywords typically have lower competition compared to keywords with a national scope. Local SEO can capture quick wins driving  customers to your local business."
        p2="To capture targeted customers, you need high-intent keywords. Local search can help bring in relevant leads and sales both in-store and online. "
        p3=" Local search optimization focuses on increasing brand awareness and reputation through directory and citation building, positive online  review, and much more."
      />

      <SEOApproach
        title1="Our Affordable Local SEO Services Approach"
        title2=" Manta’s affordable local SEO services include:"
        title3="Local business citation and directory development (including Google Business Profile) "
        title4="Location and “near me” keyword strategy "
        title5="Content creation and repurposing"
        title6="Onsite and technical optimizations"
        title7="Authority link building"
        title8="Monitoring data and progress using Google Analytics and Google Search Console"
        p1="Manta has been supporting local businesses for over 20 years by increasing their website and foot traffic and generating growth. Whether you own an individual business, multiple locations in the region, or are a national franchise, we can help! "
        p2="A successful campaign should optimize for three main local search ranking factors: Relevance, Distance, and Proximity. Consistency and implementing these strategies listed above are crucial if you want to rank well and increase your local reach."
        p3=" Manta’s online marketing solutions can help you achieve this! We believe in leveling the playing field for small businesses. Get connected today with one of our local SEO experts for more details and answers to your questions."
      />

      <Testimonials
        title=" Manta Testimonial"
        img={TestimonialsImg}
        p=" “Manta is Amazing. I own a small business and previously had hired an SEO team that I worked with for six months. It was not the best experience. I have been working with Manta for almost 2 months and they have done more in that time than the previous team did at all. I’d honestly give more stars if I could. As a small business owner, I don’t have the luxurry of excess capital to waste on poorly performing teams. I feel wonderful about working with Manta and as my business grows, I plan for them to grow with me.”"
        name="Brent W., Iron Oak Fitness LLC"
      />
    </>
  );
};

export default ProductReviewWritingService;
