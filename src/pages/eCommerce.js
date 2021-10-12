import * as React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

import BannerShop from "../components/BannerShop";

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

    <div id="main" className="alt"></div>
  </Layout>
);

export default eCommerce;
