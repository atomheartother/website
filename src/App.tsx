import React from "react";
import {ThemeProvider} from "styled-components";
import {lightTheme} from './theme'
import Body from './Body'

const App : React.FC = () => {
  return (
      <ThemeProvider theme={lightTheme}>
        <Body />
      </ThemeProvider>
  )
}

export default App;
