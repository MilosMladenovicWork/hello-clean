import React from 'react'
import {Link, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

import Productwithreadmore from './productwithreadmore'

import './styles/productssection.scss'

function Productssection({menuClicked}){

  const data = useStaticQuery(graphql`
  query{
    allFile(filter:{relativeDirectory:{eq:"product-images"}}){
      edges{
        node{
          name
          childImageSharp{
            fixed(width:300){
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
  `)

  data.allFile.edges.sort((a, b) => Number(a.node.name) - Number(b.node.name))

  return(
    <section id='products' className={`products-section ${menuClicked && 'mobile-menu-active'}`}>
      <Productwithreadmore>
        <Img 
          fixed={data.allFile.edges[0].node.childImageSharp.fixed}
          alt='basic product'
        />
        <h2>Basic</h2>
        <p>Podstawowy wariant urządzenia z obsługą manualną. Aplikator uruchamiany jest poprzez nacisk stopą, co pozwala ograniczyć konieczność dotykania przycisku dłońmi. Model Basic to wersja analogiczna, która posiada wszystkie podstawowe funkcjonalności produktów premium. Pozbawiona jest jednakże możliwości zdalnego kontrolowania stanu poprzez aplikację i wymaga samodzielnej weryfikacji pojemników z płynem dezynfekującym</p>
        <p>Aplikator ułatwia zachowanie higieny wszystkim osobom obecnym na terenie obiektu lub zakładu. Wystarczy skorzystać z urządzenia w dowolnym momencie, włożyć ręce pod aplikator, a następnie wcisnąć przycisk nogą. Rozpylony płyn dezynfekujący po zaledwie kilku sekundach eliminuje do 85% drobnoustrojów z powierzchni rąk. Urządzenie wymienne wkłady z płynem, które można zamówić bezpośrednio od nas.</p>
        <div className='minor-info'>
          <p>Szybka dezynfekcja,</p>
          <p>Ekonomiczny wkład o dużej pojemności,</p>
          <p>Możliwość montażu zewnętrznego,</p>
          <p>Wytrzymała konstrukcja.</p>
        </div>
      </Productwithreadmore>
      <Productwithreadmore>
        <Img 
          fixed={data.allFile.edges[1].node.childImageSharp.fixed}
          alt='smart product'
        />
          <h2>Smart</h2>
          <p>Inteligentny wariant urządzenia z możliwością zdalnego zarządzania. Aplikator wyposażony jest w zbliżeniowy dozownik, który spryskuje dłonie automatycznie po zbliżeniu ich do czujnika. Ogranicza to konieczność bezpośredniego kontaktu z korpusem urządzenia i znacznie podnosi higienę na terenie każdego obiektu lub zakładu.</p>
          <p>Smart może być obsługiwany zdalnie i nie wymaga samodzielnego sprawdzania stanu pojemników z płynem. Z poziomu smartfona otrzymujesz dostęp do wszystkich informacji na temat każdego urządzenia. Dedykowana aplikacja pozwala na zarządzanie każdym aplikatorem z osobna, z dowolnego miejsca. Opcja smart umożliwia zdalny podgląd statusu urządzenia, a także stanu baterii w akumulatorze i wkładu z płynem. Aplikacja posiada rozbudowany system powiadomień, a także pozwala na zamawianie wkładów z poziomu menu głównego.</p>
          <div className='minor-info'>
            <p>Zoptymalizowana obsługa urządzenia,</p>
            <p>Ekonomiczne zarządzanie płynem,</p>
            <p>Wkład o dużej pojemności z inteligentnym dozownikiem, </p>
            <p>Dedykowana aplikacja dla każdego aplikatora, </p>
            <p>Wbudowany akumulator,</p>
            <p>Możliwość zewnętrznego i wewnętrznego montażu, </p>
            <p>Bezdotykowy system aplikacji.</p>
          </div>
      </Productwithreadmore>
      <Productwithreadmore>
        <Img 
          fixed={data.allFile.edges[2].node.childImageSharp.fixed}
          alt='smart+ product'  
        />
          <h2>Smart+</h2>
          <p>Ulepszony wariant podstawowego modułu Smart. Posiada dodatkowe miejsca na reklamę. Urządzenie ma wszystkie atuty, którymi wyróżniał się Smart, jednakże optymalizuje każdy z nich. Umożliwia również efektywne promowanie własnych produktów i usług. Aplikator ustawiony na zewnątrz pozwala przedstawić potencjalnym klientom możliwości, które mogą uzyskać poprzez współpracę z firmą.</p>
          <p>Aplikator posiada dozownik zbliżeniowy, który spryskuje dłonie automatycznie po zbliżeniu ich do fotokomórki. Wyklucza to konieczność wciskania przycisku lub styczności korpusem urządzenia. Ograniczenie kontaktu fizycznego podnosi znacznie higienę na terenie każdego obiektu lub zakładu.</p>
          <p>Model Smart+ może być zarządzany praktycznie w pełni zdalnie. Nie wymaga on samodzielnego sprawdzania stanu pojemników z płynem, gdyż z poziomu aplikacja otrzymujesz dostęp do każdego urządzenia. Dedykowane oprogramowanie pozwala na podgląd wszystkich informacji i zarządzanie każdym aplikatorem z osobna. Aplikacja posiada rozbudowany system powiadomień, a także pozwala na zamawianie wkładów z poziomu menu głównego. Opcja Smart+ umożliwia zdalny podgląd statusu urządzenia, stanu jego akumulatora i wkładu z płynem. </p>
          <div className='minor-info'>
            <p>Dodatkowe miejsce na reklamę, </p>
            <p>Ekonomiczne zarządzanie płynem,</p>
            <p>Zoptymalizowana obsługa urządzenia,</p>
            <p>Dedykowana aplikacja dla każdego aplikatora,</p>
            <p>Wbudowany akumulator,</p>
            <p>Możliwość zewnętrznego i wewnętrznego montażu,</p>
            <p>Wkład o dużej pojemności z inteligentnym dozownikiem,</p>
            <p>Bezdotykowy system aplikacji.</p>
          </div>
      </Productwithreadmore>
      <Productwithreadmore>
        <Img
          fixed={data.allFile.edges[3].node.childImageSharp.fixed}
          alt='premium product'
        />
          <h2>Premium</h2>
          <p>Wariant aplikatorów Premium oferuje każdemu z klientów najwyższy standard higieny. Stanowi on efekt lat praktyki oraz połączenie możliwości wszystkich aplikatorów dostępnych w naszej ofercie. Premium posiada nie tylko każdą z funkcjonalności modeli Smart, ale także rozwija każdą z nich, ze szczególnym naciskiem nastawionym na ekonomię oraz systemy oszczędnego dozowania płynu. Ponadto wyposażony jest w moduł z dwustronnym monitorem na reklamy, które można zmieniać z  bezpośrednio z poziomu aplikacji. Urządzenie posiada efektowne wykończenie boków niebieskim podświetleniem typu LED.</p>
          <p>Aplikator posiada ulepszony dozownik zbliżeniowy, który wyklucza konieczność dotykania przycisku lub korpusu urządzenia. Spryskuje on automatycznie dłonie po zbliżeniu ich do czujnika. Wykluczenie kontaktu fizycznego wpływa definitywnie na higienę na terenie całego obiektu. Premium wyposażony jest w szczelny korpus, który pozwala na ustawienie go na zewnątrz budynku.</p>
          <p>Model Premium może być zarządzany praktycznie w pełni zdalnie. Wyjątek stanowi konieczność wymiany pojemników z płynem do dezynfekcji. Aplikator posiada jednak innowacyjny system dozowania, który ogranicza zużycie płynu do efektywnego minimum. Każda porcja naniesiona na dłonie zabija 100% drobnoustrojów przy zachowaniu niskiego użycia wkładu. </p>
          <p>Premium może być obsługiwany wyłącznie z poziomu aplikacji. Posiada ona rozbudowany system powiadomień, a także pozwala na zamawianie wkładów menu głównym. Nie wymaga samodzielnego sprawdzania stanu pojemników z płynem lub poziomu baterii. Z ekranu smartfona otrzymujesz dostęp do każdego urządzenia. Dedykowane oprogramowanie pozwala na podgląd wszystkich informacji i zarządzanie każdym aplikatorem z osobna. Opcja Smart+ pozwala na zdalny podgląd statusu urządzenia, stanu jego akumulatora i wkładu z płynem. </p>
          <div className='minor-info'>
            <p>Wkład o dużej pojemności z inteligentnym dozownikiem,</p>
            <p>Zoptymalizowana obsługa urządzenia,</p>
            <p>Wzmocniony korpus odporny na czynniki atmosferyczne,</p>
            <p>Możliwość zewnętrznego i wewnętrznego montażu,</p>
            <p>Dedykowana aplikacja dla każdego aplikatora,</p>
            <p>Zdalne sterowanie wyświetlaniem reklam,</p>
            <p>Dodatkowe miejsce na reklamę,</p>
            <p>Ekonomiczne zarządzanie płynem,</p>
            <p>Wbudowany akumulator,</p>
            <p>Bezdotykowy system aplikacji. </p>
          </div>
      </Productwithreadmore>
    </section>
  )
}

export default Productssection