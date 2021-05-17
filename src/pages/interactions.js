import React from "react"
import Video from '../components/video'
import VideoEmbed from '../components/videoEmbed'

import Layout from "../components/layout"
import Logos from "../components/logos"
import SEO from "../components/seo"
import Themes from "../components/themes"
import TopPanel from "../components/topPanel"

export default function Interactions() {
  return (
    <Layout>
    <Video src='/teaser_three.mp4' />
    <SEO
    title="Interactions and video"
    description="The Human Touch, a Fitzwilliam Museum exhibition has a variety of interactive components."
    />
    <TopPanel/>


    <div className="text-justify container-fluid bg-white text-dark mt-5">
      <div className="row">

         <div className="col-md-6 p-0 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
         <VideoEmbed
            videoSrcURL="https://player.vimeo.com/video/486958174"
            videoTitle="The Human Touch video wall film"
            className="embed-responsive-item"
          />
         </div>

         <div className="col-md-6 p-0 aos-init aos-animate" data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
         <VideoEmbed
            videoSrcURL="https://player.vimeo.com/video/483625519"
            videoTitle="The Human Touch, Run at the Fitzwilliam Museum"
            className="embed-responsive-item"
          />
         </div>

         <div className="col-md-6 p-0 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
         <VideoEmbed
            videoSrcURL="https://www.youtube.com/embed/3pcPx9lC4F8"
            videoTitle="The Human Touch video wall film"
            className="embed-responsive-item"
          />
         </div>

         <div className="col-md-6 p-0 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
         <VideoEmbed
            videoSrcURL="https://www.youtube.com/embed/y52LprXN6_c"
            videoTitle="The Human Touch video wall film"
            className="embed-responsive-item"
          />
         </div>
         <div className="col-md-6 p-0 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
         <VideoEmbed
            videoSrcURL="https://www.youtube.com/embed/cgtrc4Cxu2w"
            videoTitle="The Human Touch video wall film"
            className="embed-responsive-item"
          />
         </div>
         <div className="col-md-6 p-0 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
         <VideoEmbed
            videoSrcURL="https://www.youtube.com/embed/rMGXSMW_fO4"
            videoTitle="The Human Touch video wall film"
            className="embed-responsive-item"
          />
         </div>

       </div>
     </div>

    <div className="text-justify container-fluid bg-white text-dark mt-5">
      <div className="row">

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
