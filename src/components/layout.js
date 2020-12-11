/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';
import Helmet from 'react-helmet'
import Video from '../components/video'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Helmet>
    <body className="text-center" />
    </Helmet>
    <Video src='/tease.mp4' className="fullscreen"/>
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main role="main" className="inner cover">{children}</main>
      <footer className="mastfoot mt-auto">
    <div className="inner">
    </div>
  </footer>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
