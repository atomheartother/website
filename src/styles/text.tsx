import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'IBM Plex Serif Light';
  color: ${p => p.theme.palette.primary};
  font-size: 24pt;
  font-weight: 300;
`

type HLProps = {
  invert?: boolean;
}

export const HL = styled.span<HLProps>`
  color: ${p => p.invert ? p.theme.palette.background : p.theme.palette.highlight};
`
