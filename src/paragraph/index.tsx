import React, {useCallback, useState} from "react";
import Typed from "../typed/Typed"

type P = {
  lines: string[];
  lineDelay?: number
}

const Paragraph : React.FC<P> = ({ lines, lineDelay }) => {
  const [currentLine, setCurrentLine] = useState(0)
  const done = useCallback((idx: number) => {
      setTimeout(() => {
          setCurrentLine(idx + 1);
      }, lineDelay || 600)
  }, [setCurrentLine, lineDelay])
  return (
      <>
        {lines.map((l, idx) => (
          <p key={l}>
            <Typed disabled={idx !== currentLine} txt={l} disableCursor={idx !== currentLine} done={() => {done(idx)}}/>
          </p>
        ))}
      </>
  )
}

export default Paragraph;
