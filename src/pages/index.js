import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from 'react-bootstrap/Button';
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO
    title="Home"
    description="The background to the Fitzwilliam Museum's brand new exhibition, the Human Touch"
    />
    <img src="https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fv-logo-white.svg" alt="FitzVirtual Logo" width="200" />
    <img src="https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png" alt="Fitzwilliam Museum" width="150">
    <h1 className="cover-heading" style={{fontSize: `4rem`}}>The Human Touch</h1>
    <p className="lead cover">Making Art | Leaving Traces</p>
    <Button variant="btnBook"><Link to="https://tickets.museums.cam.ac.uk/overview/thehumantouch">Book now</Link></Button>
    <p className="lead cover">6 January 2021 to 3 May 2021</p>
  </Layout>
)

export default IndexPage
