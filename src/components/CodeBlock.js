import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { css } from "@emotion/core";

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "10px",
            borderRadius: "4px",
            fontSize: "16px",
            float: "left",
            minWidth: "100%",
            overflow: "initial",
            fontFamily: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
          }}
          css={css`
            &:after {
              content: ".";
              visibility: hidden;
              display: block;
              height: 0;
              clear: both;
            }
          `}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <span
                css={css`
                  display: inline-block;
                  width: 2em;
                  user-select: none;
                  opacity: 0.3;
                `}
              >
                {i + 1}
              </span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
