import {useCallback, useEffect, useRef, useState} from "react"
import type {TypedOptions} from "./types";


const timingModifiers : {
  [key: string]: number
} = {
  ' ': 2,
  ',': 4,
  '.': 10,
}

const useTyped = (txt: string, {speed = 20, disabled = false, done = () => {}}: TypedOptions = {}): string => {
  const [idx, setIdx] = useState(0);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const typeNextLetter = useCallback(() => {
      let letterSpeed = speed;
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
  return txt.substring(0, idx)
}

export default useTyped;
