import React from 'react'
import {Link} from 'gatsby'

import './styles/mobilemenu.scss'

function Mobilemenu({clicked, mobileMenuClick}){



  return(
    <nav 
      className={`mobile mobile-menu ${clicked && 'mobile-menu-active'}`}
    >
      <Link
      onClick={() => mobileMenuClick()}
        to="#products"
        style={{
          color:'#23395b',
          textDecoration: `none`,
        }}
      >
        Oferta
      </Link>
      <Link
      onClick={() => mobileMenuClick()}
        to="#customize"
        style={{
          color:'#23395b',
          textDecoration: `none`,
        }}
      >
        Customizacja
      </Link>
      <Link
        onClick={() => mobileMenuClick()}
        to="#contact"
        style={{
          color:'#23395b',
          textDecoration: `none`,
        }}
      >
        Kontakt
      </Link>
    </nav>
  )
}

export default Mobilemenu