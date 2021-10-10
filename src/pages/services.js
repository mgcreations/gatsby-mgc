import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import BannerLanding from "../components/BannerLanding";

import picWebsite from "../assets/images/Live-Laugh-Love---eCommerce-Website.jpg";
import picGraphicDesign from "../assets/images/Stationery-Logo-Mockups.jpg";
import picSEO from "../assets/images/picSEO.jpg";
import vidLogo from "../assets/images/logo-vid.mp4";

const Services = (props) => (
  <Layout>
    <Helmet>
      <title>MG Creations | Services</title>
      <meta name="description" content="Services offered by MG Creations" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Custom Website Design &amp; Development</h2>
          </header>
          <p>
            Designing and developing websites is our speciality. At MG Creations
            - Innovative Web and Graphic Design we do not use website templates,
            all our web designs are 100% unique and designed from scratch. With
            our extensive background in languages and technologies such as HTML,
            CSS, C#, React, SQL and XML, resulting in a website that is W3C
            Standards compliant and accessible. Additionly, we test each website
            in all the popular browsers (Google Chrome, Internet Explorer,
            FireFox and etc.) to make sure that they are cross-browser-friendly.
            All website graphics are optimised to ensure fast web page loading
            speeds.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <span className="image">
            <img src={picWebsite} alt="eCommerce Website" />
          </span>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>eCommerce Development</h3>
              </header>
              <p>
                MG Creations is able able to connect your site to one of the
                leading e-commerce platforms, nopCommerce. Not only does this
                give you the best opportunities for software linking, but it
                empowers you with the capacity to modify, update and edit your
                site on your own schedule. Because inventory moves fast and your
                website should too.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <span className="image">
            <img src={picSEO} alt="eCommerce Website" />
          </span>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>SEO</h3>
              </header>
              <p>
                Search Engine Optimisation is a big part of web design and
                development. The main goal is to enhance your business visibilty
                online. The process involves making small changes to your
                website set up in order to rank higher in the search results.
                The higher the search result the more likely for click through
                to your website. This is an going development process for each
                page of your website.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section id="three">
        <div className="inner">
          <header className="major">
            <h2>Graphic Design</h2>
          </header>
          <p>
            MG Creations - Innovative Web and Graphic Design offers a full range
            of graphic design and print solutions. Whether you are looking to
            revamp your logo across all channels or create exciting advertising
            pieces that stand out to your target audience.
            <br />
            Let's build your business' brand.
          </p>
        </div>
      </section>
      <section className="spotlights">
        <section>
          <span className="image">
            <img src={picGraphicDesign} alt="Graphic Design" />
          </span>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Large range of branding deliverables</h3>
              </header>
              <p>
                Logo Design | Promotional and advertising poster production |
                Pull-up and PVC banner design | Flyers, Brochures &amp;
                Catalogue | Advertisements | Business cards | Corporate campaign
                design work | Email signatures | A4 Presentation folders |
                Signage
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <span className="image">
            <video controls>
              <source src={vidLogo} type="video/mp4" />
            </video>
          </span>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Logo Amination</h3>
              </header>
              <p>
                Bring your logo to life and convey your story.
                <br />
                It is importamt that it truely reflects your brand's uniqueness.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
);

export default Services;
