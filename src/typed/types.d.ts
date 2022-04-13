export type TypedOptions = {
  speed?: number // Text base speed in ms
  disabled?: boolean // If true, don't start typing yet.
  disableCursor?: boolean // If true, don't display a cursor
  done?: () => void // Callback for when the text is done
}
