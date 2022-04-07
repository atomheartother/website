import React from "react";
import styled from "styled-components";
import Header from "./Header"
import Typed from "./Typed";

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

const Body : React.FC = () => (
    <Content>
      <Header />
      <RouterContainer>
        <p>
          <Typed txt={`hi, i'm liz.\u000aI made this website for you, to know me.`} />
        </p>
      </RouterContainer>
    </Content>
)

export default Body;
