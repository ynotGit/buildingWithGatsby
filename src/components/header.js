import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Media from 'react-media'

import HeaderLogo from '../images/headerLogo.png'
import MainNav from './mainNav'

const HeaderContainer = styled.header`
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

const Header = () => (
  <HeaderContainer>
    <StyledLogoLink to="/">
      <img src={HeaderLogo} alt="Header Logo" />
    </StyledLogoLink>
    <Media query="(max-width: 880px)">
      {matches => (matches ? null : <MainNav />)}
    </Media>
  </HeaderContainer>
)

export default Header
