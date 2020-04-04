const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type == "Mdx") {
    const value = createFilePath({ node, getNode, trailingSlash: false });

    createNodeField({
      name: "slug",
      node,
      value: `/blog${value}`
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`ERROR: Loading "createPages" query`);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    createPage({
      path: post.fields.slug,
      component: path.resolve("./src/templates/post.js"),
      context: {
        id: post.id
      }
    });
  });
};
