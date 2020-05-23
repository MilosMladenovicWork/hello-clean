import React from 'react'
import {Link} from 'gatsby'

import './styles/footer.scss'

function Footer(){
  return(
    <footer>
      <div>
        <hr/>
        <div className='footer-content'>
          <p>
            © touchland ® All rights reserved. {new Date().getFullYear()}.
          </p>
          <div className='additional-links'>
            <Link to='#'>
              Terms of use
            </Link>
            <Link to='#'>
              Privacy policy
            </Link>
            <Link to='#'>
              Returns & Shipping
            </Link>
            <Link to='#'>
              Help & faq
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer