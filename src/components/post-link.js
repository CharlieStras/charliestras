import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default ({ key, to, title, date }) => (
  <div key={key}>
    <Link
      to={to}
      css={css`
        display: inline-block;
        margin: ${rhythm(1 / 3)} 0;
      `}
    >
      {`${title} - ${date}`}
    </Link>
  </div>
)
