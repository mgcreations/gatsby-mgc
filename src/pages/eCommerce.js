import * as React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

import BannerShop from "../components/BannerShop";

import pic01 from "../assets/images/mobile-commerce.jpg";
import pic02 from "../assets/images/Multi-Store.jpg";

const eCommerce = (props) => (
  <Layout>
    <Helmet>
      <title>eCommerce Development | MG Creations</title>
      <meta
        name="description"
        content="eCommerce development by MG Creations"
      />
    </Helmet>

    <BannerShop />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Overview</h2>
          </header>
          <p>
            Start growing your online business with nopCommerce and MG
            Creations.
          </p>
          <p>
            Upload unlimited number of products, manage serveral stores from one
            admin panel, and increase sales with built in marketing tools.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <img src={pic01} alt="mobile commerce" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Mobile Commerce</h3>
              </header>
              <p>
                A responvise mobile webstore is a must for any online business
                owner these days, as 82% of smartphone users decide to buy
                something while surfing the internet on their smartphones.
              </p>
              <p>
                nopCommerce supports a mobile version of your website with a
                compelling, feature-rich and graphically pleasing storefront,
                and it provides means for retailers to immadiately deliver
                relevant offers, promotions and products. The mobile responvise
                version works on any connected device, without requiring extra
                development or add-ons.
              </p>
            </div>
          </div>
        </section>
        <section>
          <span className="image">
            <img src={pic02} alt="Multi-store ecommerce support" />
          </span>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Multi-store</h3>
              </header>
              <p>
                A multi-store feature enables you ti run more than one store
                from a single nopCommerce installation. This means you can host
                more than one frontend store on different domain and manage all
                admin operations from your single administration panel. You can
                create unique online stores for multiple brands, products, B2B,
                B2C, affiliates, co-branded stores and more. You can also
                quickly launch micro-stores for promotions campaigns.
              </p>
              <p>
                The following features can be set up separately for each store:
                <ul>
                  <li>Categories &amp; manufacturers per store</li>
                  <li>Products per store</li>
                  <li>Content (news, blog, articles) per store</li>
                  <li>Payment per store</li>
                  <li>Shipping methods per store</li>
                  <li>Tax rules per store</li>
                  <li>Product prices per store</li>
                  <li>Newsletters per store</li>
                  <li>Graphical themes per store</li>
                  <li>Order filtering and reports per store</li>
                  <li>
                    Almost each configuration setting can be set per store
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>

    <div id="main" className="alt"></div>
  </Layout>
);

export default eCommerce;
