import React from 'react'

import './styles/footer.scss'

function Footer(){
  return(
    <footer>
      <div>
        <hr/>
        <div className='footer-content'>
          <p>
            © {new Date().getFullYear()} by Hello Clean
          </p>
          <div className='additional-links'>
            Realizacja -
            <a href='https://karermedia.pl/'>
              Karer Media
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer