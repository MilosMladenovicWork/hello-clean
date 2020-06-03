import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import './styles/detailssection.scss'

function Detailssection(){

  const data = useStaticQuery(graphql`
  query {
    rowMainImages:allFile(filter: {relativeDirectory:{eq: "details-images"}}){
      edges{
        node{
          name
          childImageSharp{
            fluid(maxWidth:960){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    benefitsIcons:allFile(filter: {relativeDirectory:{eq:"details-images/second-row-icons"}}){
      edges{
        node{
          name
          childImageSharp{
            fixed(width:44){
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
  `)

  data.rowMainImages.edges.sort((a, b) => Number(a.node.name) - Number(b.node.name))

  return(
    <section className='details-section'>
      <div className='details-item'>
        <div className='details-image'>
          <Img fluid={data.rowMainImages.edges[0].node.childImageSharp.fluid} imgStyle={{objectFit:"cover"}}/>
        </div>
        <div className='details-text'>
          <h2>Zarządzaj każdym aplikatorem z poziomu aplikacji mobilnej!</h2>
          <ul>
            <li>
            Większość urządzeń dostępnych w naszej ofercie posiada możliwość obsługi zdalnej. Powoduje to, że każdym z osobna można zarządzać z dowolnego miejsca. Zapewnia to niezwykłą oszczędność czasu, gdyż wszystko możesz zrobić nie wstając z fotela. Kiedy chcesz możesz sprawdzić stan zapełnienia pojemnika oraz naładowania baterii.
            </li>
            <li>
            Ponadto nie musisz martwić się zakupem kolejnych wkładów. Wystarczy, że klikniesz odpowiedni przycisk z poziomu menu głównego. Centrala otrzymuje zgłoszenie i ciągu 1-2 dni, wkład zostaje dostarczony kurierem.
            </li>
            <li>
            Niezbędne jest jedynie własnoręczne montowanie nowych wkładów. Nasze dozowniki wyliczają w tym kontekście idealną proporcję płynu, który zabija do 100% bakterii przy jak największej oszczędności środka dezynfekującego. W efekcie wymiana w zależności od wielkości Twojej firmy będzie konieczna częściej niż raz na co najmniej miesiąc.
            </li>
            <li>
            Aplikacja pozwala zarządzać każdym urządzeniem, które zakupisz. W głównym panelu znajduje się się lista aplikatorów łącznie z nazwą modelu, jego lokalizacją, stanem baterii  oraz procentowym napełnianieniem wkładu. Możesz kontrolować każde z urządzeń z osobna i sprawdzać jego dokładne statystyki. System posiada rozbudowaną funkcję powiadomień, który poinformuje Cię m.in.  o konieczności napełnienia wkładu, jeśli jego stan zejdzie poniżej 10%.
            </li>
          </ul>
          <p className='bold centered'>Coming Soon</p>
        </div>
      </div>
      <div className='details-item'>
        <div className='details-text'>
          <h2>Komfort i higiena na lata</h2>
          <ul>
            <li>
            Nasze urządzenia to w pełni samoobsługowe, bezdotykowe aplikatory do dezynfekcji rąk. Praktycznie każde wyposażone jest w czujnik na podczerwień, który po zbliżeniu dłoni automatycznie spryskuje ich powierzchnię środkiem dezynfekującym. Obsługa bezdotykowa podnosi znacznie poziom higieny oraz nie pozwala rozwijać się drobnoustrojom na powierzchni urządzenia. 
            </li>
            <li>
            Każdy aplikator może być montowany zarówno na zewnątrz, jak i wewnątrz. Modele zdalne posiadają wbudowaną baterię, która umożliwia monitorowanie ich stanu w dowolnej chwili. Ponadto z poziomu aplikacji można jednym kliknięciem zamówić wkład, który w ciągu 1-2 dni wysyłany jest kurierem. 
            </li>
            <li>
            Urządzenia z naszej oferty posiadają inteligentny system dozowania płynu. Nasze wkłady wystarczają nawet na kilka miesięcy bez potrzeby wymiany, w zależności od wielkości Twojej firmy lub obiektu. Każdy aplikator precyzyjnie dozuje ilość płynu do wielkości dłoni, przy zachowaniu jak największej oszczędności zużycia. Możesz mieć pewności, że usuwa do 100% bakterii i wirusów osłonkowych.  
            </li>
            <li>
            Każdy z aplikatorów posiada wytrzymały korpus, który osłania komponenty wewnętrzne przed czynnikami atmosferycznymi i uszkodzeniami mechanicznymi. Proponowany przez naszą firmę bezdotykowy punkt dezynfekcji charakteryzuje się wysoką jakością wykonania i atrakcyjnym wyglądem. Nasze urządzenia to inwestycja na lata. 
            </li>
          </ul>
          <div className='centered'>
            <Link to='#contact'>
              Get yours
            </Link>
          </div>
        </div>
        <div className='details-image'>
          <Img fluid={data.rowMainImages.edges[1].node.childImageSharp.fluid} />
        </div>
      </div>
      <div className='details-item'>
        <div className='details-image'>
         <Img fluid={data.rowMainImages.edges[2].node.childImageSharp.fluid} />
        </div>
        <div className='details-text'>
          <div
            style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              height:'100%'
            }}
          >
            <h2>Ekonomiczne wkłady i kasety z płynem </h2>
            <p>Każde z naszych urządzeń zostało wyposażone w inteligentny system oszczędnego dozowania płynu. Zapewniamy bardzo niskie zużycie przy zachowaniu efektywności w usuwaniu bakterii. Jeśli stan pojemnika zejdzie poniżej minimum, zostaniesz o Tym powiadomiony z poziomu aplikacji mobilnej. Wystarczy jedno kliknięcie, aby zamówić zapasowy wkład.  </p>
            <p>Wymiana jest prosta i zajmuje kilka chwil. Wymaga to zaledwie czterech czynności, otwarcia urządzenia, wyciągnięcia zużytego wkładu, włożenia nowego i zamknięcia.</p>
            <div className='centered'>
              <Link to='#contact'>
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Detailssection