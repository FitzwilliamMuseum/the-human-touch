import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import { Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
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
            featuredImg {
              childImageSharp {
                fixed(width: 400) {
                  base64
                  width
                  height
                  srcSet
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
            <div className="col-md-4 mb-3 aos-init aos-animate " data-aos-duration="600" data-aos="flip-right" data-aos-delay="0" key={edge.node.id}>

            <Card style={{ width: '18rem' }} className="no-radius bg-dark h-100 ">
                <Card.Img variant="top" src={edge.node.featuredImg.childImageSharp.fixed.src} />
                <Card.Body>
                    <Card.Title>{edge.node.frontmatter.title}</Card.Title>

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
