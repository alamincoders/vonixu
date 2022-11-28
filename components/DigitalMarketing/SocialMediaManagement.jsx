import React from "react";
import OverPercent from "../ServicesComponents/OverPercent";
import SeoFormBanner from "../ServicesComponents/SeoFormBanner";
import WhatSEO from "../ServicesComponents/WhatSEO";

import SEOBenefits from "../ServicesComponents/SEOBenefits";

import seo from "../../assets/services/whatseo.png";

import bImg from "../../assets/services/local.webp";
import Banner from "../ServicesComponents/Banner";
import ServiceFAQ from "../ServicesComponents/ServiceFAQ";

const SocialMediaManagement = () => {
  return (
    <>
      <Banner title="Get the Best Social Media Management Services from Vonixu & Generate Revenues" />
      <SeoFormBanner
        title="Use Your Social Media Profile to Build a Strong Reputation & Drive Potential Visitors to Your Website"
        p1="Nowadays, more than 71% of people are doing product research on social media platforms. However, social media marketing is also growing for the last few years, from selling products to promoting elections; it is impacting everywhere.

If you want to bring leads and improve your branding, then social media is the best option for you to emphasize.
"
        p2="Vonixu has the most detailed experience of serving social media marketing and management services to different companies. Now, we have taken our service offers to a level where our clients are getting maximum profits from our services."
        p3="We have earned millions of revenue for our clients through our social media management services.
"
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
        p1="Well, people are using social media not only for fun but also for getting information about products they want to buy soon. On the other hand, business owners are using it as an opportunity to reach their customers.

Social media platforms are also working as a useful medium to present products or services so that customers can see them and visit the official website to make the purchase.
"
        p2=" Our social media management service will make your social profiles professional that people will rely on and love to engage with. Our social media experts will sit back on your profiles and manage it accordingly with their expertise that actually works on the growth of brand impression.

If your social media profiles are not working as you want it to be, call us to the given numbers or reach us at (Gmail) .
"
        p3="If your social media profiles are not working as you want it to be, call us to the given numbers or reach us at (Gmail) .

Our expert team will be in touch with you, and you will get an opportunity to discuss your problems. You will get the best recommendation about how you can get what you desire from your social media profiles.
"
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
        title="FAQ: Social Media Management Service"
        p="We are getting many questions about how our social media management service works with them. Instead of answering them individually, we thought it would be better to build an FAQ section to present the most frequently asked questions with answers. Check them below."
        que1="Will Social Media Marketing Work for My Business?"
        que2="Will Your Service Generate More Leads?"
        que3="Why Should I Choose Your Services?"
        que4="Will Social Media Management Services Improve Brand Reputation?"
        que5="How Long Does It Take to Start Getting Results?"
        que6="How Many Social Media Platforms Does Your Service Cover?"
        que7="Do You Manage Advertisements on Social Media Platforms?"
        que8="Will You Provide Me a Detailed Report?"
        que9="Do You Work on Long-term Projects?"
        ans1="As long as your customers use social media to share their feelings and communicate with their friends & families, social media marketing will work for your business. Our experts will work on your social profile and decorate it with valuable & engaging information that your fans will love."
        ans2="Yes, our social media management service will surely get you more leads. However, not only reach potential people but also drive them to your website who are thriving to buy the products or services you are providing. We will develop the winning strategy for your project and respond to messages in the inbox to build a better relationship with them."
        ans3="If we want to show you the reasons why you should choose us for managing your social media profiles, then we can share hundreds of clients’ reviews. Our clients are leaving the highest ratings for our services. Here are a few of them below.

We are experienced in working with big companies.
We do not outsource our services because we have several social media expert team for dedicatedly working on your projects.
Our strategy is award-winning and works astonishingly well for generating revenue through social media marketing.
You will get the most affordable social media management services from Vonixu. 
"
        ans4="Most people are using social media daily, and they are purchasing their desired products and services from different companies on those platforms. If you can build an authoritative profile that people find trustworthy, then potential customers who visit your social profile will see you reputable. They will engage with your social media content more frequently, and it will improve your brand reputation as well as recognition. Our social media management service will make sure that your social profiles are updated, and we will publish fresh content regularly. Our service will work closely on building the reputation of your business through different steps that are needed."
        ans5="Well, it depends on how much work we have to do on your social profile. However, most of our clients have seen their growth after working on their profiles for 30 days. You may see your result before 30-days, or it would take more days due to issues with your profile. However, we ensure that you will see growth and sales through our service, and it's 100% guaranteed."
        ans6="Typically, our clients have social profiles on most popular social media platforms such as Facebook, Instagram, Twitter, Linkedin, etc. However, if you want to add more social accounts, contact us for an initial discussion with our experts. They will give you everything you need to include within your package. We have a customized package option for you, no need to worry about it."
        ans7="Yes, our service includes social media paid advertisements through boosting posts on those platforms. You know Facebook and other platforms have their own advertisement system built on their platform. You can target people based on different criteria, including birthday, device, locations, etc. We will run ads for you and design those ad banners that include promotional texts, products, or services (whatever you are selling)."
        ans8="We have the most sophisticated reporting system that includes detailed information about what we are doing on your social profiles. The report you will get is well-designed, and we will show you the growth through the report so that you can see how your social profiles are growing day by day."
        ans9="Yes, of course, you should know that we are providing long-term social media management services for more than years now. If you want to continue social media marketing on your social media platforms, then you need to work on your social media platforms regularly."
      />
    </>
  );
};

export default SocialMediaManagement;
