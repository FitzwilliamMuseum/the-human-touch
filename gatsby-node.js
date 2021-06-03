exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/pageTemplate.js`)
  const objectPostTemplate = require.resolve(`./src/templates/objectTemplate.js`)
  return graphql(`
    {
      allDirectusHumantouch {
        edges {
          node {
            directusId
            title
            slug
            section
          }
        }
      }
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
              order
              title
              section
            }
          }
        }
      }
    }

  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
  result.data.allDirectusHumantouch.edges.forEach(({ node }) => {
			createPage({
				path: '/section-' + node.section + '/labels/' + node.slug,
				component: objectPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.slug,
        },
			});
		});
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      });
    });
  });
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leaflet/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      featuredImg: File @link(from: "featuredImg___NODE")
    }

    type Frontmatter {
      title: String!
      featuredImgUrl: String
      featuredImgAlt: String
      section: String
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === "MarkdownRemark" &&
    node.frontmatter.featuredImgUrl !== null
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.featuredImgUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    })

    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.featuredImg___NODE = fileNode.id
    }
  }
}
