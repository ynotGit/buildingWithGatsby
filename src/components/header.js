import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import SmallLogo from '../images/smallLogo.png'

const HeaderWrapper = styled.div `
  background: rebeccapurple;
  margin-bottom: 1rem;
`

const HeaderContainer = styled.div `
  margin: 0 auto;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  text-align: center;
`

const StyledLogoLink = styled(Link)`
  flex: 1;
  align-items: center;
  color: white;

  > h2 {
    display: inline-block;
    padding: 0.5rem;
  }
`

const Nav = styled.nav `
  flex: 1;

  > ul {
      list-style: none;

    > li {
      display: inline-block;
      padding: 0 0.5rem;
    }
  }
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <StyledLogoLink to="/">
        <img src={SmallLogo} alt="Header Logo"/> 
        <h2>Y Not Innovate</h2> 
      </StyledLogoLink>
      <Nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </Nav>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
