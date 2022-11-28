import React from "react";
import OverPercent from "../ServicesComponents/OverPercent";
import SeoFormBanner from "../ServicesComponents/SeoFormBanner";
import WhatSEO from "../ServicesComponents/WhatSEO";

import SEOBenefits from "../ServicesComponents/SEOBenefits";

import seo from "../../assets/services/whatseo.png";

import bImg from "../../assets/services/local.webp";
import Banner from "../ServicesComponents/Banner";
import ServiceFAQ from "../ServicesComponents/ServiceFAQ";

const ShopifySEOService = () => {
  return (
    <>
      <Banner title="Grow Sales of Your Shopify Store" />
      <SeoFormBanner
        title="Get Your Revenue Growing with Our Shopify Speed Optimization Services at Vonixu"
        p1="Yes, we understand you are in stress because your site is not optimized well for ranking.

We will resolve all those issues and improve the user interface to let your visitors check out your products or service comfortably and buy them.

Vonixu is a full-service digital marketing service provider working in the industry for more than a decade.

Our experience in Shopify marketing from the beginning of this platform, we have served thousands of brands with our optimization services.
"
        p2="Our customers are satisfied with our service, and they are recommending us as the best Shopify SEO service provider in the industry.

We have several in-house teams consisting of the best Shopify experts who are working on our clients’ projects.
"
        p3="The service our team is providing, you are not going to get from any other agencies.

We have proven strategies for your projects that will surely improve your organic reach and bring revenue to your business.
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
        p1="Our service will solve all issues, including lazy loading images, preloading, image optimization, minifying JS & CSS codes, etc.

No matter what the problems are, our experts will discuss with you the issues and the difficulties are happening due to them.

It will help you to understand why your site is not performing well.
"
        p2=" They will solve the problem and show you the improvements they are bringing with real-time results.

If you really want to improve the performance of your site and increase revenue, then contact us using our contact info below.
"
        p3=" We have the most attentive and active customer service team who will respond to you within the shortest time after you send us your query.

Just call us at the given number to get an appointment with our Shopify experts to discuss your issue with them.
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
        title="FAQ: Shopify SEO Services"
        p="Shopify business owners are thriving for generating more sales to reach their targeted ROI. They are asking questions about optimizing their store website to get higher ranking on search engines.

Well, we are trying to give their answers through our Shopify SEO services. Here you can find answers to what you are asking about our service.
"
        que1="What Are Shopify Speed Optimization Services?"
        que2="How Our Shopify SEO Service Will Increase Your Sales?"
        que3="What Can You Optimize On My Shopify Store Site?
"
        que4="Is My Website Safe With You?"
        que5="Are You Going to Work On My Live Site or Theme?"
        que6="Will My Website’s Design and Functionality Remain the Same?"
        que7="How Long Will It Take to Complete?"
        que8="Do You Provide Support After the Optimization is Done?"
        que9="How Much Does It Cost to Optimize My Shopify Store?"
        que10="Why Your Shopify Store Optimization Service is Better Than Others?"
        ans1="Shopify speed optimization service makes your store site load faster when visitors are clicking on your site link. It includes code changes, minifying files, image compression, etc. The loading speed of your website can impact your sales, leading to your revenue as well.

If your site speed is higher, then visitors will not bounce before they buy. On the other hand, if your site is loading slower, then your revenue curve will be going down on the curve.
"
        ans2="We will solve all issues that are causing your site’s performance on search engines and lowering user-experience. You should know that visitors are bouncing back if your site is not loading within a maximum of three seconds.

Additionally, we will improve user experience using different tools and our developers’ expertise.
"
        ans3="
We can optimize your complete Shopify store. Our service covers SEO optimization, speed optimization, image optimization, on-page optimization, and off-page optimization.

Not only those, but we can also optimize your store or brand for improving brand reputation improvement and brand impression improvement. It will make your store reliable to your customers that influence them to buy your products or services unintentionally.

"
        ans4="We are a client-oriented full-service digital marketing agency where we put the highest importance on the safety of clients’ property. Our experts will work dedicatedly on your store site after keeping a backup of your site.
It will help if anything goes south, then we can let your site go to its previous condition.

"
        ans5="No, we will not work on your live site or theme. We will set up a duplicate site on your server, but it will not be published until you approve. Our service depends on your satisfaction. Once you are satisfied, then we will replace the current site with our duplicate one.
"
        ans6="Yes, your site will be exactly the same as it was when you gave us the site to work on. We will surely optimize your site to improve user experience. We do not sacrifice user-experience to achieve faster loading speed.

"
        ans8="Yes, we have policies for after-sales service. We will provide a 15-days review period if you face any issues within the time, then we will solve that issue within the shortest time possible.

You must know that we have the most sophisticated support team that is available 24/7 at your service.
"
        ans9="Shopify store optimization cost can be different on how in-depth the agency is providing the services. Well, we have the most affordable Shopify SEO services.If you are searching for the Shopify speed optimization service , feel free contact us. "
        ans10="Our Shopify service is the best Shopify SEO optimization services in the industry. What we are going to serve you with our service, no other companies can provide.

Our Shopify SEO services will improve your brand visibility, improve page speed that keeps visitors from bouncing out, improve sales, and generate revenue that you desire.
"
      />
    </>
  );
};

export default ShopifySEOService;
