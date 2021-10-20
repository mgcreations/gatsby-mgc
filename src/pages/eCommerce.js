import * as React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

import BannerShop from "../components/BannerShop";

import pic01 from "../assets/images/mobile-commerce.jpg";
import pic02 from "../assets/images/Multi-Store.jpg";
import pic03 from "../assets/images/Drop-shipping.jpg";
import pic04 from "../assets/images/Product-features.jpg";
import pic05 from "../assets/images/ecommerce-seo.jpg";

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
        <section>
          <span className="image">
            <img src={pic03} alt="Multi-vendor ecommerce support" />
          </span>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Multi-vendor</h3>
              </header>
              <p>
                Multi-vendor and drop shipping enables you to sell online
                without having to stock inventory or ship orders.
              </p>
              <p>
                When drop shipping is enabled, each product is assigned to a
                particular vendor whose details are stored. Once an order is
                placed, an email is sent to the vendor of each product in the
                order. The email includes products, quantities, etc. The vendor
                then ships the items to a customer on behalf of the merchant,
                who typically pay each of his/her vendors at the end of the
                month.
              </p>
              <p>
                Products from multiple independent vendors appear in the common
                product catalog and your website visitors can shop at one web
                store even if your products are supplied by hundreds of
                different vendors from all over the world. Each vendor can be
                provided with administrator panel access to manage their
                products, review sales reports and order details regarding their
                products. Vendors do not interfere with each other's activity.
              </p>
            </div>
          </div>
        </section>
        <section>
          <span className="image">
            <img src={pic04} alt="product features" />
          </span>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Product features</h3>
              </header>
              <h4>Product attributes</h4>
              <p>
                Create as many attributes for your product as you need, such as
                size and colour - each with its own SKU, price, weight, image
                and stock level. Store owners can add text options to products
                for shoppers to fill in, such as initials for monogrammed
                products. The shoppers can also upload files, for example, for
                custom prints on shirts.
              </p>
              <h4>Product comparion</h4>
              <p>
                Comparing products side by side removes the guesswork from your
                customers and facilitates, their research, hence, improving the
                time spent on, and odds of, adding a product to the cart.
              </p>
              <h4>Stock Management</h4>
              <p>
                The inventory management allows store owners to discern physical
                stock and available quantities. You can easily manage backorder
                and pre-order status for each product. Multiple warehouses,
                partial deliveries, and stock management by product attributes
                (such as colour and size) are supported.
              </p>
              <h4>Prices</h4>
              <p>
                In nopCommerce, price tools go beyond simple price tag creation.
                Store owners can set different prices for different groups of
                their customers, hide prices for extra-valuable items and make
                customers contact a sales team by enabling "call for price".
                nopCommerce also supports "enter your price" functionality for
                donations.
              </p>
              <h4>Downloadable products</h4>
              <p>
                nopCommerce supports license and useragreement attachments for
                downloadable products, such as music files or ebooks. A store
                owner can choose a download activation type:"When order payment
                status is Paid" or "Manual activation".
              </p>
            </div>
          </div>
        </section>

        <section>
          <span className="image">
            <img src={pic05} alt="ecommerce seo" />
          </span>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>SEO</h3>
              </header>

              <p>
                Search engine optimisation is the process of increasing the
                visibility of a website in search results. nopCommerce search
                engine optimisation tools help to get higher search rankings,
                meaning more organic traffic going to your store.
              </p>
              <h4>Search engine friendly URLs</h4>
              <p>
                To make store pages more search engine-friendly, a store owner
                has full access to keyword tags and customised URLs management
                sections. nopCommerce also supports product page with
                SEO-friendly names out of the box.
              </p>
              <h4>Sitemap</h4>
              <p>
                There are two popular versions of sitemaps, and nopCommerce
                supports both of them. An XML sitemap is a structured format of
                a site that a visitor doesn't need to see. The sitemap gives
                information about the pages on the site to search engines: their
                relative importance to each other, and how often they are
                updated. HTML sitemaps are designed to help users find content
                on a page. They don't need to include each subpage. HTML
                sitemaps help both visitors and search engine bots find pages on
                the site.
              </p>
              <h4>Microdata</h4>
              <p>
                Microdata is a specification to embed machine-readable data in
                HTML documents. Integrating microdata into your website's code
                offers a number of potential advantages. First, microdata can
                give the search engine spiders more context for the type of
                information on the website and the way the site should be
                indexed and ranked. Another benefit of microdata is the creation
                of "rich snippets", which display more information on search
                result pages than traditional listing. nopCommerce supports
                Twitter and Open Graph (Facebook) META tags.
              </p>
              <h4>Localisable URLs</h4>
              <p>
                nopCommerce allows a store owner to localise URLs. URL
                localisation increases the chance of matching search results in
                the cultures/languages.
              </p>
              <h4>Breadcrumbs</h4>
              <p>
                nopCommerce supports breadcrumbs. They ease navigation within
                the search engine results page, which makes your listing look
                more attractive and trustworthy. Also, when it comes to huge
                websites, breadcrumbs can be a great way to help users identify
                where they are located.
              </p>
              <h4>URL Canonicalisation</h4>
              <p>
                URL canonicalisation is used to reduce indexing of duplicated
                pages and it makes a site more crawlable by setting a store URL
                to the canonical (preferred) URL for each category and product
                page.
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
