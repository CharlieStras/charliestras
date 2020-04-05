import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Global } from "@emotion/core";

import { reboot } from "../utils/reboot";
import Header from "./Header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global
        styles={[
          reboot,
          {
            "*,*::before,*::after": {
              boxSizing: "inherit"
            },
            "html, body": {
              boxSizing: "border-box",
              margin: 0,
              fontFamily: `"Inter Regular", sans-serif`,
              fontSize: 18,
              lineHeight: 1.55
            },
            h2: {
              marginTop: "20px"
            },
            "ol, ul": {
              margin: 0,
              padding: 0,
              listStylePosition: "inside"
            },
            ul: {
              marginBottom: "10px"
            },
            "th, td": {
              border: "1px solid #000",
              padding: "10px"
            }
          }
        ]}
      ></Global>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        css={{
          margin: "0 auto",
          width: "100%",
          padding: "20px",
          "@media (min-width: 767px)": {
            maxWidth: "800px",
            padding: "20px 40px"
          }
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
