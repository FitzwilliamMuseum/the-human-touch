import React from "react"
// import Video from '../components/video'
import Layout from "../components/layout"
import Logos from "../components/logos"
import SEO from "../components/seo"
import TopPanel from "../components/topPanel"
import Themes from "../components/themes"

const About = () => (

    <Layout>

    <SEO
    title="About the exhibition"
    description="This page documents the sections behind the Fitzwilliam Museum's exhibition on the Human Touch"
    />
    <TopPanel />


    <div className="text-justify container-fluid bg-white text-dark p-5 ml-0 mr-0 mt-5">
    <div className="row">
     <div className="col-md-8 p-3 aos-init aos-animate " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
       <p>
         Touch is our first sense. Through touch we make art, stake a claim to
         what we own and those we love, express our faith, our belief, our anger.
         Touch is how we leave our mark and find our place in the world; touch is
         how we connect.
       </p>
       <p>
         Drawing on works of art spanning four thousand years and from across the
         globe, this exhibition explores the fundamental role of touch in human
         experience, and offers new ways of looking.
        </p>
        <p>
        The curators explore anatomy and skin; the relationship between the brain, hand, and creativity;
         touch, desire and possession; ideological touch; reverence and iconoclasm.
         A final section collects a range of reflections, historic and contemporary,
         on touch.
       </p>
       <p>
         Objects range from ancient Egyptian limestone sculpture to medieval
         manuscripts and panel paintings, from devotional and spiritual objects
         to love tokens and faith rings from all over the world. Drawings,
         paintings, prints and sculptures by Raphael, Michelangelo, Rembrandt,
         Carracci, Hogarth, Turner, Rodin, Degas, and Kollwitz will be re-analysed,
         seen alongside work by contemporary artists Judy Chicago, Frank Auerbach,
         Richard Long, the Chapman Brothers, Richard Rawlins, Donald Rodney and
         others.
       </p>

       <p>
         The events of 2020 have made us newly alive to both the value and the dangers
         of touch, and many of the one hundred and fifty or so objects in the show
         and this accompanying catalogue have become doubly powerful in the
         context of the pandemic.
       </p>
       <p>
        This exploration of our most fundamental sense is urgent, timely and resonant.
       </p>
      </div>
      <div className="col-md-4 aos-init aos-animate text-center " data-aos-duration="600" data-aos="fade-left" data-aos-delay="0">
        <figure className="figure">
        <img src="https://fitz-cms-images.s3.eu-west-2.amazonaws.com/handprint.jpg" className="img-fluid" alt="Emil Orlik (1870-1932), Katrin Bellinger Collection. Photograph © Matthew Hollow." width="400"/>
        <figcaption className="figure-caption mt-2 text-left"><em>Handprint of Emil Orlik (1870-1932), Katrin Bellinger Collection. Photograph © Matthew Hollow.</em></figcaption>
        </figure>
      </div>
      </div>
    </div>

    <div className="container" style={{marginTop: `5rem`}}>
      <div className="themes">
        <Themes />
      </div>
    </div>
    <Logos />
    </Layout>
  )
export default About
