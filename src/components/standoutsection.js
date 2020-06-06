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
    <section id='customize' className='standout-section'>
      <div>
        <h2>Dostosuj każde z urządzeń do swoich potrzeb</h2>
        <p>Zapewniamy możliwość dowolnej customizacji aplikatorów do indywidualnych preferencji klienta. Możemy dowolnie dostosowywać sprzęt do Twojej wizji. Każdy z aplikatorów może zostać wykonany z logo i w kolorystyce Twojej firmy. Wystarczy, że skontaktujesz się z nami i przedstawisz nam swój pomysł. </p>
        <p>Dopasujemy Twoją koncepcję do naszego sprzętu. Dzięki temu możesz zakupić zestaw aplikatorów, które będą dbać o higienę pracowników, a zarazem promować Twoje produkty lub usługi. </p>
        <Img 
          fluid={data.file.childImageSharp.fluid} 
          alt='comapnies using our products'
        />
      </div>
    </section>
  )
}

export default Standoutsection