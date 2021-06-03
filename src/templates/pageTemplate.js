import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from 'react-bootstrap/Button'
import { Link } from "gatsby"
import Themes from "../components/themes"
import Logos from "../components/logos"
import Video from "../components/video"
import Labels from "../components/labels"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, featuredImg, html } = markdownRemark
  return (
    <Layout>
    <Video src='/teaser_two.mp4' className="fullscreen"/>

    <SEO
    title={frontmatter.title}
    description={frontmatter.description}
    />

    <img src="https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fv-logo-white.svg" alt="FitzVirtual Logo" width="200" />

    <h1 style={{fontSize: `4rem`}}>The Human Touch</h1>
    <p className="lead cover">Making Art | Leaving Traces</p>

    <Button variant="btnBook"><Link to="https://tickets.museums.cam.ac.uk/overview/thehumantouch">Book now</Link></Button>

    <p className="lead cover">6 January 2021 to 3 May 2021</p>


    <div className="text-justify container-fluid bg-white text-dark p-5 ml-0 mr-0 mt-5">
      <div className="row">
        <div className="col-md-8 p-3 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
          <h1>{frontmatter.title}</h1>
          <h2>
            Section {frontmatter.section}
          </h2>
            <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
            <div className="col-md-4 p-3 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
            <figure className="figure">
            <img src={frontmatter.fullImageUrl} className="img-fluid" alt={frontmatter.featuredImgAlt}/>
            <figcaption className="figure-caption mt-2"><em>{frontmatter.featuredImgAlt}</em></figcaption>
            </figure>
            </div>
          </div>

      </div>
      <Labels
      sectionIn={frontmatter.section}
      />
      <div className="container" style={{marginTop: `5rem`}}>
        <div className="themes">
          <Themes/>
        </div>
      </div>

      <Logos />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        order
        featuredImgUrl
        fullImageUrl
        featuredImgAlt
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
  `
