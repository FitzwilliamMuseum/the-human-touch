import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

function isActive( {isCurrent} ) {
    return isCurrent ? {className: "active nav-link"} : {className: "nav-link"}
}

const Header = ({ siteTitle }) => (
  <header className="masthead mb-auto">
    <div className="inner">
      <nav className="nav nav-masthead justify-content-right">
      <Link
  to="/"
   getProps={isActive}
  activeClassName="active"
>
  Home
</Link>
<Link
  to="/about/"
        getProps={isActive}
        className="nav-link"
      >
        About
      </Link>
      <Link
        to="/interactions/"
              getProps={isActive}
              className="nav-link"
            >
              Interactions
            </Link>

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
