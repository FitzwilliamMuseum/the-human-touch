import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopPanel from "../components/topPanel"
import Logos from "../components/logos"

const NotFoundPage = () => (
  <Layout>
  <SEO title="404: Not found" />
  <TopPanel/>
  <div className="text-justify container-fluid bg-white text-dark p-5 ml-0 mr-0 mt-5">
    <div className="row">
     <div className="col-md-8 p-3 aos-init aos-animate text-center" data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </div>
  </div>
  <Logos/>
  </Layout>
)

export default NotFoundPage
