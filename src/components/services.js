import React from 'react'
import styled from 'styled-components'
import { FaBeer } from 'react-icons/fa';

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

const Services = () => (
    <ServicesWrapper>
        <ServicesContainer>
           <FaBeer />
        </ServicesContainer>
    </ServicesWrapper>
)

export default Services
