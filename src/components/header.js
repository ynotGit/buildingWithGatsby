import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div `
  background: rebeccapurple;
  marginBottom: 2rem,
`

const HeaderContainer = styled.div `
  margin: 0 auto;
  maxWidth: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledLink = styled(props => <Link {...props} />)`
    color: white;
    textDecoration: none;
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
