import React from 'react'
import {Link} from 'gatsby'

import './styles/section.scss'
import './styles/herosection.scss'

function Herosection({menuClicked}){
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
        <div className='hero-image-container'>
          <img src={'https://via.placeholder.com/300'}/>
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