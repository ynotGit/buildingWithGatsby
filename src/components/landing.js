import React from 'react'
import styled from 'styled-components'

import LandingBackground from '../images/landingBackground.png'

const LandingWrapper = styled.section `
    background: url(${LandingBackground});
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
`

const LandingContent = styled.div `
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Landing = () => (
    <LandingWrapper>
        <LandingContent>
            <h1>Landing Title</h1>
        </LandingContent>
    </LandingWrapper>
)

export default Landing 

