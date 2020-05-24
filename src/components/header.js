import { Link } from "gatsby"
import React from "react"

import './styles/header.scss'

import logo from '../images/logo-blue_195x.webp'
import menuImg from '../images/menu-24px.svg'
import closeMenuImg from '../images/close-24px.svg'

const Header = ({mobileMenuClick, menuClicked }) => (
  <header
    className={`${menuClicked && 'mobile-menu-active'}`}
  >
    <div>
      <Link to="/">
        <img src={logo} alt='hello clean logo'/>
      </Link>
      <nav>
        <Link to="#">
          About
        </Link>
        <Link to="#">
          Contact
        </Link>
      </nav>
      <button className='mobile' onClick={() => mobileMenuClick()}>
        <img src={menuClicked ? closeMenuImg : menuImg} alt='menu' />
      </button>
    </div>
  </header>
)

export default Header
