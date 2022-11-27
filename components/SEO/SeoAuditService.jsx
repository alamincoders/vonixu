import React from "react";
import OverPercent from "../ServicesComponents/OverPercent";

import SEOBenefits from "../ServicesComponents/SEOBenefits";
import SeoFormBanner from "../ServicesComponents/SeoFormBanner";

import WhatSEO from "../ServicesComponents/WhatSEO";
import seo from "../../assets/services/whatseo.png";

import bImg from "../../assets/services/local.webp";
import Banner from "../ServicesComponents/Banner";
import ServiceFAQ from "../ServicesComponents/ServiceFAQ";

const SeoAuditService = () => {
  return (
    <>
      <Banner title="Tailored to Find What Your Website Need to Improve" />
      <SeoFormBanner
        title="Our SEO Audit Service Delivers In-Depth Report for Solving Critical Problems that's Holding Back Your Website's Performance."
        p1="SEO is more than important nowadays to acquire potential customers from search engines where people are searching for the services they need. No matter what, if you want to get limitless opportunities for our business, then optimizing your website for the right kind of SEO is a must. Well, having a website for your business is not a unique thing nowadays. It is a familiar way of reaching out to customers through online marketing. However, running that website can lead you to several issues that must be solved by website SEO audit experts."
        p2="SEO audit consists of running an in-depth analysis of different elements of SEO, including on-page SEO, off-page SEO, analyzing backlink profile, internal backlink profile, etc. Technical SEO audit service at Vonixu will run an in-depth check-up to find out all the internal errors that are slowing down your website.  Our experts will also look into so many technical issues like redirections, SSL integration, etc.
"
        p3="In addition to that, technical issues like error-404, canonical issues, errors in internal files. Check out our service plan and features to see the problems our service will get you."
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
        title="Why Should You Choose Us?"
        p1="Vonixu a full-service digital marketing agency providing website SEO audit service for more than a decade now. We have served thousands of small businesses, local businesses, and multinational companies in our service period. If you want to get the best website SEO audit services for your business website, then our experts are there to help you."
        p2=" 

We have a dedicated team for doing SEO audits, and they are experienced enough to provide result-driven service. Just call us at the below number for discussing your project with our audit expert
"
        p3="Do not worry, and we will train you after auditing your site to show you how to implement the changes needed.
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
        p="Many customers are sending us queries they need answers through emails. You should know that we care about the queries you send us because we are a client-oriented service provider. However, it is difficult for us to answer all the questions individually, so we decided to answer them here all at once. Check below the Q&A section to find answers to the most asked queries about our SEO audit service."
        que1="Why Do I Need An SEO Audit Service?"
        que2="What Does Your Website SEO Audit Service Will Cover?"
        que3="How Much Does a Website Audit Service Cost?"
        que4="How Much Time will It Take to Implement SEO Audit On My Website?"
        que5="What Type of Site SEO Audit Services are There?"
        que6="What Makes Your SEO Site Audit Service Different?"
        que7="Can You provide a Free Quote for SEO Audit Service?"
        que8="Do You Provide Any Reports After Auditing My Site?"
        que9="How Often Should I Audit My Website?"
        que10="Do You Require Special Access to My Website?"
        ans1="There is a particular purpose of doing an SEO audit on every site you have. An SEO audit will let you find out why your site is not ranking on search engines, or visitors are bouncing back after visiting your site"
        ans2="Our complete website audit service will cover every element present on your website. That includes on-site analysis, internal & external link profile analysis, off-page SEO analysis, in-depth content analysis, etc. Remember, the details we will cover can be different from other providers, but you will find our service as the most useful and detailed."
        ans3="It depends on how in-depth the analysis you are getting. Our auditing service goes the maximum depth to find out issues lagging your website from ranking higher on the search engine. Check out our packages to get an affordable site audit service that you can afford. If you want a customized package, then our experts can help you. Contact us using a form or call us."
        ans4="The required time for auditing any site depends on the size of your website, including pages, posts, internal files, etc. As we have said that our experts typically run deep analysis on your site, so you may see that our time limits vary with other providers."
        ans5="At Vonixu, we have different site audit services that you can get for your site. Each service has its own features and technical insiders. Here’s the list of them, Full Site SEO Audit Service, On-page SEO Audit Service, Website Backlink Audit Service, Technical SEO Audit Service, Whole site Content Audit Service, Competition Audit Service, Website Backlink Audit Service"
        ans6="Our website audit service is different in terms of in-depth detailing, reporting, customer support, service environment, etc. We will go further deep into your site to identify issues and their sources. We will include everything we find that needs a solution to improve rankings on the search engines and improve user experience."
        ans7="Yes, if you want to see what you will get after choosing our service, then surely we will give you a free quote. All you need is to send us your URL through an email to get a free quote from us. We will send you a hand-made quote with all the details you need to know about our service.
"
        ans8="Yes, we will provide the ultimate detailed report that you can implement on your site easily. Our report will contain instructions that will help you learn through step by step guide on how to implement solutions to those issues that lags your site’s performance."
        ans9="Well, the standard frequency is twice a year. It can vary based on your site’s performance. If you find out that your site has suddenly stopped performing or decreasing the visitors, get help from experts. Remember, your site is yours’ it may not match other sites, so you need to treat your site whenever you face difficulties in performance."
        ans10="No, we do not need any access to your website, but we need your site link to run the audit. Your site URL is safe with us because we value our clients’ privacy the most. We will run the audit externally using our advanced tools, and our experts will dedicatedly work on your project and report to you whenever you need it."
      />
    </>
  );
};

export default SeoAuditService;
