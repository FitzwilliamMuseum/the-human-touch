import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopPanel from "../components/topPanel"
import Logos from "../components/logos"
import Themes from "../components/themes"

const Exhibition = () => (
  <Layout>
    <SEO
    title="Home"
    description="The background to the Fitzwilliam Museum's brand new exhibition, the Human Touch"
    />
    <TopPanel/>
    <div className="bg-white p-2">
      <h2 className="text-dark text-center">Sections of the exhibition</h2>
    </div>
    <div className="container" style={{marginTop: `5rem`}}>
      <div className="themes">
        <Themes />
      </div>
    </div>
    <Logos />
  </Layout>
)

export default Exhibition
