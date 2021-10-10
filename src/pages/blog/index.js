import * as React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import BannerBlog from "../../components/BannerBlog";

import Layout from "../../components/layout";

function BlogIndex({ data }) {
  return (
    <Layout pageTitle="My Blog Page Setup">
      <Helmet>
        <title>Blog Post by MG Creations</title>
        <meta
          name="description"
          content="Blog posts about new trends, graphic design articles, what's happening. Just reaching out."
        />
      </Helmet>

      <BannerBlog />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Post Collection</h2>
            </header>
            <p>
              A small collection of posts focusing on various areas that MG
              Creations is involved in. Being a freelancer has enabled me to
              develop my skills as needed.
            </p>
          </div>
        </section>
        <section id="two" className="spotlights">
          {data.allMdx.nodes.map((node) => (
            <section key={node.id}>
              <span className="image">
                <Link to={`/blog/${node.slug}`}>
                  <GatsbyImage
                    image={getImage(
                      node.frontmatter.thumb_image.childImageSharp
                    )}
                    alt={node.frontmatter.thumb_image_alt}
                  />
                </Link>
              </span>

              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>{node.frontmatter.title}</h3>
                  </header>
                  <p>{node.excerpt}</p>
                  <p>Posted: {node.frontmatter.date}</p>
                </div>
              </div>
            </section>
          ))}
        </section>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "D MMMM YYYY")
          title
          thumb_image_alt
          thumb_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default BlogIndex;
