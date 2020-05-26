import React from 'react'
import {Link, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

import './styles/productssection.scss'

function Productssection({menuClicked}){

  const data = useStaticQuery(graphql`
  query{
    allFile(filter:{relativeDirectory:{eq:"product-images"}}){
      edges{
        node{
          name
          childImageSharp{
            fixed(width:300){
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
  `)

  data.allFile.edges.sort((a, b) => Number(a.node.name) - Number(b.node.name))
  console.log(data)

  return(
    <section className={`products-section ${menuClicked && 'mobile-menu-active'}`}>
      <div className='product'>
        <Img fixed={data.allFile.edges[0].node.childImageSharp.fixed}/>
        <h2>KUB Basic</h2>
        <p>4 batteries D-type (Not included)</p>
        <p>Battery life: 2 years / 50,000 uses</p>
        <p>Frame: white ceramic-feel finish</p>
        <p>USB cable included Power supply not included</p>
        <p>Smart technology</p>
        <p>Touchless system</p>
        <p>Security lock</p>
        <p>Dosage regulation</p>
        <p>Battery life: 2 years / 50,000 uses</p>
        <p>Battery life: 2 years / 50,000 uses</p>
        <div className='minor-info'>
          <p>Height: 34,95 cm (13.78 inches)</p>
          <p>Width: 21 cm (8,27 inches)</p>
          <p>Depth: 12,3 cm (4,84 inches)</p>
        </div>
        <Link to='#'>SHOP NOW</Link>
      </div>   
      <div className='product'>
      <Img fixed={data.allFile.edges[1].node.childImageSharp.fixed}/>
        <h2>KUB Basic</h2>
        <p>4 batteries D-type (Not included)</p>
        <p>Battery life: 2 years / 50,000 uses</p>
        <p>Frame: white ceramic-feel finish</p>
        <p>USB cable included Power supply not included</p>
        <p>Smart technology</p>
        <p>Touchless system</p>
        <p>Security lock</p>
        <p>Dosage regulation</p>
        <p>Battery life: 2 years / 50,000 uses</p>
        <p>Battery life: 2 years / 50,000 uses</p>
        <div className='minor-info'>
          <p>Height: 34,95 cm (13.78 inches)</p>
          <p>Width: 21 cm (8,27 inches)</p>
          <p>Depth: 12,3 cm (4,84 inches)</p>
        </div>
        <Link to='#'>SHOP NOW</Link>
      </div>  
      <div className='product'>
      <Img fixed={data.allFile.edges[2].node.childImageSharp.fixed}/>
        <h2>KUB Basic</h2>
        <p>4 batteries D-type (Not included)</p>
        <p>Battery life: 2 years / 50,000 uses</p>
        <p>Frame: white ceramic-feel finish</p>
        <p>USB cable included Power supply not included</p>
        <p>Smart technology</p>
        <p>Touchless system</p>
        <p>Security lock</p>
        <p>Dosage regulation</p>
        <p>Battery life: 2 years / 50,000 uses</p>
        <p>Battery life: 2 years / 50,000 uses</p>
        <div className='minor-info'>
          <p>Height: 34,95 cm (13.78 inches)</p>
          <p>Width: 21 cm (8,27 inches)</p>
          <p>Depth: 12,3 cm (4,84 inches)</p>
        </div>
        <Link to='#'>SHOP NOW</Link>
      </div>   
      <div className='product'>
      <Img fixed={data.allFile.edges[3].node.childImageSharp.fixed}/>
        <h2>KUB Basic</h2>
        <p>4 batteries D-type (Not included)</p>
        <p>Battery life: 2 years / 50,000 uses</p>
        <p>Frame: white ceramic-feel finish</p>
        <p>USB cable included Power supply not included</p>
        <p>Smart technology</p>
        <p>Touchless system</p>
        <p>Security lock</p>
        <p>Dosage regulation</p>
        <p>Battery life: 2 years / 50,000 uses</p>
        <p>Battery life: 2 years / 50,000 uses</p>
        <div className='minor-info'>
          <p>Height: 34,95 cm (13.78 inches)</p>
          <p>Width: 21 cm (8,27 inches)</p>
          <p>Depth: 12,3 cm (4,84 inches)</p>
        </div>
        <Link to='#'>SHOP NOW</Link>
      </div>     
    </section>
  )
}

export default Productssection