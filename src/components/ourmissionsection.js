import React from 'react'
import Swiper from 'react-id-swiper'

import 'swiper/css/swiper.css'
import './styles/section.scss'
import './styles/ourmissionsection.scss'

function Ourmissionsection(){

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 130,
    loop: true
  }

  return(
    <section className='ourmission-section'>
      <div>
        <h2>Our Mission</h2>
        <Swiper {...params}>
          <div className='testimonial'>
            <q cite='Tres White, CRO of Purple'>
            We decided to remove plastic gloves to limit the amount of single use plastic from our operations. By using Touchland’s dispensers and supplementing with traditional hand washing, Joe & The Juice baristas can work without needing rubber gloves—which is more environmentally friendly and more hygienic
            </q>
            <p>Tres White, CRO of Purple</p>
          </div>
          <div className='testimonial'>
            <q cite='Tres White, CRO of Purple'>
            We decided to remove plastic gloves to limit the amount of single use plastic from our operations. By using Touchland’s dispensers and supplementing with traditional hand washing, Joe & The Juice baristas can work without needing rubber gloves—which is more environmentally friendly and more hygienic
            </q>
            <p>Tres White, CRO of Purple</p>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Ourmissionsection