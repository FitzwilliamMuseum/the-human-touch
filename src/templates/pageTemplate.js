import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Themes from "../components/themes"
import Logos from "../components/logos"
import Video from "../components/video"
import Labels from "../components/labels"
import TopPanel from "../components/topPanel"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, wordCount } = markdownRemark
  return (
    <Layout>
    <Video src='/teaser_two.mp4' className="fullscreen"/>

    <SEO
    title={frontmatter.title}
    description={frontmatter.description}
    />

    <TopPanel/>

    <div className=" container-fluid bg-white text-dark p-5 ml-0 mr-0 mt-5">
      <div className="row">
        <div className="col-md-12 p-3 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
          <h1>{frontmatter.title}</h1>

            <div
                className="blog-post-content text-justify"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <p className="sr-only">Word count {wordCount.words}</p>

            </div>
          

          </div>

      </div>
      <Labels
      sectionIn={frontmatter.section}
      />
      <div className="bg-white p-2"><h2 className="text-dark text-center">Sections of the exhibition</h2></div>
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
      wordCount {
        words
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
