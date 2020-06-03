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
        fluid(maxWidth:1920){
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
            <h1>Aplikatory w wariancie Premium
            </h1>
            <p>
            Świeżość, higiena i pełen komfort w kilka chwil!<br/>
            Sprawdź jak łatwo można zadbać o czystość dłoni i nie tylko.<br/>
            <Link to='#contact'>
              SKONTAKTUJ SIĘ
            </Link>
            </p>
          </div>
          <div className='hero-image-position-container'>
            <div className='hero-image-container'>
              <Img 
                fluid={data.heroImg.childImageSharp.fluid} 
                style={{
                  overflow:'hidden',
                  height:'100%'
                }}
                imgStyle={{
                  objectFit:'cover',
                  width:'100%',
                  height:'100%',
                  objectPosition:'70%'
                }}
              /> 
            </div>
          </div>
        </div>
        <div className='hero-mobile-content-container'>
          <p className='centered mobile'>
            Enabling healthier environments with a cost-effective, smart & beautifully designed commercial solution<br/>
            <Link to='#contact'>
              Get yours
            </Link>
          </p>
      </div>
    </section>
  )
}

export default Herosection