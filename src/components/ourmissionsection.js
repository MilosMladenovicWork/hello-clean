import React from 'react'
import Swiper from 'react-id-swiper'

import 'swiper/css/swiper.css'
import './styles/section.scss'
import './styles/ourmissionsection.scss'

function Ourmissionsection({menuClicked}){

  return(
    <section className={`ourmission-section ${menuClicked && 'mobile-menu-active'}`} id='about'>
      <div>
        <h2>Nasza misja</h2>
          <div className='testimonial'>
            <q>
            Od lat zajmujemy się promowaniem utrzymywania higieny w przestrzeni publicznej, a także na terenie zakładów pracy. Dlaczego? Z tego względu, że tylko i wyłącznie profilaktyka stanowi skuteczną formę przeciwdziałania ponad 80% bakterii i wirusów, szczególnie osłonkowych. Dbamy o zdrowie i samopoczucie nie tylko naszych klientów, ale również ich najbliższych oraz pracowników.<br/><br/>
            Wieloletnia praktyka wskazuje, że kluczem do zachowania wysokiego standardu czystości na terenie każdego miejsca zatrudnienia, jest instalacja aplikatora płynu dezynfekującego. Zaledwie jedno urządzenie pozwala ograniczyć o połowę zachorowalność wśród 
            pracowników. Dlaczego? Z tego względu, że sama jego obecność wyrabia nawyk korzystania. Dezynfekcja dłoni wyklucza bowiem możliwość kontaktu bakterii na dłoniach z tkanką nabłonka. Odpowiednia higiena, to dodatkowa optymalizacja zarządzania, która prowadzi bezpośrednio do wzrostu efektywności i obrotów na terenie każdej firmy. 
            </q>
          </div>
      </div>
    </section>
  )
}

export default Ourmissionsection