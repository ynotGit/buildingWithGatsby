import React from 'react'

import Layout from '../components/layout'
import '../styles/main.scss'
import SEO from '../components/seo'

import Landing from '../components/landing'
import Intro from '../components/intro'
import Services from '../components/services'
// import Blog from '../components/blog'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <Intro />
    <Services />
  </Layout>
)

export default IndexPage
