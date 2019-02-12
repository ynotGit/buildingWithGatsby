import React from 'react'
import styled from 'styled-components'

const IntroWrapper = styled.section `
    height: 400px;
`

const IntroContainer = styled.div `
    height: 100%;
    padding: 0.5rem 3rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Intro = () => (
    <IntroWrapper>
        <IntroContainer>
            <h1>We build slick websites with friendly user interaction at the heart of what
                we do.
            </h1>
        </IntroContainer>
    </IntroWrapper>
)

export default Intro
