import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

import './styles/standoutsection.scss'

function Standoutsection(){

  const data = useStaticQuery(graphql`
    query{
      file(relativePath:{eq:"standout-images/test.jpg"}){
        childImageSharp{
          fluid(maxWidth:1920){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return(
    <section className='standout-section'>
      <div>
        <h2>What makes Touchland stand out from the rest</h2>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    </section>
  )
}

export default Standoutsection