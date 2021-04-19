import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Button from 'react-bootstrap/Button'
import { Link } from "gatsby"
import Logos from "../components/logos"
import Video from "../components/video"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { directusHumantouch } = data // data.markdownRemark holds our post data
  const { title, description, slug  } = directusHumantouch

  return (
    <Layout>
    <Video src='/teaser_two.mp4' className="fullscreen"/>

    <img src="https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fv-logo-white.svg" alt="FitzVirtual Logo" width="200" />

    <h1 style={{fontSize: `4rem`}}>The Human Touch</h1>
    <p className="lead cover">Making Art | Leaving Traces</p>

    <Button variant="btnBook"><Link to="https://tickets.museums.cam.ac.uk/overview/thehumantouch">Book now</Link></Button>

    <p className="lead cover">
      6 January 2021 to 3 May 2021
    </p>
    {title}
    { description }

    <div className="text-justify container-fluid bg-white text-dark p-5 ml-0 mr-0 mt-5">
      <div className="row">
        <div className="col-md-8 p-3 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">

            <div
                className="blog-post-content"
              />

            </div>
            <div className="col-md-4 p-3 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">

            </div>
          </div>

      </div>
      <div className="container" style={{marginTop: `5rem`}}>

      </div>

      <Logos></Logos>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    directusHumantouch (slug: { eq: $slug } ) {
      title
      description
      slug
    }
    imageSharp(fluid: {srcSet: {}, originalName: {}, originalImg: {}}, fixed: {}) {
      id
      fluid(grayscale: false, duotone: {highlight: "", shadow: ""}) {
        originalName
        src
        sizes
      }
    }
    directusFile {
      title
      tags
      type
      uploaded_by
      width
      height
      filesize
      data {
        full_url
        thumbnails {
          url
          height
          width
        }
      }
    }
  }
`
