import React from "react";
import styled from "styled-components";
import Header from "./Header"
import Typed from "./typed/Typed";
import useTyped from "./typed/useTyped";

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
`

const Blinking = styled.span`
  animation: blink 1s step-start infinite;
`

const Body : React.FC = () => {
  const txt = useTyped("hi, i'm liz. I made this website for you, to know me.")
  return (
    <Content>
      <Header />
      <RouterContainer>
        <p>
          <Typed txt={`hi, i'm liz.\u000aI made this website for you, to know me.`} />
        </p>
        <p>{txt}<Blinking>|</Blinking></p>
      </RouterContainer>
    </Content>
  )
}

export default Body;
