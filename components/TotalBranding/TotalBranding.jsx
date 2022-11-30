import React from "react";
import OverPercent from "../ServicesComponents/OverPercent";
import SeoFormBanner from "../ServicesComponents/SeoFormBanner";
import WhatSEO from "../ServicesComponents/WhatSEO";

import SEOBenefits from "../ServicesComponents/SEOBenefits";

import seo from "../../assets/services/whatseo.png";
import Banner from "../ServicesComponents/Banner";
import ServiceFAQ from "../ServicesComponents/ServiceFAQ";

const TotalBranding = () => {
  return (
    <>
      <Banner title="Best Branding & Communication Services Visualize Your Ideas Online" />
      <SeoFormBanner
        title=" Improve Your Business's Reputation Online"
        p1="Online reputation management is useful to make sure that your online presence has the best possible reputation or online image for your brand, business, or company.
Online reputation management will ensure that your customers will get a positive impression when searching for your business online
"
        p2="More than 90% of people do in-depth, thorough research about a product online before purchasing it. To be briefer, any customer or a consumer looking to purchase a product at first checks the brand’s reputation or the product.
Customers consider checking online reviews, social media reviews and google search results. He or she uses these online platforms as a source to find out the features and reliability of the product before purchasing.
"
        p3="That is why positive reviews about a business are crucial so that your customers can be confident before purchasing a service or product. A product with bad reviews and reputation makes the potential customers confused and refrains them from making the purchase."
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
        p1="It is possible to lose 75% to 85% of businesses for SMBs if they get negative reviews online. That is why it is essential to manage an online reputation for the growth of your business.
VISER X is a highly reputed digital management company that offers an excellent online reputation management service. VISER X is working in this field for years and successfully provided reputation management service to clients worldwide.
"
        p2=" Our experienced team of experts can manage your reputation and help you attract potential customers to grow your business.
In this service, we will make sure there is plenty of positive news and reviews of your products or services on the internet. So that when someone searches, they will get a positive impression.
"
        p3=" To get out service, you can call us at +880 1842088100 or email us at info@viserx.com"
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
        title="FAQ: Best Online Reputation Management Service"
        p="Online reputation management service is used to make sure that your online presence has the best possible reputation or online image for your brand, business, or company. Consumers like to check the reputation of a brand or a product through online reviews on different platforms. That is why online reputation management is necessary to create a good reputation by getting positive reviews to generate revenue."
        que1="What is An Example of Online Reputation Management?"
        que2="How Do You Maintain Your Online Reputation?"
        que3="How Do You Improve Your Reputation?"
        que4="What Is the Need For Online Reputation Management?"
        que5="How Much Does Reputation Management Cost?"
        que6="Are BirdEye Reviews Fake?"
        que7="What does online reputation management include?"
        que8="How do I check my online reputation?"
        ans1="Here are the 5 useful tips for maintaining your online reputation
Publish useful and relevant content
Provide excellent and useful product on sales
Do provide a useful solution to any queries of your customer
Have an active and helpful customer care
Be interactive with the customers
"
        ans2="Why Do We Need to Protect Your Online Reputation?
It is necessary to protect your online reputation to keep your customers satisfied. When you have better customer reviews, you will have better sales too. New customers will be confident and trust your products for buying. If your reputation falls, then you will new customers will hesitate before making a purchase. That is why it is essential to make a good reputation and maintain it.
"
        ans3="Here are 5 tips to improve your reputation online
Provide relevant information with authenticity in your content
Keep your content updated
Make sure you respond to your customer
Change your way to approach and come with a better solution
Be interactive and honest with your product or services
"
        ans4="Businesses must have a good reputation and impression in the eye of consumers and customers online. As everyone is online in this era, hence businesses started making their digital presence more trustable. Since most companies do not have time and situation to maintain their online reputation, their online presence is heavy. Even though these companies have a significant presence, but customers may have a negative impression for various reasons. The well managed online reputation would identify those reasons and solve them. To manage the online reputation, companies hire an in-house team for managing their reputation online. Also, there is business outsource the task to other digital marketing agencies."
        ans5="Online reputation management may sound like a moderate task. Still, some businesses hire a team of multiple experienced experts to do the job. Then again, there are companies where it requires one expert.
Hence, online reputation management’s cost may vary, But there are many agencies like VISER X . Here, you can get different lucrative deals for different volumes, and you can have an excellent online reputation management service at a pocket-friendly price.
"
        ans6="BirdEye is the name of a software that enables businesses to collect and influence customer feedback. BirdEeye reviews are not fake. The company is highly reputed, and the software has a great review and won multiple awards."
        ans7="Online reputation management includes few marketing strategies such as
Combination of marketing
Public relations,
Authenticity and legal activities
Search engine optimization (SEO) strategies
These are the strategies that online reputation management includes making your online reputation strong.
"
        ans8="You can check your online reputation by using tools. Several tools can enable you to check your online reputation. The top 10 tools to check your online reputation
Google Alerts
Social Mention
Trackur
SentiOne
Reputology
Review Push
Chatmeter
Reputation Ranger
Reputation Health
Meltwater
"
      />
    </>
  );
};

export default TotalBranding;
