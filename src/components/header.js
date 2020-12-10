import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="masthead mb-auto">
    <div className="inner">
      <nav className="nav nav-masthead justify-content-center">
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
