// import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div `
    background: whitesmoke;
    height: 200px;
`

const FooterContainer = styled.div `
    height: 100%;
    padding: 0.5rem 3rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Footer = () => (
    <FooterWrapper>
        <FooterContainer>
            © {new Date().getFullYear()}, 
            Built with Gatsby 
        </FooterContainer>
    </FooterWrapper>
)

export default Footer
