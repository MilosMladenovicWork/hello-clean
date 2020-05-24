/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./styles/layout.scss"

function Layout({ children, mobileMenuClick, menuClicked }){

  return (
    <div 
      className={`${menuClicked && 'scroll-prevented'}`}
    >
      <Header
        mobileMenuClick={mobileMenuClick}
        menuClicked={menuClicked}
      />
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
