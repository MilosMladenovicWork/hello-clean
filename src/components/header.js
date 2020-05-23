import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './styles/header.scss'

import logo from '../images/logo-blue_195x.webp'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      display:'flex',
      justifyContent:'center'
    }}
  >
    <div
      style={{
        width:`1400px`,
        padding: `0 30px`,
        display:`flex`,
        justifyContent:`space-between`,
        alignItems:`center`,
        padding:`15px 0px 15px`
      }}
    >
      <Link
        to="/"
        style={{
          color:'#23395b',
          textDecoration: `none`,
        }}
      >
        <img src={logo} alt='hello clean logo'/>
      </Link>
      <nav>
        <Link
          to="#"
          style={{
            color:'#23395b',
            textDecoration: `none`,
          }}
        >
          About
        </Link>
        <Link
          to="#"
          style={{
            color:'#23395b',
            textDecoration: `none`,
          }}
        >
          Contact
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
