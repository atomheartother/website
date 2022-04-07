import React, {useCallback, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'

const Blinking = styled.span`
  animation: blink 0.5s step-start infinite;
`

type Props = {
  txt: string // Text to display
  speed?: number // Text base speed in ms
  disabled?: boolean // If true, don't start typing yet.
  disableCursor: boolean // If true, don't display a cursor
  done?: () => void // Callback for when the text is done
}

const timingModifiers : {
  [key: string]: number
} = {
  ' ': 2,
  ',': 5,
  '.': 10,
}

const Typed : React.FC<Props> = ({ txt, speed, done, disabled, disableCursor }) => {
  const [idx, setIdx] = useState(0);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const typeNextLetter = useCallback(() => {
      let letterSpeed = speed || 20;
      if (idx > 0) {
        const lastLetter = txt[idx-1];
        if (lastLetter in timingModifiers) {
          letterSpeed *= timingModifiers[lastLetter];
        }
      }
      timeoutId.current = setTimeout(() => {
          setIdx(idx + 1)
      }, letterSpeed);
  }, [speed, txt, idx, setIdx]);

  // This effect handles rendering text and the timers related to that.
  useEffect(() => {
    if (!disabled && idx < txt.length) {
      typeNextLetter();
    } else if (done) {
      done();
    }
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    }
  }, [typeNextLetter, idx, txt, done, disabled]);

  return (
      <>
        {txt.substring(0, idx)}{!disableCursor && <Blinking>|</Blinking>}
      </>
    )
}

export default Typed;
