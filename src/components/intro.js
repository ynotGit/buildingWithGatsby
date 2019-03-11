import React from 'react'
import styled from 'styled-components'

const IntroContainer = styled.section`
  height: 400px;
  padding: 0.5rem 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Intro = () => (
  <IntroContainer>
    <h1>Your super cool company slogan lives here!</h1>
  </IntroContainer>
)

export default Intro
