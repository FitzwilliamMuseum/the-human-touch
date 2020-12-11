import React from "react"
import Video from '../components/video'
import Layout from "../components/layout"

export default function Objects() {
  return (
    <Layout>
    <div>
      <h1>Objects</h1>
      <p>Such wow. Very React.</p>
    </div>
    <Video src='/human.mp4' />
    </Layout>
  )
}
