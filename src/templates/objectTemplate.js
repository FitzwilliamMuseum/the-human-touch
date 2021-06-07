import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Logos from "../components/logos"
import Video from "../components/video"
import Themes from "../components/themes"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { directusHumantouch } = data
  const { title, description, section, hero_image } = directusHumantouch

  return (

    <Layout>
    <SEO
    title={title}
    description={title}
    />
    <Video src='/teaser_two.mp4' className="fullscreen"/>

    <h1 style={{fontSize: `4rem`}}>The Human Touch</h1>
    <p className="lead cover">Making Art | Leaving Traces</p>


    <div className="container-fluid bg-white text-dark p-5 ml-0 mr-0 mt-5">
      <div className="row">
        <div className="text-justify col-md-6 p-3 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
            <h2 className="lead">{title}</h2>
            <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html:description }}
              />
            <div className="sectionTitle">
              <h4 className="lead btn btn-dark">Section: { section}</h4>
            </div>
            </div>
            <div className="col-md-6 p-3 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
            <figure className="figure">
            <img src={ hero_image.data.thumbnails[5].url} className="img-fluid mx-auto" alt=""/>
            <figcaption className="figure-caption mt-2">
              <em>{title}</em>
            </figcaption>
            </figure>
            </div>
          </div>
      </div>

      <div className="container" style={{marginTop: `5rem`}}>
        <div className="themes">
          <Themes/>
        </div>
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
      section
      section_name
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
`
