module.exports = {
  siteMetadata: {
    title: `The Human Touch`,
    tagline: `Making Art | Leaving Traces`,
    description: `The Fitzwilliam Museum's spring exhibition - The Human Touch - 6th January to 21st May 2020`,
    author: `@dejpett`,
    image: `/handprint.jpg`,
    url: `https://human-touch.beta.fitz.ms`,
    siteUrl: `https://human-touch.beta.fitz.ms`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-directus-cms',
      options: {
        url: 'https://content.fitz.ms',
        project: "fitz-website",
        downloadFiles: true,
        allowCollections: ['humantouch'],
        auth: {
          token: 'R37HZ4FjU4gPJL1ixMAvye5g',
        },
        targetStatuses: ['published', '__NONE__'],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-16x16.png`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
    resolve: "gatsby-plugin-social-cards",
    options: {
      // ommit to skip
      authorImage: "./static/FV.svg",
      // image to use when no cover in frontmatter
      backgroundImage: "./static/HandofFrankAuerbach.png",
      // author to use when no auth in frontmatter
      defaultAuthor: "The Fitzwilliam Museum",
      // card design
      design: "default", // 'default' or 'card'
    },
  },
  {
  resolve: `gatsby-plugin-google-gtag`,
  options: {
    // You can add multiple tracking ids and a pageview event will be fired for all of them.
    trackingIds: [
      "G-KB0ZD7CHPD", // Google Analytics / GA
    ],
    // This object gets passed directly to the gtag config command
    // This config will be shared across all trackingIds
    gtagConfig: {
      optimize_id: "OPT_CONTAINER_ID",
      anonymize_ip: true,
      cookie_expires: 0,
    },
    // This object is used for configuration specific to this plugin
    pluginConfig: {
      // Puts tracking script in the head instead of the body
      head: false,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
    },
  },
},

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
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
