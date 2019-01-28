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
  padding: 1rem 0;
  display: flex;
  align-items: center;
  text-align: center;
`

const StyledLogoLink = styled(Link)`
  flex: 1;
  color: white;
  text-decoration: none;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <StyledLogoLink to="/">
        <img src={SmallLogo} alt="Header Logo"/>  
      </StyledLogoLink>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
