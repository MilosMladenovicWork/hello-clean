import React, {useState} from "react"

import Layout from "../components/layout"
import Herosection from "../components/herosection"
import Benefitssection from "../components/benefitssection"
import Ourmissionsection from "../components/ourmissionsection"
import Productssection from "../components/productssection"
import Standoutsection from "../components/standoutsection"
import Contactform from "../components/contactform"
import Mobilemenu from "../components/mobilemenu"
import Image from "../components/image"
import SEO from "../components/seo"
import Detailssection from "../components/detailssection"

function IndexPage(){

  const [mobileMenuClicked, setMobileMenuClicked] = useState(false)

  function mobileMenuClickHandler(){
    setMobileMenuClicked(prevState => !prevState)
  }

  return(
  
    <Layout mobileMenuClick={mobileMenuClickHandler} menuClicked={mobileMenuClicked}>
      <SEO title="Home" />
      <Herosection menuClicked={mobileMenuClicked}/>
      <Benefitssection menuClicked={mobileMenuClicked}/>
      <Ourmissionsection menuClicked={mobileMenuClicked}/>
      <Productssection menuClicked={mobileMenuClicked}/>
      <Detailssection />
      <Standoutsection />
      <Contactform />
      <Mobilemenu clicked={mobileMenuClicked} mobileMenuClick={mobileMenuClickHandler}/>
    </Layout>
  )

}

export default IndexPage
