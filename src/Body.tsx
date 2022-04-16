import React from "react";
import styled from "styled-components";
import Header from "./Header"
import Paragraph from "./paragraph";

const Content = styled.div`
  background-color: ${p => p.theme.palette.background};
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 30px;
`

const RouterContainer = styled.div`
  flex: 1;
  display: flex;
`

const MainTextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  & > p {
    font-family: 'IBM Plex Mono';
    font-weight: 200;
    color: ${p => p.theme.palette.primary};
    font-size: 20pt;
    line-height: 1.5em;
  }
`

const Body : React.FC = () => {
  return (
    <Content>
      <Header />
      <RouterContainer>
        <MainTextContainer>
          <Paragraph lines={["hi, i'm liz.", "i made this website for you, to know me.", "(Press RETURN to continue)"]} />
        </MainTextContainer>
      </RouterContainer>
    </Content>
  )
}

export default Body;
