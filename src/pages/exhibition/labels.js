import React from "react"
import Video from '../../components/video'

import Layout from "../../components/layout"
import Logos from "../../components/logos"
import SEO from "../../components/seo"
import Themes from "../../components/themes"
import TopPanel from "../../components/topPanel"
import LabelsAll from "../../components/labelsall"

export default function Labels() {
  return (
    <Layout>
    <Video src='/teaser_three.mp4' />
    <SEO
    title="Labels"
    description="The Human Touch, a Fitzwilliam Museum exhibition has a variety of interactive components."
    />
    <TopPanel/>

     <LabelsAll />
     <div className="container" style={{marginTop: `5rem`}}>
       <div className="themes">
         <Themes/>
       </div>
     </div>

     <Logos/>

    </Layout>
  )
}
