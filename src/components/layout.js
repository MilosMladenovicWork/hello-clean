/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./styles/layout.scss"

const Layout = ({ children, mobileMenuClick, menuClicked }) => {
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
    <div 
      className={`${menuClicked && 'scroll-prevented'}`}
    >
      <Header 
        siteTitle={data.site.siteMetadata.title} 
        mobileMenuClick={mobileMenuClick}
        menuClicked={menuClicked}
      />
      <div
        style={{
          margin: `0 auto`
        }}
      >
        <main>{children}</main>
        <Footer/>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
