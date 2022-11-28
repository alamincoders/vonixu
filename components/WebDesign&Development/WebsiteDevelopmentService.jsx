import React from "react";
import OverPercent from "../ServicesComponents/OverPercent";
import SeoFormBanner from "../ServicesComponents/SeoFormBanner";
import WhatSEO from "../ServicesComponents/WhatSEO";

import SEOBenefits from "../ServicesComponents/SEOBenefits";

import seo from "../../assets/services/whatseo.png";

import bImg from "../../assets/services/local.webp";
import Banner from "../ServicesComponents/Banner";
import ServiceFAQ from "../ServicesComponents/ServiceFAQ";

const WebsiteDevelopmentService = () => {
  return (
    <>
      <Banner title="VISER SEO Services: Rank on Search Engine & Drive Organic Traffic to Your Website" />
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
      />{" "}
      <ServiceFAQ
        que1=""
        que2=""
        que3=""
        que4=""
        que5=""
        que6=""
        que7=""
        que8=""
        que9=""
        que10=""
        que11=""
        que12=""
        ans1=""
        ans2=""
        ans3=""
        ans4=""
        ans5=""
        ans6=""
        ans7=""
        ans8=""
        ans9=""
        ans10=""
        ans11=""
        ans12=""
      />
    </>
  );
};

export default WebsiteDevelopmentService;
