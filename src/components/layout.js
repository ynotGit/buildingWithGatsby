import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Media from 'react-media'

import Header from './header'
import Footer from './footer'
import BurgerNav from '../components/burgerNav'

import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div id="outer-container">
        <Media query="(max-width: 880px)">
          {matches => (matches ? <BurgerNav /> : null)}
        </Media>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main id="page-wrap">{children}</main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
