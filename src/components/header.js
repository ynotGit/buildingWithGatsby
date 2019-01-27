import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div `
  background: rebeccapurple;
  margin-bottom: 2rem;
`

const HeaderContainer = styled.div `
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <StyledLink to="/">
        <h1>Hello</h1>    
      </StyledLink>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
