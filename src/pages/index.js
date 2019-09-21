import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Feature from '../components/homepage/Feature'
import NewProduct from '../components/homepage/NewProduct'
import Showcase from '../components/homepage/Showcase'
import Hero from '../components/homepage/Hero'

function Index({ data }) {
  const heroImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('backsplash')
  )
  const featureImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('featuredProduct')
  )
  const newImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('newProduct')
  )
  const detailImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('newDetail')
  )
  const waveImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('wave')
  )

  return (
    <div id="body">
      <Layout isHomepage waveImg={waveImg}>
        <Hero img={heroImg} />
        <Feature img={featureImg} />
        <NewProduct img={newImg} detailImg={detailImg} />
        <Showcase />
      </Layout>
    </div>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
