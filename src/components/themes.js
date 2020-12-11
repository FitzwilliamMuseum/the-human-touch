import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Themes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 50)
            frontmatter {
              order
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              featuredImgAlt
              featuredImgUrl
            }
          }
        }
      }
    }
  `)

  return (

    <div className="col-md-12">
      <div className="row">
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <div className="card mb-2 mr-2 p-3 col-md-3 no-radius" key={edge.node.id}>
              <div className="card-body">
              <h2 className="card-title">{edge.node.frontmatter.title}</h2>
              <p className="card-text">{edge.node.excerpt}</p>
              </div>
            </div>
          )
        })}
        </div>
    </div>
  )
}
export default Themes
