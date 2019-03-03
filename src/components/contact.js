import React from 'react'
import styled from 'styled-components'
import { FaEnvelopeOpenText, FaRegAddressCard, FaRegEnvelope, FaMobileAlt, FaBuilding, FaCommentAlt } from 'react-icons/fa'

const ContactWrapper = styled.section `
    text-align: center;
`

const ContactContainer = styled.div `

`

const Form = styled.form `
    padding: 30px;
`

const ContactRow = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

const ContactColumn = styled.div `
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`

const FormInput = styled.input `
    margin: 10px;
`

const FormLabel = styled.label `
    margin: 10px 0;
`

const FromTextArea = styled.textarea `
    margin: 0 10px;
`

// - top envelope icons
// - input for name, email, number, company, MessageChannel
// - icons for each input


const Contact = () => (
    <ContactWrapper>
        <ContactContainer>
            <h1>Contact</h1>
            <Form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                <FormInput type="hidden" name="bot-field" />
                <FaEnvelopeOpenText />
                <ContactRow>
                    <ContactColumn>
                        <FaRegAddressCard />
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormInput type="text" name="name" id="name" />
                    </ContactColumn>
                    <ContactColumn>
                        <FaRegEnvelope />
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormInput type="email" name="email" id="email" />
                    </ContactColumn>
                </ContactRow>
                <ContactRow>
                    <ContactColumn>
                        <FaMobileAlt />
                        <FormLabel htmlFor="number">Number</FormLabel>
                        <FormInput type="number" name="number" id="number" />
                    </ContactColumn>
                    <ContactColumn>
                        <FaBuilding />
                        <FormLabel htmlFor="company">Company</FormLabel>
                        <FormInput type="text" name="company" id="company" />
                    </ContactColumn>
                </ContactRow>
                <ContactRow>
                    <ContactColumn>
                        <FaCommentAlt />
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <FromTextArea name="message" id="message" rows="6"></FromTextArea>
                    </ContactColumn>
                </ContactRow>
                <ContactRow>
                    <ContactColumn>
                        <FormInput type="submit" value="Send" className="special" />
                    </ContactColumn>
                    <ContactColumn>    
                        <FormInput type="reset" value="Clear" />
                    </ContactColumn>
                </ContactRow>
            </Form>
        </ContactContainer>
    </ContactWrapper>
)

export default Contact