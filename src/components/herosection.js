import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import './styles/section.scss'
import './styles/herosection.scss'

function Herosection({menuClicked}){

  
  const data = useStaticQuery(graphql`
  query {
    heroImg:file(relativePath:{eq:"test.jpg"}){
      childImageSharp{
        fluid(maxWidth:1000){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return(
    <section className={`hero-section ${menuClicked && 'mobile-menu-active'}`}>
      <div className='hero-main-content'>
        <div className='hero-text-container'>
          <h1>Introducing <br/>
              KUB & KUB Premium
          </h1>
          <p>
          Enabling healthier environments with a cost-effective, <br/>
          smart & beautifully designed commercial solution <br/>
          <Link to='#'>
            Get yours
          </Link>
          </p>
        </div>
        <div className='hero-image-position-container'>
          <div className='hero-image-container'>
            <Img 
              fluid={data.heroImg.childImageSharp.fluid} 
              style={{
                overflow:'hidden'
              }}
            /> 
            {/* <img src={'https://via.placeholder.com/300'}/> */}
          </div>
        </div>
      </div>
      <div className='hero-mobile-content-container'>
        <p className='centered mobile'>
          Enabling healthier environments with a cost-effective, smart & beautifully designed commercial solution<br/>
          <Link to='#'>
            Get yours
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Herosection