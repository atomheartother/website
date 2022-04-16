import {HL, Title} from "@style/text";
import React from "react";
import styled from "styled-components"

const HeaderContainer = styled.div`
  display: flex;
  height: 60px;
  flex-direction: row;
  margin-bottom: 20px;
`

const Header : React.FC = () => (
    <HeaderContainer>
      <Title>
        <HL>home</HL> / <HL>about me</HL> / <HL>projects</HL> / <HL>contact</HL>
      </Title>
    </HeaderContainer>
)

export default Header;
