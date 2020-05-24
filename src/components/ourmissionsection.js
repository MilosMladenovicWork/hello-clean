import React from 'react'
import Swiper from 'react-id-swiper'

import 'swiper/css/swiper.css'
import './styles/section.scss'
import './styles/ourmissionsection.scss'

function Ourmissionsection({menuClicked}){

  return(
    <section className={`ourmission-section ${menuClicked && 'mobile-menu-active'}`}>
      <div>
        <h2>Our Mission</h2>
          <div className='testimonial'>
            <q>
            We decided to remove plastic gloves to limit the amount of single use plastic from our operations. By using Touchland’s dispensers and supplementing with traditional hand washing, Joe & The Juice baristas can work without needing rubber gloves—which is more environmentally friendly and more hygienic
            </q>
          </div>
      </div>
    </section>
  )
}

export default Ourmissionsection