import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Herosection from "../components/herosection"
import Benefitssection from "../components/benefitssection"
import Ourmissionsection from "../components/ourmissionsection"
import Productssection from "../components/productssection"
import Image from "../components/image"
import SEO from "../components/seo"
import Detailssection from "../components/detailssection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Herosection />
    <Benefitssection />
    <Ourmissionsection />
    <Productssection />
    <Detailssection />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
