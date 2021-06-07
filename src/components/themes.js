import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import { Card } from 'react-bootstrap';

const Themes = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___order]}) {
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
              section
            }
            featuredImg {
              childImageSharp {
                fluid(duotone: {highlight: "#a3c1ad", shadow: "#192550", opacity: 50}, traceSVG: {color: "#a3c1ad"}) {
                  originalName
                  src
                  sizes
                }
                fixed(width: 300) {
                  aspectRatio
                  originalName
                  src
                }
              }
            }
          }
        }
      }
    }
    `)

    return (
      <div className="col-md-12">
      <div className="row justify-content-center">
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <div className="col-md-3 mb-3 aos-init aos-animate" data-aos-duration="600" data-aos="flip-right" data-aos-delay="0" key={edge.node.id}>
          <Card className="no-radius bg-dark h-100 highlight">
          <a href={edge.node.frontmatter.slug}><Card.Img variant="top" src={edge.node.featuredImg.childImageSharp.fixed.src} alt={edge.node.frontmatter.featuredImgAlt}/></a>
          <Card.Body>
          <a href={edge.node.frontmatter.slug}><Card.Title>{edge.node.frontmatter.title}</Card.Title></a>
          </Card.Body>
          </Card >
          </div>
        )
      })}
      </div>
      </div>
    )
  }
  export default Themes
