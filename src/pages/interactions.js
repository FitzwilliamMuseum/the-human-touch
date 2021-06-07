import React from "react"
import Video from '../components/video'
import VideoEmbed from '../components/videoEmbed'

import Layout from "../components/layout"
import Logos from "../components/logos"
import SEO from "../components/seo"
import Themes from "../components/themes"
import TopPanel from "../components/topPanel"
import { Card } from 'react-bootstrap';

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


      <div className="col-md-12">
        <h2 className="text-center mt-3">Videography</h2>
        <div className="row justify-content-center ">

            <div className="col-md-4 mb-3 mt-3 aos-init aos-animate" data-aos-duration="600" data-aos="flip-right" data-aos-delay="0" >
            <Card className="no-radius bg-dark h-100 highlight">
            <Card.Body>
            <VideoEmbed
               videoSrcURL="https://player.vimeo.com/video/486958174"
               videoTitle="The Human Touch video wall film"
               className="embed-responsive-item"
             />
            </Card.Body>
            </Card >
            </div>

            <div className="col-md-4 mb-3 mt-3 aos-init aos-animate" data-aos-duration="600" data-aos="flip-right" data-aos-delay="0" >
            <Card className="no-radius bg-dark h-100 highlight">
            <Card.Body>
            <VideoEmbed
               videoSrcURL="https://player.vimeo.com/video/483625519"
               videoTitle="The Human Touch, Run at the Fitzwilliam Museum"
               className="embed-responsive-item"
             />
            </Card.Body>
            </Card >
            </div>

            <div className="col-md-4 mb-3 mt-3 aos-init aos-animate" data-aos-duration="600" data-aos="flip-right" data-aos-delay="0" >
            <Card className="no-radius bg-dark h-100 highlight">
            <Card.Body>
            <VideoEmbed
               videoSrcURL="https://www.youtube.com/embed/3pcPx9lC4F8"
               videoTitle="The Human Touch video wall film"
               className="embed-responsive-item"
             />
            </Card.Body>
            </Card >
            </div>

            <div className="col-md-4 mb-3 mt-3 aos-init aos-animate" data-aos-duration="600" data-aos="flip-right" data-aos-delay="0" >
            <Card className="no-radius bg-dark h-100 highlight">
            <Card.Body>
            <VideoEmbed
               videoSrcURL="https://www.youtube.com/embed/y52LprXN6_c"
               videoTitle="The Human Touch video wall film"
               className="embed-responsive-item"
             />
            </Card.Body>
            </Card >
            </div>

            <div className="col-md-4 mb-3 mt-3 aos-init aos-animate" data-aos-duration="600" data-aos="flip-right" data-aos-delay="0" >
            <Card className="no-radius bg-dark h-100 highlight">
            <Card.Body>
            <VideoEmbed
               videoSrcURL="https://www.youtube.com/embed/cgtrc4Cxu2w"
               videoTitle="The Human Touch video wall film"
               className="embed-responsive-item"
             />
            </Card.Body>
            </Card >
            </div>

            <div className="col-md-4 mb-3 mt-3 aos-init aos-animate" data-aos-duration="600" data-aos="flip-right" data-aos-delay="0" >
            <Card className="no-radius bg-dark h-100 highlight">
            <Card.Body>
            <VideoEmbed
               videoSrcURL="https://www.youtube.com/embed/rMGXSMW_fO4"
               videoTitle="The Human Touch video wall film"
               className="embed-responsive-item"
             />
            </Card.Body>
            </Card >
            </div>
        </div>
      </div>
    </div>
  </div>

    <div className="bg-white p-2">
      <h2 className="text-dark text-center">Sections of the exhibition</h2>
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
