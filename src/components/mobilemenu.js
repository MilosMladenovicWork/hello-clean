import React from 'react'
import {Link} from 'gatsby'

import './styles/mobilemenu.scss'

function Mobilemenu({clicked}){



  return(
    <nav className={`mobile mobile-menu ${clicked && 'mobile-menu-active'}`}>
      <Link
        to="#"
        style={{
          color:'#23395b',
          textDecoration: `none`,
        }}
      >
        About
      </Link>
      <Link
        to="#"
        style={{
          color:'#23395b',
          textDecoration: `none`,
        }}
      >
        Contact
      </Link>
    </nav>
  )
}

export default Mobilemenu