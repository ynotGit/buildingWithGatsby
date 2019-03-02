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
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <FaEnvelopeOpenText />
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="field half">
                    <label htmlFor="number">Number</label>
                    <input type="number" name="number" id="number" />
                </div>
                <div className="field half">
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" id="company" />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="6"></textarea>
                </div>
                <ul className="actions">
                    <li><input type="submit" value="Send" className="special" /></li>
                    <li><input type="reset" value="Clear" /></li>
                </ul>
            </form>
        </ContactContainer>
    </ContactWrapper>
)

export default Contact