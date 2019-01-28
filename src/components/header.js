import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div `
  background: rebeccapurple;
  margin-bottom: 2rem;
`

const HeaderContainer = styled.div `
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  text-align: center;
`

const StyledLink = styled(Link)`
  flex: 1;
  color: white;
  text-decoration: none;
`

const Test1 = styled.div `
  flex: 1;
  color: red;
`

const Test2 = styled.div `
  flex: 1;
  color: blue;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <StyledLink to="/">
        <h1>Hello</h1>    
      </StyledLink>
      <Test1>Test 1</Test1>
      <Test2>Test 2</Test2>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
