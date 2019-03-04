// import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer `
    background: whitesmoke;
    height: 200px;
    height: 100%;
    padding: 0.5rem 3rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Footer = () => (
    <FooterContainer>
        © {new Date().getFullYear()}, 
        Built with Gatsby 
    </FooterContainer>
)

export default Footer
