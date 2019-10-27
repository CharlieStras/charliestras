import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostLink
        key={node.id}
        to={node.fields.slug}
        title={node.frontmatter.title}
        date={node.frontmatter.date}
      ></PostLink>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
