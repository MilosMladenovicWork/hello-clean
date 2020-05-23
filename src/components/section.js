import React from 'react'

import './styles/section.scss'

function Section({style, children}){
  return(
    <section
      style={{
        ...style
      }}
    >
      {children}
    </section>
  )
}

export default Section