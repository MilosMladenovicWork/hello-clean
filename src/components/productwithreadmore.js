import React, {useState} from 'react'

import './styles/productwithreadmore.scss'

function Productwithreadmore({children}){
  const [clicked, setClicked] = useState(false)


  return(
    <div className={`product ${clicked ? 'expanded' : 'shrinked'}`}>
      {children}
      <button onClick={() => setClicked((prevState) => !prevState)}>Czytaj więcej...</button>
    </div>
  )
}

export default Productwithreadmore