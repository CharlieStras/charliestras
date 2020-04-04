import React from "react";
import { Link } from "gatsby";

const PostLink = ({ slug, title }) => {
  return (
    <Link
      to={slug}
      css={{
        display: "inline-block",
        fontSize: "1.3rem",
        color: "#663399",
        "&:hover": {
          color: "#7744aa"
        },
        "::after": {
          content: `''`,
          display: "block",
          width: "100%",
          marginTop: "2px",
          height: "2px",
          backgroundColor: "#7744aa",
          transform: "scaleX(0)",
          transition: "transform 250ms ease"
        },
        "&:hover::after": {
          transform: "scaleX(1)"
        }
      }}
    >
      {title}
    </Link>
  );
};

export default PostLink;
