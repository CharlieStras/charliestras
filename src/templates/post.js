import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/Layout";
import CodeBlock from "../components/CodeBlock";

const components = {
  pre: props => (
    <div
      css={{ overflow: "auto", marginRight: "-20px", marginLeft: "-20px" }}
      {...props}
    />
  ),
  code: CodeBlock
};

const PostTemplate = ({ data: { mdx } }) => (
  <Layout>
    <MDXProvider components={components}>
      <article>
        <h1 css={{ textAlign: "center" }}>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
    </MDXProvider>
  </Layout>
);

export default PostTemplate;

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`;
