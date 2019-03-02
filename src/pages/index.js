import React from 'react'

import Layout from '../components/layout'
import '../styles/main.scss'
import SEO from '../components/seo'

import Landing from '../components/landing'
import Intro from '../components/intro'
import Services from '../components/services'
import Blog from '../components/blog'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <Intro />
    <Services />
    <Blog />
    <Contact />
  </Layout>
)

export default IndexPage
