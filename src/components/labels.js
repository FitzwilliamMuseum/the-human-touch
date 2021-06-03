import React from "react"
import { graphql, useStaticQuery, query } from "gatsby"
import { Card } from 'react-bootstrap';


const Labels = ({ sectionIn }) => {
  const sectionPath = '/section-'
  const labelPath = '/labels/'

  const data = useStaticQuery(
    graphql`
    query ($section: String){
      allDirectusHumantouch(filter: {section: {eq: $section}}) {
        edges {
          node {
            id
            section
            title
            description
            slug
            hero_image {
              id
              data {
                full_url
                thumbnails {
                  url
                  dimension
                  width
                  height
                }
                url
              }
            }
          }
        }
      }
    }
    `,
    {section: sectionIn}
  )



  return (
    <div className="col-md-12 bg-white pt-3">
    <h2 className="text-dark text-center">Selected objects from this section</h2>

    <div className="row bg-white p-3 ">
    {data.allDirectusHumantouch.edges.map(edge => {
      let path = sectionPath + sectionIn + labelPath + edge.node.slug
      if(edge.node.section == sectionIn){
      return (
        <div className="col-md-3 mb-3 aos-init aos-animate" data-aos-duration="600" data-aos="flip-right" data-aos-delay="0" key={edge.node.id}>
        <Card className="no-radius bg-dark h-100 highlight">
        <a href={path}><Card.Img variant="top" src={edge.node.hero_image.data.thumbnails[2].url} alt={edge.node.title}/></a>
        <Card.Body>
        <a href={path}><Card.Title>{edge.node.title}<br /></Card.Title></a>
        </Card.Body>
        </Card >
        </div>
      )
    }
    })}
    </div>
    </div>
  )
}
export default Labels
