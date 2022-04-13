export type TypedOptions = {
  delay?: number // Base delay between letters (ms)
  disabled?: boolean // If true, don't start typing yet.
  disableCursor?: boolean // If true, don't display a cursor
  done?: () => void // Callback for when the text is done
}
