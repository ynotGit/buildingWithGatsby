import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div `
  background: rebeccapurple;
  marginBottom: 2rem,
`

const HeaderContainer = styled.div `
  margin: 0 auto;
  maxWidth: 960;
  padding: 1.45rem 1.0875rem;
`



const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
