import React from "react"
import styled from "styled-components"
//styles
import { ParagraphRegular, MenuLink } from '../UI/Typography'

const StyledFooter = styled.footer`
  display: flex;
  margin: 0 auto;
  text-align: center;
  color: white;
  background: var(--primary-color);
  padding: 1rem 0;
`

const FooterText = styled(ParagraphRegular)`
  display: flex;
  margin: 0 auto;
`

const Footer = () => (
  <StyledFooter>
    <FooterText>
      © {new Date().getFullYear()} &nbsp;<MenuLink to='https://www.kiekurecords.com/'>Kieku Records</MenuLink>
    </FooterText>
    <FooterText>
      Site built by &nbsp;<MenuLink to='https://github.com/NHartMusic'>Nick Hart</MenuLink>
    </FooterText>
  </StyledFooter>
)


export default Footer