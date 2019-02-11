import React from 'react'
import styled from 'styled-components'
import { FaPencilRuler } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';

const ServicesWrapper = styled.div `
    height: 400px;
`

const ServicesContainer = styled.div `
    height: 100%;
    padding: 0.5rem 3rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DesignContainer = styled.div `
    flex: 1;
`

const UiUxContainer = styled.div `
    flex: 1;
`

const CodeContainer = styled.div `
    flex: 1;
`

const List = styled.ul `
    list-style-type: none;
`

const Services = () => (
    <ServicesWrapper>
        <ServicesContainer>
            <DesignContainer>
                <h2>Design</h2>
                <FaPencilRuler />
                <List>
                    <li>-Full Website / App Design-</li>
                    <li>-Templating-</li>
                    <li>-Customer Themes</li>
                    <li>-Digital Editing-</li>
                    <li>-Branding Design-</li>
                </List>
           </DesignContainer>
           <UiUxContainer>
                <h2>UI / UX</h2>
                <FaMobileAlt />
                <List>
                    <li>-Fully Responsive-</li>
                    <li>-High Performance-</li>
                    <li>-Easy Use-</li>
                    <li>-Engaging-</li>
                    <li>-Accessible-</li>
                </List>
            </UiUxContainer>
            <CodeContainer>
                <h2>Code</h2>
                <FaCode />
                <List>
                    <li>-Client Side-</li>
                    <li>-Server Side-</li>
                    <li>-SEO Optimization-</li>
                    <li>-eCommerce / Online Stores-</li>
                    <li>-API Integration-</li>
                </List>
            </CodeContainer>
        </ServicesContainer>
    </ServicesWrapper>
)

export default Services
