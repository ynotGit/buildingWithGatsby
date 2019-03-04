import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import HeaderLogo from '../images/headerLogo.png'

const HeaderContainer = styled.header `
  background: whitesmoke;
  margin: 0 auto;
  padding: 0.5rem 3rem;
  display: flex;
  align-items: center;
  align-content: center;
`

const StyledLogoLink = styled(Link)`
  flex: 1;
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
      text-align: right;

    > li {
      display: inline-block;
      padding: 0 0.5rem;
    }
  }
`

const Header = () => (
    <HeaderContainer>
      <StyledLogoLink to="/">
        <img src={HeaderLogo} alt="Header Logo"/> 
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
)

export default Header
