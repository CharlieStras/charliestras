import { Link } from "gatsby";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    css={{
      backgroundColor: "#663399",
      padding: "15px 0 10px"
    }}
  >
    <div
      css={{
        margin: "0 auto",
        width: "100%",
        padding: "0 20px",
        "@media (min-width: 767px)": {
          maxWidth: "800px",
          padding: "0 40px"
        }
      }}
    >
      <h1>
        <Link
          to="/"
          css={{
            color: "#fff",
            textDecoration: "none"
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
