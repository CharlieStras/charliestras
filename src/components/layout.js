import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={css`
          margin: 0 auto;
          max-width: 960px;
          padding: 0px ${rhythm(3 / 4)} ${rhythm(1)};
          padding-top: 0;
        `}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
