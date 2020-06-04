import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import './styles/section.scss'
import './styles/benefitssection.scss'

const benefitsArr = [
  {
    heading:"Smart aplikacja",
    paragraph:'Zapewniamy możliwość zdalnego zarządzania każdym aplikatorem. Aplikacja pozwala na podgląd statusu urządzenia, stanu baterii/wkładu z płynem.'
  },{
    heading:"Intuicyjne i bezdotykowe ",
    paragraph:'Urządzenia działają w pełni automatycznie. Wystarczy zbliżyć dłonie, a aplikator samodzielnie spryska je płynem dezynfekującym.'
  },{
    heading:"Oszczędność środka dezynfekującego",
    paragraph:'Jeden wkład wystarcza na utrzymanie higieny w całej firmie przez kilka miesięcy. '
  },{
    heading:"Trwała i solidna konstrukcja ",
    paragraph:'Wszystkie urządzenia wykonane z solidnych korpusów metalowych. Produkty przeznaczone są do użytku wewnętrznego i zewnętrznego.'
  },{
    heading:"Bezobsługowość",
    paragraph:'Obsługa i konserwacja urządzenia nie wymaga specjalistycznej wiedzy. Wystarczy wymienić płyn, o czym informuje wcześniej aplikacja.'
  },{
    heading:"Produkt polski",
    paragraph:'Aplikator został zaprojektowany i jest produkowany wyłącznie na terenie Polski, tak jak większość komponentów oraz materiałów niezbędna do jego produkcji.'
  },
]

function Benefitssection({menuClicked}){

  const data = useStaticQuery(graphql`
  query MyQuery {
    allFile(filter: {relativeDirectory: {eq: "benefits-images"}}) {
      edges{
        node{
          name
          extension
          publicURL
        }
      }
    }
  }
  `)

  data.allFile.edges.sort((a, b) => Number(a.node.name) - Number(b.node.name))

  return(
    <section className={`benefits-section ${menuClicked && 'mobile-menu-active'}`}>
      <div>
        <h2>Czym wyróżniają się nasze produkty?</h2>
        <div
          className='benefits-group'
        >
         {benefitsArr.map((benefit, index) => <div key={index}>
           <img style={{width:44}} src={data.allFile.edges[index].node.publicURL} alt={benefit.heading}/>
           <h6>{benefit.heading}</h6>
           <p>{benefit.paragraph}</p>
         </div>)}
        </div>
      </div>
    </section>
  )
}

export default Benefitssection