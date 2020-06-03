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
        to="#"
        style={{
          color:'#23395b',
          textDecoration: `none`,
        }}
      >
        Oferta
      </Link>
      <Link
        onClick={() => mobileMenuClick()}
        to="#"
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