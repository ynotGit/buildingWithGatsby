import React from 'react'
import styled from 'styled-components'

import LandingBackground from '../images/landingBackground.png'

const LandingContent = styled.section`
  background: url(${LandingBackground});
  width: 100%;
  height: 90vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Landing = () => (
  <LandingContent>
    <h1>Company / Project Title</h1>
  </LandingContent>
)

export default Landing
