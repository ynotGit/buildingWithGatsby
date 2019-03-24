import React from 'react'
import { elastic as BurgerMenu } from 'react-burger-menu'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px',
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
    display: 'flex',
    flexDirection: 'column',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    textDecoration: 'none',
  },
  bmItem: {
    textAlign: 'center',
    display: 'block',
    color: 'white',
    margin: '50% 0',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

const isMenuOpen = state => state.isOpen

const BurgerNav = () => (
  <BurgerMenu right onStateChange={isMenuOpen} styles={styles}>
    <a id="home" className="menu-item" href="/">
      Home
    </a>
    <a id="about" className="menu-item" href="/">
      About
    </a>
    <a id="services" className="menu-item" href="/">
      Services
    </a>
    <a id="projects" className="menu-item" href="/">
      Projects
    </a>
    <a id="contact" className="menu-item" href="/">
      Contact
    </a>
  </BurgerMenu>
)

export default BurgerNav
