import React from 'react'
import styled from 'styled-components'
import type {TypedOptions} from './types'
import useTyped from './useTyped'

const Blinking = styled.span`
  animation: blink 1s step-start infinite;
`

type Props = TypedOptions & {
  txt: string // Text to display
}

const Typed : React.FC<Props> = ({ txt, delay, done, disabled, disableCursor }) => {
  const rendered = useTyped(txt, {delay, done, disabled})
  return (
      <>
        {rendered}{!disableCursor && <Blinking>|</Blinking>}
      </>
    )
}

export default Typed;
