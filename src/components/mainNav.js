import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
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

const MainNav = () => (
  <Nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  </Nav>
)

export default MainNav
