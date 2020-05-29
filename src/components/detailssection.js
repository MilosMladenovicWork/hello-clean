import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import './styles/detailssection.scss'

function Detailssection(){

  const data = useStaticQuery(graphql`
  query {
    rowMainImages:allFile(filter: {relativeDirectory:{eq: "details-images"}}){
      edges{
        node{
          name
          childImageSharp{
            fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    benefitsIcons:allFile(filter: {relativeDirectory:{eq:"details-images/second-row-icons"}}){
      edges{
        node{
          name
          childImageSharp{
            fixed(width:44){
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
  `)

  data.rowMainImages.edges.sort((a, b) => Number(a.node.name) - Number(b.node.name))

  return(
    <section className='details-section'>
      <div className='details-item'>
        <div className='details-image'>
          <Img fluid={data.rowMainImages.edges[0].node.childImageSharp.fluid} imgStyle={{objectFit:"cover"}}/>
        </div>
        <div className='details-text'>
          <h2>Low-Maintenance through Smart Technology</h2>
          <ul>
            <li>
            Each Kub or Kub Premium self-monitors for needed refills and battery life; communicating directly with Touchland HQ.
            </li>
            <li>
            Each Kub or Kub Premium self-monitors for needed refills and battery life; communicating directly with Touchland HQ.
            </li>
            <li>
            Each Kub or Kub Premium self-monitors for needed refills and battery life; communicating directly with Touchland HQ.
            </li>
            <li>
            Each Kub or Kub Premium self-monitors for needed refills and battery life; communicating directly with Touchland HQ.
            </li>
          </ul>
          <p className='bold centered'>Coming Soon</p>
        </div>
      </div>
      <div className='details-item'>
        <div className='details-text'>
          <h2>Sanitizing Reimagined</h2>
          <ul>
            <li>
            Each Kub or Kub Premium self-monitors for needed refills and battery life; communicating directly with Touchland HQ.
            </li>
            <li>
            Each Kub or Kub Premium self-monitors for needed refills and battery life; communicating directly with Touchland HQ.
            </li>
          </ul>
          <div className='details-icons'>
            <figure>
              <Img fixed={data.benefitsIcons.edges[0].node.childImageSharp.fixed}/>
              <figcaption>Fast-absorbing</figcaption>
            </figure>
            <figure>
            <Img fixed={data.benefitsIcons.edges[1].node.childImageSharp.fixed}/>
              <figcaption>Fast-absorbing</figcaption>
            </figure>
            <figure>
              <Img fixed={data.benefitsIcons.edges[2].node.childImageSharp.fixed}/>
              <figcaption>Fast-absorbing</figcaption>
            </figure>
            <figure>
              <Img fixed={data.benefitsIcons.edges[3].node.childImageSharp.fixed}/>
              <figcaption>Fast-absorbing</figcaption>
            </figure>
            <figure>
              <Img fixed={data.benefitsIcons.edges[4].node.childImageSharp.fixed}/>
              <figcaption>Fast-absorbing</figcaption>
            </figure>
          </div>
          <p className='bold centered'>
            Full of what your hands need, not what they don’t
          </p>
          <p className='centered'>
          Kills 99.99% of germs | Triclosan free | Cruelty free | Paraben-free | Dermatologically tested
          </p>
          <div className='centered'>
            <Link to='#'>
              Get yours
            </Link>
          </div>
        </div>
        <div className='details-image'>
          <Img fluid={data.rowMainImages.edges[1].node.childImageSharp.fluid} />
        </div>
      </div>
      <div className='details-item'>
        <div className='details-image'>
         <Img fluid={data.rowMainImages.edges[2].node.childImageSharp.fluid} />
        </div>
        <div className='details-text'>
          <div
            style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              height:'100%'
            }}
          >
            <h2>Safe & Smart</h2>
            <p>A unique tray design and keyed-access security lock prevents the youngsters from playing with the device, and assurance that only those whom you grant access can access the cartridge</p>
            <div className='centered'>
              <Link to='#'>
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='details-item'>
        <div className='details-text'>
          <h2>A Sustainable alternative to using water and soap</h2>
          <p>By 2025, 2/3 of the world’s population won’t have access to fresh water. Touchland is doing its part to curb this trend, and provide a sustainable, environmentally friendly alternative to unnecessary water-waste. With our custom app, you can visualize a REAL TIME water-savings counter.</p>
          <p>
            <em>
            *WORLD HEALTH ORGANIZATION recommends to clean your hands by rubbing them with an alcohol-based formulation, as the preferred mean for routine hygienic hand antisepsis if hands are not visibly soiled. It is faster, more effective, and better tolerated by your hands than washing with soap and water.
            </em>
          </p>
          <div className='centered'>
            <Link to='#'>
              Shop Now
            </Link>
          </div>
        </div>
        <div className='details-image'>
          <Img fluid={data.rowMainImages.edges[3].node.childImageSharp.fluid} />
        </div>
      </div>
    </section>
  )
}

export default Detailssection