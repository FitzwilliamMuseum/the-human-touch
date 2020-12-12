import React from "react"
import Video from '../components/video'
import VideoEmbed from '../components/videoEmbed'

import Layout from "../components/layout"
import Logos from "../components/logos"
import SEO from "../components/seo"
import Button from 'react-bootstrap/Button'
import { Link } from "gatsby"
import Themes from "../components/themes"

export default function Interactions() {
  return (
    <Layout>
    <Video src='/teaser_three.mp4' />

    <SEO title="Interactions and video" />

    <img src="https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fv-logo-white.svg" alt="FitzVirtual Logo" width="200" />

    <h1 style={{fontSize: `4rem`}}>The Human Touch</h1>
    <p className="lead cover">Making Art | Leaving Traces</p>

    <Button variant="btnBook"><Link to="https://tickets.museums.cam.ac.uk/overview/thehumantouch">Book now</Link></Button>

    <p className="lead cover">6 January 2021 to 3 May 2021</p>

    <div className="text-justify container-fluid bg-dark text-white p-0 ml-0 mr-0 mt-5">
      <div className="row">
         <div className="col-md-12 p-0 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
         <VideoEmbed
            videoSrcURL="https://player.vimeo.com/video/486958174"
            videoTitle="The Human Touch video wall film"
            className="embed-responsive-item"
          />
         </div>
       </div>
     </div>

    <div className="text-justify container-fluid bg-white text-dark p-0 ml-0 mr-0 mt-5">
      <div className="row">
         <div className="col-md-12 p-0 aos-init aos-animate" data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
         <VideoEmbed
            videoSrcURL="https://player.vimeo.com/video/483625519"
            videoTitle="The Human Touch, Run at the Fitzwilliam Museum"
            className="embed-responsive-item"
          />
         </div>
       </div>
     </div>
     <div className="container" style={{marginTop: `5rem`}}>
       <div className="themes">
         <Themes/>
       </div>
     </div>

     <Logos></Logos>

     <div className="container-fluid hands">
     </div>
    </Layout>
  )
}
