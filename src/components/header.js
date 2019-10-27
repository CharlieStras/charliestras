import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

const Header = ({ siteTitle }) => (
  <header
    css={css`
      background: rebeccapurple;
      margin-bottom: 1.45rem;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        max-width: 960px;
        padding: 1.45rem 1.0875rem;
      `}
    >
      <h1
        css={css`
          margin: 0;
        `}
      >
        <Link
          to="/"
          css={css`
            background-image: none;
            color: white;
            text-decoration: none;
            text-shadow: none;
          `}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
