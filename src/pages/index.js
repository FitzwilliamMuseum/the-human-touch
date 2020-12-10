import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    <h1 className="cover-heading">The Human Touch</h1>
    <p className="lead cover">Making Art | Leaving Traces</p>
    <img src="https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fv-logo-white.svg" alt="FitzVirtual Logo" width="200" />
  </Layout>
)

export default IndexPage
