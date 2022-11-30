import React from "react";
import OverPercent from "../ServicesComponents/OverPercent";
import SeoFormBanner from "../ServicesComponents/SeoFormBanner";
import WhatSEO from "../ServicesComponents/WhatSEO";

import SEOBenefits from "../ServicesComponents/SEOBenefits";

import seo from "../../assets/services/whatseo.png";


import Banner from "../ServicesComponents/Banner";
import ServiceFAQ from "../ServicesComponents/ServiceFAQ";

const ContentWritingService = () => {
  return (
    <>
      <Banner
        title="Best Content Writing Service for Website Get Content That Ranks  
"
      />
      <SeoFormBanner
        title="
Our SEO Optimized Website Content Development Service Will Bring a Higher Ranking on Search Engines, Generate Organic Sales, and Increase Revenue.
"
        p1="Content is the ultimate king in this digital business era. If you have a business that also operates online along with physical location, then you must decorate your website with engaging content. Without content, your business is not going to rank well on the search engine that leads to zero organic visitors to your site.

If you want to acquire customers who are thriving to buy products or services that you are providing, then our website content writing service is the best option for you. We are the most reputed content writing agency in the SEO industry, serving businesses and agencies for more than a decade.
"
        p2="You must use SEO optimized content for optimizing your business site to bring potential organic visitors. We have researched organic visitors vs. Paid visitors that come through paid ads."
        p3="The finding is astonishing – paid ads are less useful than organic visitors in every aspect you consider. We have seen that the organic visitors are potential customers who are actually searching for products or services you are providing."
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
        p1="If you want to avoid investing in paid advertisements, then publishing unique and optimized content is the next best thing you can do. We have a dedicated in-house writing team from different industries who can write top-notch content for you that surely rank on search engines.

Additionally, we have an overseas writing team from all over the world.
"
        p2=" If you want native writers who can write understanding the prospect of your customers’ intent, then the VONIXU website content development service is the best for you.

Just call us at the number given below, and one of our executives will contact you to discuss your needs.
"
        p3=" We will ensure that your organic visitors will grow and bring revenue by increasing sales. The most important thing about organic visitors is that it does not stop coming to your website if your content is better than your competitors."
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
        title="FAQ: Best Content Writing Service"
        p="Do you have queries about our website content development services? Well, we are getting many questions regarding our service from thriving customers. Instead of answering them individually, we thought it would be better to develop a section to answer all those questions. It will help you to get in-depth knowledge about the expertise of our top-notch content writers."
        que1="What Should You Provide Whenever You Submit an Order?"
        que2="How Do I Understand That You Are Providing Me the Best Quality Content?"
        que3="What Industries Does VONIXU Cater To?"
        que4="Will the Content Be Original?"
        que5="Will the Content Be SEO Friendly?"
        que6="Can You Meet Tight Deadlines?"
        que7="Do You Charge Extra For Revisions?"
        que8="Will There Be Any Hidden Costs?"
        que9="Can I Modify, Reformat, or Distribute the Write-ups Provided by You?"
        ans1="Article Title (Optional)
Focus Keyword
LSI Words (Optional)
Target Audience
Voice (Active/ Passive)
Style/ Tone (Informative/ Conversational/ Factual/ Humorous)
If you have choice of words to include in the article
If you have any specific guideline not to include any words
Any Other Special Requirements"
        ans2="We have been providing content writing services for more than a decade now. Our writers are well educated about the topic we give them to write on. So, you can rest assured that our writers will write content that actually ranks higher on the search engine and engage readers towards purchasing your products or services."
        ans3="We cover almost every industry that is legally authorized to write and publish content about. No matter what niche you are in, we have dedicated niche relevant writers who have enough knowledge on that topic."
        ans4="Our content will be original and unique checked by all the content originality checkers like Copyscape and others. You do not need to worry about indexing the content we will give you because they are written with hours of research."
        ans5="Our writers are enriched with advanced content SEO knowledge to produce optimized content that ranks well in the search engine. After getting your content, all you need is to optimize other SEO factors other than content SEO optimization.
"
        ans6="VONIXU is committed to provide the best website content writing service to clients who need it. We have the resources and we maintain tight deadlines so that clients can meet theirs’ too. Our writers are trained to complete tasks before the deadline every time you assign tasks."
        ans7="It depends, but before that, we want to assure you our writers will perfect the content you assign us to write until you are happy with it. Once you approve the content, then if you need further revisions, we may charge you. Remember, we only charge you for the service we provide."
        ans8="We understand some agencies offer services at a price, but once you take their service, they charge you hidden costs. However, at VONIXU, there will be no hidden costs throughout our service period, be assured about it.
"
        ans9="Yes, you can do all of the editing mentioned in the questions. Once we deliver the content finally, you can edit, publish, or resell to others. Remember, we will work for you as a ghostwriter, and we will deliver the copyrights along with the content."
      />
    </>
  );
};

export default ContentWritingService;
