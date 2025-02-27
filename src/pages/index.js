import * as React from "react"
import SustainableLine from "../components/products/SustainableLine"
import ShopCategories from "../components/homepage/ShopCategories"
import InstagramWidget from "../components/instagram/Instagram"
import Hero from "../components/homepage/Hero"
import Seo from "../components/SearchEngOpt"
import Layout from "../components/Layout"

const Homepage = () => {
  return (
    <Layout>
      <Seo />
      <Hero />
      <SustainableLine />
      <ShopCategories />
      <InstagramWidget />
    </Layout>
  )
}

export default Homepage
