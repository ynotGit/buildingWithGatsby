import React from 'react'
import styled from 'styled-components'
import { FaPencilRuler, FaMobileAlt, FaCode } from 'react-icons/fa'

const ServicesContainer = styled.section`
  height: 100%;
  padding: 0.5rem 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ServiceColumn = styled.div`
  flex: 1;

  > h2 {
    padding: 20px 0;
  }

  > svg {
    font-size: 5rem;
    padding: 0.7rem;
    margin: 1rem 0;
    color: whitesmoke;
    background: black;
    border-radius: 50%;
  }
`

const List = styled.ul`
  list-style-type: none;

  > li {
    padding: 10px 0;
  }
`

const Services = () => (
  <ServicesContainer>
    <ServiceColumn>
      <h2>Design</h2>
      <FaPencilRuler />
      <List>
        <li>-Full Website / App Design-</li>
        <li>-Templating-</li>
        <li>-Customer Themes</li>
        <li>-Digital Editing-</li>
        <li>-Branding Design-</li>
      </List>
    </ServiceColumn>
    <ServiceColumn>
      <h2>UI / UX</h2>
      <FaMobileAlt />
      <List>
        <li>-Fully Responsive-</li>
        <li>-High Performance-</li>
        <li>-Easy Use-</li>
        <li>-Engaging-</li>
        <li>-Accessible-</li>
      </List>
    </ServiceColumn>
    <ServiceColumn>
      <h2>Code</h2>
      <FaCode />
      <List>
        <li>-Client Side-</li>
        <li>-Server Side-</li>
        <li>-SEO Optimization-</li>
        <li>-eCommerce / Online Stores-</li>
        <li>-API Integration-</li>
      </List>
    </ServiceColumn>
  </ServicesContainer>
)

export default Services
