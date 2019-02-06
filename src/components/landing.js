import React from 'react'
import styled from 'styled-components'

import LandingBackground from '../images/landingBackground.png'

const LandingWrapper = styled.div `
    background: url(${LandingBackground});
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
`

const LandingContent = styled.div `

`

const Landing = () => (
    <LandingWrapper>
        <LandingContent>
        
        </LandingContent>
    </LandingWrapper>
)

export default Landing 

