import React from 'react'
import styled from 'styled-components'
import { elastic as BurgerMenu } from 'react-burger-menu'
import {
  FaHome,
  FaDiceD20,
  FaDraftingCompass,
  FaFeatherAlt,
  FaPaperPlane,
} from 'react-icons/fa'

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '26px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'block',
    color: 'white',
    margin: '50% 0',
    textDecoration: 'none',
    letterSpacing: '5px',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

const Icon = styled.span`
  margin-right: 10px;
`

const isMenuOpen = state => state.isOpen

const BurgerNav = () => (
  <BurgerMenu right onStateChange={isMenuOpen} styles={styles}>
    <a id="home" className="menu-item" href="/">
      <Icon>
        <FaHome />
      </Icon>
      Home
    </a>
    <a id="about" className="menu-item" href="/">
      <Icon>
        <FaDiceD20 />
      </Icon>
      About
    </a>
    <a id="services" className="menu-item" href="/">
      <Icon>
        <FaDraftingCompass />
      </Icon>
      Services
    </a>
    <a id="projects" className="menu-item" href="/">
      <Icon>
        <FaFeatherAlt />
      </Icon>
      Projects
    </a>
    <a id="contact" className="menu-item" href="/">
      <Icon>
        <FaPaperPlane />
      </Icon>
      Contact
    </a>
  </BurgerMenu>
)

export default BurgerNav
