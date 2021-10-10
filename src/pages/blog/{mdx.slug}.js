import * as React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Helmet>
        <title>{data.mdx.frontmatter.title}</title>
      </Helmet>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{data.mdx.frontmatter.title}</h1>
            </header>
            <p>
              Author: {data.mdx.frontmatter.author}
              {"  "}|{"  "}
              {data.mdx.frontmatter.date}
            </p>
            <span className="image main">
              <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
              />
              <p>Photo Credit: {data.mdx.frontmatter.hero_image_credit_text}</p>
            </span>

            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        author
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPost;
