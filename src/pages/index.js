import React, {useState} from "react"

import Layout from "../components/layout"
import Herosection from "../components/herosection"
import Benefitssection from "../components/benefitssection"
import Ourmissionsection from "../components/ourmissionsection"
import Productssection from "../components/productssection"
import Standoutsection from "../components/standoutsection"
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
      <Ourmissionsection />
      <Productssection />
      <Detailssection />
      <Standoutsection />
      <Mobilemenu clicked={mobileMenuClicked}/>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )

}

export default IndexPage
