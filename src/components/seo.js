import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang = "en", title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang={lang}></html>
      <title>{title}</title>
      <meta name="description" content={metaDescription}></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={metaDescription}></meta>
      <meta property="og:type" content="website"></meta>
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:creator" content={site.siteMetadata.author}></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={metaDescription}></meta>
    </Helmet>
  );
}

export default SEO;
