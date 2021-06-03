import React from "react"
import Video from '../components/video'
import VideoEmbed from '../components/videoEmbed'

import Layout from "../components/layout"
import Logos from "../components/logos"
import SEO from "../components/seo"
import Themes from "../components/themes"
import TopPanel from "../components/topPanel"

export default function Labels() {
  return (
    <Layout>
    <Video src='/teaser_three.mp4' />
    <SEO
    title="Labels"
    description="The Human Touch, a Fitzwilliam Museum exhibition has a variety of interactive components."
    />
    <TopPanel/>


    <div className="text-justify container-fluid bg-dark text-white mt-5">
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

    <div className="text-justify container-fluid bg-white text-dark mt-5">
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

     <Logos/>

    </Layout>
  )
}
