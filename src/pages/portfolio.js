import * as React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

import BannerPortfolio from "../components/BannerPortfolio";

// Logo Design Images
import pic01 from "../assets/images/Chase-Valley-Gardens---Logo.jpg";
import pic02 from "../assets/images/Eco-Inhle-Car-Wash.jpg";
import pic03 from "../assets/images/GSB---Logo.jpg";
import pic04 from "../assets/images/Live-Laugh-Love---Logo.jpg";
import pic05 from "../assets/images/PAC-MED---Logo.jpg";
import pic06 from "../assets/images/Strictly-Presidential---Logo.jpg";
import pic07 from "../assets/images/VHA-Accounting-Solutions---Logo.jpg";
import pic08 from "../assets/images/Viper-Bearings.jpg";
import pic09 from "../assets/images/Retrolux--Logo.jpg";

// Website Design Images
import pic10 from "../assets/images/Fearless-Website.jpg";
import pic11 from "../assets/images/Evident-Website.jpg";
import pic12 from "../assets/images/Farm-Equipment-Website.jpg";
import pic13 from "../assets/images/Ekhaya-Home---Website.jpg";
import pic14 from "../assets/images/Life-Behind-Bars-Website.jpg";
import pic15 from "../assets/images/vha-accounting-website.jpg";

const Portfolio = (props) => (
  <Layout>
    <Helmet>
      <title>MG Creations | Portfolio</title>
      <meta
        name="description"
        content="MG Creations Portfolio, graphic design, website design, design, vector art,"
      />
    </Helmet>

    <BannerPortfolio />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h3>Logo Design</h3>
          <p>
            A small collection of logo that MG Creations has designed over the
            years.
          </p>
          <div className="box alt">
            <div className="grid-wrapper">
              <div className="col-4">
                <span className="image fit">
                  <img src={pic01} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic05} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic06} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic07} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic08} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic09} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="inner">
          <h3>Website Design &amp; Development</h3>
          <p>
            A collection of websites designed and developed over the years. Some
            are still online.
          </p>
          <div className="box alt">
            <div className="grid-wrapper">
              <div className="col-4">
                <span className="image fit">
                  <img src={pic10} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic11} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic12} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic13} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic14} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic15} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Portfolio;
