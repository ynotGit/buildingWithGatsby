import React from 'react'
import styled from 'styled-components'
import { FaEnvelopeOpenText } from 'react-icons/fa'

const ContactWrapper = styled.section `
    text-align: center;
`

const ContactContainer = styled.div `

`

// - top envelope icons
// - input for name, email, number, company, MessageChannel
// - icons for each input


const Contact = () => (
    <ContactWrapper>
        <ContactContainer>
            <h1>Contact</h1>
            <form method='post'></form>
            <FaEnvelopeOpenText />
        </ContactContainer>
    </ContactWrapper>
)

export default Contact