import React from 'react'

import './styles/section.scss'
import './styles/benefitssection.scss'

const benefitsArr = [
  {
    img:'https://via.placeholder.com/44',
    heading:"Auto-alert",
    paragraph:'Smart IOT technology monitors refill consumption and battery life and auto-requests refills'
  },{
    img:'https://via.placeholder.com/44',
    heading:"Auto-alert",
    paragraph:'Smart IOT technology monitors refill consumption and battery life and auto-requests refills'
  },{
    img:'https://via.placeholder.com/44',
    heading:"Auto-alert",
    paragraph:'Smart IOT technology monitors refill consumption and battery life and auto-requests refills'
  },{
    img:'https://via.placeholder.com/44',
    heading:"Auto-alert",
    paragraph:'Smart IOT technology monitors refill consumption and battery life and auto-requests refills'
  },{
    img:'https://via.placeholder.com/44',
    heading:"Auto-alert",
    paragraph:'Smart IOT technology monitors refill consumption and battery life and auto-requests refills'
  },{
    img:'https://via.placeholder.com/44',
    heading:"Auto-alert",
    paragraph:'Smart IOT technology monitors refill consumption and battery life and auto-requests refills'
  },
]

function Benefitssection({menuClicked}){
  return(
    <section className={`benefits-section ${menuClicked && 'mobile-menu-active'}`}>
      <div>
        <h2>Discover the benefits</h2>
        <div
          className='benefits-group'
        >
         {benefitsArr.map((benefit, index) => <div key={index}>
           <img src={benefit.img} alt={benefit.heading + ' icon'}/>
           <h6>{benefit.heading}</h6>
           <p>{benefit.paragraph}</p>
         </div>)}
        </div>
      </div>
    </section>
  )
}

export default Benefitssection