import React from 'react'
import {Link} from 'gatsby'

import './styles/section.scss'
import './styles/herosection.scss'

function Herosection(){
  return(
    <section className='hero-section'>
      <div>
        <div
          style={{
            width:'100%',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
          }}
        >
        <div
          style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center'
          }}
        >
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
        <div>
          <img src={'https://via.placeholder.com/300'}/>
        </div>
        </div>
      </div>
      <div
        style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          marginTop:'40px'
        }}
      >
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