import type { DefaultTheme} from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      background: string
      primary: string
      highlight: string
    }
  }
}

export const lightTheme: DefaultTheme = {
  palette: {
    background: "#e7e7e7",
    primary: "#232332",
    highlight: "#974444"
  }
}
