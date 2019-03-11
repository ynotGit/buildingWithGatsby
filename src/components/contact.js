import React from 'react'
import styled from 'styled-components'
import {
  FaRegAddressCard,
  FaRegEnvelope,
  FaMobileAlt,
  FaBuilding,
  FaCommentAlt,
} from 'react-icons/fa'

const ContactContainer = styled.section`
  text-align: center;
  margin: 20px 0;
`

const Form = styled.form`
  padding: 30px;
  border: 2px solid black;
  margin: 0 20px;
`

const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

const FormInput = styled.input`
  margin: 10px;
`

const FormLabel = styled.label`
  margin: 10px 0;

  > svg {
    font-size: 30px;
    vertical-align: middle;
  }
`

const FromTextArea = styled.textarea`
  margin: 0 10px;
`

const FormButton = styled.input`
  margin: 10px;
`

const Contact = () => (
  <ContactContainer>
    <h1>Contact Form</h1>
    <Form
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <FormInput type="hidden" name="bot-field" />
      <ContactRow>
        <ContactColumn>
          <FormLabel htmlFor="name">
            <FaRegAddressCard /> Name
          </FormLabel>
          <FormInput type="text" name="name" id="name" />
        </ContactColumn>
        <ContactColumn>
          <FormLabel htmlFor="email">
            <FaRegEnvelope /> Email
          </FormLabel>
          <FormInput type="email" name="email" id="email" />
        </ContactColumn>
      </ContactRow>
      <ContactRow>
        <ContactColumn>
          <FormLabel htmlFor="number">
            <FaMobileAlt /> Number
          </FormLabel>
          <FormInput type="number" name="number" id="number" />
        </ContactColumn>
        <ContactColumn>
          <FormLabel htmlFor="company">
            <FaBuilding /> Company
          </FormLabel>
          <FormInput type="text" name="company" id="company" />
        </ContactColumn>
      </ContactRow>
      <ContactRow>
        <ContactColumn>
          <FormLabel htmlFor="message">
            <FaCommentAlt /> Message
          </FormLabel>
          <FromTextArea name="message" id="message" rows="6" />
        </ContactColumn>
      </ContactRow>
      <ContactRow>
        <ContactColumn>
          <FormButton type="submit" value="Send" />
        </ContactColumn>
        <ContactColumn>
          <FormButton type="reset" value="Clear" />
        </ContactColumn>
      </ContactRow>
    </Form>
  </ContactContainer>
)

export default Contact
