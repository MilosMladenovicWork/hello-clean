import { Link } from "gatsby"
import React from "react"

import './styles/header.scss'

import logo from '../images/logo.png'
import menuImg from '../images/menu-24px.svg'
import closeMenuImg from '../images/close-24px.svg'

function Header({mobileMenuClick, menuClicked }){
  
  return(
    <header
      className={`${menuClicked && 'mobile-menu-active'}`}
    >
      <div>
        <Link to="/">
          <img style={{height:50}} src={logo} alt='hello clean logo'/>
        </Link>
        <nav>
          <Link to="#products">
            Oferta
          </Link>
          <Link to="#customize">
            Customizacja
          </Link>
          <Link to="#contact">
            Kontakt
          </Link>
        </nav>
        <button className='mobile' onClick={() => mobileMenuClick()}>
          <img src={menuClicked ? closeMenuImg : menuImg} alt='menu' />
        </button>
      </div>
    </header>
  )
}

export default Header
