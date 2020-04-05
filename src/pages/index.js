import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostLink from "../components/PostLink";

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts }
  } = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />

      <ul
        css={{
          listStyleType: "none",
          margin: "5px 0",
          padding: 0
        }}
      >
        {posts.map(post => (
          <li
            key={post.id}
            css={{
              marginTop: "15px",
              "&:first-of-type": {
                marginTop: 0
              }
            }}
          >
            <PostLink
              slug={post.fields.slug}
              title={post.frontmatter.title}
            ></PostLink>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
