import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopPanel from "../components/topPanel"

const IndexPage = () => (
  <Layout>
    <SEO
    title="Home"
    description="The background to the Fitzwilliam Museum's brand new exhibition, the Human Touch"
    />
    <TopPanel/>
  </Layout>
)

export default IndexPage
